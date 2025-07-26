/**
 * Skeleton loader matching the exact wireframe layout
 * Prevents UI jumping by maintaining proper spacing and structure
 */
export default function CoursePageSkeleton() {
  return (
    <div className="animate-fade-in">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview Skeleton */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              {/* Badge Skeleton */}
              <div className="mb-4 flex gap-1">
                <div className="h-4 w-15 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-15 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-15 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              {/* Title Skeleton */}
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              {/* Rating Skeletoon */}
              <div className="h-6 w-50 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              {/* Instructors Skeleton */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-22 h-22 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-2/3"></div>
                  </div>
                </div>
              </div>
              {/* Description Skeleton */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-4/6"></div>
              </div>
            </section>

            {/* Course Features Skeleton */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-2/3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What You Learn Skeleton */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-6 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Exclusive Feature Skeleton */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg shadow-sm border border-purple-200 dark:border-purple-700 p-6">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-xl animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-2/3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Details Skeleton */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                    // style={{ width: `${Math.round(Math.random() * 40 + 60)}%` }}
                  ></div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="lg:col-span-1 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              {/* Trailer Skeleton */}
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>

              {/* CTA Skeleton */}
              <div className="space-y-4 mb-6">
                <div className="text-center space-y-2">
                  <div className="h-8 w-30 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                  <div className="h-4 w-35 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                </div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>

              {/* Checklist Skeleton */}
              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 flex-1 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
