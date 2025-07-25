"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCourseData } from "@/lib/api";
import { Data } from "@/lib/types";
import { ThemeProvider } from "@/components/ThemeProvider";
import CoursePageSkeleton from "@/components/CoursePageSkeleton";
import CoursePageLayout from "@/components/CoursePageLayout";

interface PageProps {
  searchParams: { lang?: string };
}

/**
 * Main client page component with proper loading states and skeleton
 */
export default function ClientPage({ searchParams }: PageProps) {
  const [courseData, setCourseData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lang = searchParams.lang || "en";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        console.log("Starting data fetch..."); // Debug log

        const response = await getCourseData(lang);

        console.log("Data fetch completed:", response); // Debug log

        if (response && response.data) {
          setCourseData(response.data);
        } else {
          throw new Error("No data received from API");
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError(err instanceof Error ? err.message : "Failed to load course data");
      } finally {
        // Add minimum loading time to prevent flash
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }

    fetchData();
  }, [lang]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        {/* Conditional rendering based on loading and error states */}
        {loading ? (
          <CoursePageSkeleton />
        ) : error ? (
          <main className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unable to load course data</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          </main>
        ) : courseData ? (
          <CoursePageLayout courseData={courseData} />
        ) : (
          <CoursePageSkeleton />
        )}

        <Footer />
      </div>
    </ThemeProvider>
  );
}
