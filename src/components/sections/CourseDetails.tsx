import { Section } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

interface CourseDetailsProps {
  sections: Section[];
}

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

/**
 * Course details section
 */
export default function CourseDetails({ sections }: CourseDetailsProps) {
  const aboutSection = sections?.find((section) => section.type === "about");

  if (!aboutSection || !aboutSection.values || aboutSection.values.length === 0) {
    return (
      <Card className="animate-fade-in-up" hover>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Course details will be available soon.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in-up" hover>
      <CardHeader>
        <CardTitle>{aboutSection.name || "Course Details"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          items={aboutSection.values.map((item) => ({
            title: item.title || "Untitled",
            content: item.description || "",
          }))}
        />
      </CardContent>
    </Card>
  );
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-dashed">
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="cursor-pointer p-4 font-medium flex justify-between items-center hover:bg-muted dark:hover:bg-white/3 transition">
            {/* Title */}
            <span dangerouslySetInnerHTML={{ __html: item.title }} />

            {/* Toggle Icon */}
            <span className="text-xl transition-transform duration-200 ease-in-out">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>

          {/* Content */}
          <div
            className="px-4 pb-4 pt-2 text-muted-foreground leading-relaxed [&>p]:mb-4 [&>li]:mb-2 [&>ul]:mb-4"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </details>
      ))}
    </div>
  );
}
