import { Section } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import Image from "next/image";

interface CourseFeaturesProps {
  sections: Section[];
}

/**
 * How the course is laid out section
 */
export default function CourseFeatures({ sections }: CourseFeaturesProps) {
  const featuresSection = sections?.find((section) => section.type === "features");
  let features = featuresSection?.values || [];

  if (features.length === 0) {
    features = [
      { title: "Reading Module", subtitle: "Master all question types with proven strategies" },
      { title: "Writing Module", subtitle: "Learn Task 1 and Task 2 with band 9 samples" },
      { title: "Listening Module", subtitle: "Practice with authentic materials and techniques" },
      { title: "Speaking Module", subtitle: "Build confidence with mock tests and feedback" },
    ];
  }

  return (
    <Card className="animate-fade-in-up" hover>
      <CardHeader>
        <CardTitle>{featuresSection?.name || "How the course is laid out"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature: any, index: number) => (
            <div
              key={feature.id || index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                {feature.icon && feature.icon !== "0" ? (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt=""
                      width={36}
                      height={36}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold group-hover:scale-105 transition-transform">
                    {index + 1}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title || `Module ${index + 1}`}
                </h3>
                {feature.subtitle && (
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
