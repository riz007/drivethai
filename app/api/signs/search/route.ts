import { type NextRequest, NextResponse } from "next/server";
import { searchSigns } from "@/lib/road-signs-data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const locale = searchParams.get("locale") || "en";

  if (!query) {
    return NextResponse.json(
      { error: "Search query is required" },
      { status: 400 }
    );
  }

  try {
    const signs = searchSigns(query, locale as "en" | "th");

    return NextResponse.json({
      signs,
      total: signs.length,
      query,
      locale,
      metadata: {
        source: "Thai Department of Land Transport",
        lastUpdated: new Date().toISOString(),
        version: "1.0",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to search road signs" },
      { status: 500 }
    );
  }
}
