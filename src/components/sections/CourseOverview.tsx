import { Data } from "@/lib/types";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Icon } from "../ui/Icon";
import Image from "next/image";

interface CourseOverviewProps {
  courseData: Data;
}

/**
 * Combined course overview section with title, description, and instructor info
 */
export default function CourseOverview({ courseData }: CourseOverviewProps) {
  console.log("CourseOverview - Course Data:", courseData);

  // Find instructor section
  const instructorSection = courseData.sections?.find((section) => section.type === "instructors");
  const instructor = instructorSection?.values?.[0];

  // Extract enrollment number from checklist
  const enrollmentItem = courseData.checklist?.find(
    (item) => item.text.toLowerCase().includes("enrolled") || item.text.toLowerCase().includes("participants")
  );
  const enrollmentText = enrollmentItem?.text || "";
  const enrollmentMatch = enrollmentText.match(/\d+/);
  const enrollmentCount = enrollmentMatch ? Number.parseInt(enrollmentMatch[0]) : 0;

  // Get video count
  const videoItem = courseData.checklist?.find((item) => item.text.toLowerCase().includes("video"));
  const videoText = videoItem?.text || "";
  const videoMatch = videoText.match(/\d+/);
  const videoCount = videoMatch ? Number.parseInt(videoMatch[0]) : 0;

  return (
    <Card className="animate-fade-in-up" hover>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="success" size="sm">
            <Icon size="sm" className="mr-1 text-inherit">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
            </Icon>
            Bestseller
          </Badge>
          {enrollmentCount > 0 && (
            <Badge variant="default" size="sm">
              <Icon size="sm" className="mr-1 text-inherit">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Icon>
              {enrollmentCount.toLocaleString()} Students
            </Badge>
          )}
          {videoCount > 0 && (
            <Badge variant="warning" size="sm">
              <Icon size="sm" className="mr-1 text-inherit_">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Icon>
              {videoCount} Videos
            </Badge>
          )}
        </div>

        <CardTitle as="h1" className="text-3xl lg:text-4xl leading-tight mb-4">
          {courseData.title || "IELTS Course"}
        </CardTitle>

        {/* Rating */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} size="sm" variant="warning">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Icon>
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.8 (2,547 reviews)</span>
        </div>

        {/* Instructor Info */}
        {instructor && (
          <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-xl mb-6">
            <Image
              src={instructor.image || "/placeholder.svg?height=80&width=80"}
              alt={instructor.name || "Instructor"}
              width={100}
              height={100}
              className="w-[100] h-[100] rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <p className="font-semibold text-foreground">{instructor.name || "Course Instructor"}</p>
              <p className="text-sm text-primary font-medium">{instructor.short_description || "Expert Instructor"}</p>
              {instructor.description && (
                <div
                  className="text-xs text-muted-foreground mt-1"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              )}
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent>
        {/* Course Description */}
        {courseData.description && (
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: courseData.description }}
          />
        )}
      </CardContent>
    </Card>
  );
}
