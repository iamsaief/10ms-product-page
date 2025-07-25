import { Data } from "@/lib/types";
import CourseOverview from "./sections/CourseOverview";

interface CoursePageLayoutProps {
  courseData: Data;
}

/**
 * Main course page layout with modern design and sticky sidebar
 */
export default function CoursePageLayout({ courseData }: CoursePageLayoutProps) {
  console.log("CoursePageLayout - Full course data:", JSON.stringify(courseData, null, 2));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="max-w-7xl mx-auto container-padding section-spacing">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview (Title + Description) */}
            <CourseOverview courseData={courseData} />
          </div>

          {/* Right Column - Sticky Sidebar (1/3 width) */}
          <div className="lg:col-span-1">
            {/* <StickyEnrollmentCard
              media={courseData.media || []}
              checklist={courseData.checklist || []}
              ctaText={courseData.cta_text}
            /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
