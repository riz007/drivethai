/**
 * API Client for fetching road signs data from external endpoints
 *
 * This file demonstrates how to integrate with external APIs.
 * Update the API_BASE_URL to connect to your data source.
 */

// Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

// Types matching the data structure
import type { RoadSign } from "./road-signs-data";

/**
 * Fetch all road signs from the API
 */
export async function fetchRoadSigns(): Promise<RoadSign[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/signs`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.signs || [];
  } catch {
    // Fallback to local data if API fails
    const { roadSigns } = await import("./road-signs-data");
    return roadSigns;
  }
}

/**
 * Fetch road signs by category
 */
export async function fetchRoadSignsByCategory(
  category: string
): Promise<RoadSign[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/signs?category=${category}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.signs || [];
  } catch {
    // Fallback to local data
    const { getSignsByCategory } = await import("./road-signs-data");
    return getSignsByCategory(category as any);
  }
}

/**
 * Fetch road signs by vehicle type
 */
export async function fetchRoadSignsByVehicle(
  vehicle: string
): Promise<RoadSign[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/signs?vehicle=${vehicle}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.signs || [];
  } catch {
    // Fallback to local data
    const { getSignsByVehicle } = await import("./road-signs-data");
    return getSignsByVehicle(vehicle as any);
  }
}

/**
 * Search road signs
 */
export async function searchRoadSigns(
  query: string,
  locale: "en" | "th"
): Promise<RoadSign[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/signs/search?q=${encodeURIComponent(
        query
      )}&locale=${locale}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.signs || [];
  } catch {
    // Fallback to local search
    const { searchSigns } = await import("./road-signs-data");
    return searchSigns(query, locale);
  }
}

/**
 * Example API endpoint structure for backend implementation:
 *
 * GET /api/signs
 * - Returns all road signs
 * - Query params: category, vehicle
 *
 * GET /api/signs/search
 * - Search road signs
 * - Query params: q (query), locale
 *
 * Response format:
 * {
 *   "signs": RoadSign[],
 *   "total": number,
 *   "metadata": {
 *     "source": "Thai Department of Land Transport",
 *     "lastUpdated": "2025-01-01",
 *     "version": "1.0"
 *   }
 * }
 */
