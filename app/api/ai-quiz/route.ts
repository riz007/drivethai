import { type NextRequest, NextResponse } from "next/server";

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Rate limit: 15 requests per minute per IP
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15;

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded
    ? forwarded.split(",")[0]
    : request.headers.get("x-real-ip") || "unknown";
  return `rate-limit:${ip}`;
}

function checkRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired one
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    rateLimitStore.set(key, newEntry);
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: newEntry.resetTime,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    const rateLimit = checkRateLimit(rateLimitKey);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: "Too many requests. Please try again later.",
          resetTime: rateLimit.resetTime,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimit.resetTime.toString(),
          },
        }
      );
    }

    const { signData, language, questionCount } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `You are an expert in Thai traffic signs and road safety. Generate ${
      questionCount || 10
    } multiple-choice quiz questions about Thai road signs.

For each question, provide:
1. A clear question in both English and Thai
2. Four answer options (one correct, three plausible but incorrect)
3. A brief explanation of the correct answer in both languages

Use this sign data as context: ${JSON.stringify(signData)}

Return the response in this exact JSON format:
{
  "questions": [
    {
      "questionEn": "Question in English",
      "questionTh": "คำถามภาษาไทย",
      "signId": "sign-id-from-data",
      "options": [
        {"id": "a", "textEn": "Option A", "textTh": "ตัวเลือก A"},
        {"id": "b", "textEn": "Option B", "textTh": "ตัวเลือก B"},
        {"id": "c", "textEn": "Option C", "textTh": "ตัวเลือก C"},
        {"id": "d", "textEn": "Option D", "textTh": "ตัวเลือก D"}
      ],
      "correctAnswerId": "a",
      "explanationEn": "Explanation in English",
      "explanationTh": "คำอธิบายภาษาไทย"
    }
  ]
}

Make questions educational and relevant to real driving scenarios in Thailand.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8000,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Throw API error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate quiz questions", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json(
        { error: "No content generated" },
        { status: 500 }
      );
    }

    const quizData = JSON.parse(generatedText);

    return NextResponse.json(quizData, {
      headers: {
        "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
        "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        "X-RateLimit-Reset": rateLimit.resetTime.toString(),
      },
    });
  } catch (error: unknown) {
    console.error("Error generating quiz:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
