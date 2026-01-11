import { type NextRequest, NextResponse } from "next/server";

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15;

const MODELS = [
  "mistralai/mistral-7b-instruct:free",
  "openchat/openchat-7b:free",
  "gryphe/mythomax-l2-13b:free",
  "undi95/toppy-m-7b:free",
  "openrouter/auto",
];

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

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

async function generateQuizWithFallback(
  apiKey: string,
  prompt: string,
  models: string[]
): Promise<{ content: string; usedModel: string }> {
  let lastError: Error | null = null;

  for (const model of models) {
    try {
      const response = await fetch(
        `${process.env.API_ENDPOINT}/api/v1/chat/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.8,
            max_tokens: 4000,
            response_format: {
              type: "json_object",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `${response.status}: ${errorData.error?.message || "Unknown error"}`
        );
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (!content) {
        throw new Error(`No content generated from ${model}`);
      }

      return { content, usedModel: model };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      continue;
    }
  }
  throw new Error(
    `All models failed to generate quiz. Last error: ${
      lastError?.message || "Unknown error"
    }`
  );
}

export async function POST(request: NextRequest) {
  try {
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

    const { signData, questionCount } = await request.json();

    if (!process.env.AI_API_KEY) {
      return NextResponse.json(
        { error: "AI API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `You are an expert in Thai traffic signs and road safety. Generate ${
      questionCount || 10
    } DIVERSE, RANDOM multiple-choice quiz questions about Thai road signs. Return ONLY valid JSON. Do not include explanations, markdown, comments, or code fences.

IMPORTANT REQUIREMENTS:
1. Each question must be unique and test different aspects of Thai driving knowledge
2. Vary the question types: identification, meaning, regulations, safety scenarios, vehicle-specific rules
3. Randomize correct answer positions: It should NEVER always be "a". Distribute correct answers evenly across a, b, c, and d
4. Create plausible but incorrect alternatives that test understanding (avoid obviously wrong answers)
5. Mix easy, medium, and hard difficulty questions
6. Include questions about: speed limits, priority rules, mandatory actions, warnings, temporary signs, vehicle restrictions

Use this sign data as context: ${JSON.stringify(signData)}

Return the response in this exact JSON format. CRITICAL: The correctAnswerId MUST be randomized (a, b, c, or d) and NOT always "a":
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
      "correctAnswerId": "b or c or d (RANDOMIZED - NOT always 'a')",
      "explanationEn": "Explanation in English",
      "explanationTh": "คำอธิบายภาษาไทย"
    }
  ]
}

DIVERSITY CHECKLIST:
✓ Question types vary (identification, meaning, scenarios, rules, safety)
✓ Correct answers distributed across a, b, c, d (not clustered on 'a')
✓ Difficulty levels mixed (easy, medium, hard)
✓ Questions are independent and test different signs/rules
✓ Plausible wrong answers that test real understanding
✓ Real-world driving scenarios, not trivia

Make questions educational and relevant to real driving scenarios in Thailand.`;

    const { content, usedModel } = await generateQuizWithFallback(
      process.env.AI_API_KEY,
      prompt,
      MODELS
    );
    const cleaned = content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let quizData;
    try {
      quizData = JSON.parse(cleaned);
    } catch {
      throw new Error("AI returned invalid JSON");
    }
    return NextResponse.json(
      { ...quizData, _metadata: { usedModel } },
      {
        headers: {
          "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          "X-RateLimit-Reset": rateLimit.resetTime.toString(),
        },
      }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
