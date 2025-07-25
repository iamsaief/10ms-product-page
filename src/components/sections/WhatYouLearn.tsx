import { Section } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Icon } from "../ui/Icon";

interface WhatYouLearnProps {
  sections: Section[];
}

/**
 * What you will learn section
 */
export default function WhatYouLearn({ sections }: WhatYouLearnProps) {
  const pointersSection = sections?.find((section) => section.type === "pointers");
  let points = pointersSection?.values || [];

  if (points.length === 0) {
    points = [
      { text: "Advanced Reading Strategies" },
      { text: "Writing Task 1 & 2 Mastery" },
      { text: "Listening Skills Enhancement" },
      { text: "Speaking Confidence Building" },
      { text: "Time Management Techniques" },
      { text: "Band Score Improvement" },
    ];
  }

  return (
    <Card className="animate-fade-in-up" hover>
      <CardHeader>
        <CardTitle>{pointersSection?.name || "What you will learn by doing the course"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {points.map((point: any, index: number) => (
            <div
              key={point.id || index}
              className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200/50 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size="sm" className="text-white">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Icon>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                  {point.text || `Learning Point ${index + 1}`}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
