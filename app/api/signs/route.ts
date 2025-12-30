import { type NextRequest, NextResponse } from "next/server";
import {
  roadSigns,
  getSignsByCategory,
  getSignsByVehicle,
} from "@/lib/road-signs-data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const vehicle = searchParams.get("vehicle");

  try {
    let signs = roadSigns;

    // Filter by category if provided
    if (category && category !== "all") {
      signs = getSignsByCategory(category as any);
    }

    // Filter by vehicle if provided
    if (vehicle && vehicle !== "all") {
      signs = getSignsByVehicle(vehicle as any);
    }

    return NextResponse.json({
      signs,
      total: signs.length,
      metadata: {
        source: "Thai Department of Land Transport",
        lastUpdated: new Date().toISOString(),
        version: "1.0",
        disclaimer:
          "For educational purposes only. Always refer to official DLT regulations.",
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch road signs" },
      { status: 500 }
    );
  }
}
