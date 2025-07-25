import { Section } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Icon } from "../ui/Icon";
import Image from "next/image";

interface CourseExclusiveFeatureProps {
  sections: Section[];
}

/**
 * Course Exclusive Feature section
 */
export default function CourseExclusiveFeature({ sections }: CourseExclusiveFeatureProps) {
  const exclusiveSection = sections?.find((section) => section.type === "feature_explanations");

  let features = exclusiveSection?.values || [];

  if (features.length === 0) {
    features = [
      { title: "Personal Mentor Support", checklist: ["Get dedicated mentor support throughout your journey"] },
      { title: "Live Speaking Practice", checklist: ["Weekly live speaking practice with real-time feedback"] },
    ];
  }

  return (
    <Card
      className="animate-fade-in-up bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-rose-900/10 border-purple-200/50 dark:border-purple-800/30"
      hover
    >
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <Icon size="sm" className="mr-1 text-yellow-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
            </Icon>
            Exclusive
          </Badge>
        </div>
        <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {exclusiveSection?.name || "Course Exclusive Features"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {features.map((feature: any, index: number) => (
            <div key={feature.id || index} className="group">
              <div className="flex items-start space-x-4 p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-white/80 dark:border-gray-700/80 hover:shadow-lg transition-all duration-300">
                {feature.file_url && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-30 sm:h-30 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 group-hover:scale-105 transition-transform">
                      <Image
                        src={feature.file_url || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-contain rounded-[6px]"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {feature.title || `Exclusive Feature ${index + 1}`}
                  </h3>
                  {feature.checklist && feature.checklist.length > 0 && (
                    <ul className="space-y-2">
                      {feature.checklist.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <Icon size="sm" className="text-purple-500 mt-0.5 flex-shrink-0">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Icon>
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
