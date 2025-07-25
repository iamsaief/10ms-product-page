import { Data } from "@/lib/types";
import CourseOverview from "./sections/CourseOverview";
import SidebarEnrollmentCard from "./sections/SidebarEnrollmentCard";
import CourseFeatures from "./sections/CourseFeatures";
import WhatYouLearn from "./sections/WhatYouLearn";
import CourseExclusiveFeature from "./sections/CourseExclusiveFeature";
import CourseDetails from "./sections/CourseDetails";

interface CoursePageLayoutProps {
  courseData: Data;
}

/**
 * Main course page layout with modern design and sticky sidebar
 */
export default function CoursePageLayout({ courseData }: CoursePageLayoutProps) {
  //   console.log("CoursePageLayout - Full course data:", JSON.stringify(courseData, null, 2));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="max-w-7xl mx-auto container-padding section-spacing">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview (Title + Description) */}
            <CourseOverview courseData={courseData} />

            {/* How the course is laid out */}
            <CourseFeatures sections={courseData.sections || []} />

            {/* What you will learn */}
            <WhatYouLearn sections={courseData.sections || []} />

            {/* Course Exclusive Features */}
            <CourseExclusiveFeature sections={courseData.sections || []} />

            {/* Course Details */}
            <CourseDetails sections={courseData.sections || []} />
          </div>

          {/* Right Column - Sticky Sidebar (1/3 width) */}
          <div className="lg:col-span-1">
            <SidebarEnrollmentCard
              media={courseData.media || []}
              checklist={courseData.checklist || []}
              ctaText={courseData.cta_text}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
