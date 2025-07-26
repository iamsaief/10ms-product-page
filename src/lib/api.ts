import { ApiResponse } from "./types";

/**
 * Fetches course data from the 10minuteschool API with proper error handling
 * @param lang - Language preference (en/bn)
 * @returns Promise<ApiResponse>
 */
export async function getCourseData(lang = "en"): Promise<ApiResponse> {
  const apiUrl = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  // console.log("Fetching from URL:", apiUrl); // Debug log

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "Content-Type": "application/json",
      },
      // ISR: Revalidate the data every hour (3600 seconds)
      next: { revalidate: 3600 },
    });

    // console.log("Response status:", response.status); // Debug log

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // console.log("Raw API Response:", JSON.stringify(data, null, 2)); // Debug log

    // Check if we have the expected data structure (real API uses 'code' instead of 'success')
    if (data && data.code === 200 && data.data) {
      //   console.log("🎯 API DATA FOUND, RETURNING:", data);
      return data;
    } else {
      console.log("Unexpected API structure, using fallback");
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    console.error("API Error:", error);

    console.log("Using fallback mock data");

    // Simulate network delay for realistic loading experience
    await new Promise((resolve) => setTimeout(resolve, 1000));

    throw new Error((error as Error)?.message || "Unknown error");
  }
}
