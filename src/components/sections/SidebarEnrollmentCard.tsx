"use client";

import { Checklist, CtaText, Medium } from "@/lib/types";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Icon } from "../ui/Icon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import VideoPlayer from "../VideoPlayer";
import Image from "next/image";

interface SidebarEnrollmentCardProps {
  media: Medium[];
  checklist: Checklist[];
  ctaText?: CtaText;
}

/**
 * Sticky enrollment card combining trailer, CTA, and checklist
 */
export default function SidebarEnrollmentCard({ media, checklist, ctaText }: SidebarEnrollmentCardProps) {
  // console.log("SidebarEnrollmentCard - Props:", { media, checklist, ctaText });

  // Find the trailer video
  const trailerVideo = media?.find(
    (item) => item.resource_type === "video" && (item.name === "preview_gallery" || item.name === "trailer")
  );

  return (
    <div className="sticky top-18">
      <Card className="animate-fade-in-right glass" hover>
        {/* Video Trailer Section */}
        <CardHeader className="pb-4">
          {trailerVideo ? (
            <VideoPlayer
              videoUrl={`https://www.youtube.com/watch?v=${trailerVideo.resource_value}`}
              thumbnail={trailerVideo.thumbnail_url}
              title="Course Trailer"
            />
          ) : (
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Icon size="lg" className="mx-auto mb-3 text-muted-foreground w-[50]">
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
                <p className="text-sm text-muted-foreground">Preview coming soon</p>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Pricing Section */}
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-3xl font-bold text-foreground">৳1,000</span>
              <Badge variant="error" size="sm">
                50% OFF
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground line-through">৳2,000</p>
            <p className="text-sm text-primary font-medium mt-1">Limited time offer</p>
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="lg" className="w-full text-lg py-4 shadow-lg hover:shadow-xl">
            {ctaText?.name || "Enroll Now"}
          </Button>

          {/* Course Stats */}
          {checklist.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h3 className="font-semibold text-foreground text-sm mb-3">{"What's Included"}</h3>
              {checklist.map((item, index) => (
                <div key={item.id || index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {item.icon && item.icon !== "" ? (
                      <Image
                        width={20}
                        height={20}
                        src={item.icon || "/placeholder.svg"}
                        alt=""
                        className="w-4 h-4 object-contain opacity-70"
                      />
                    ) : (
                      <Icon size="sm" variant="primary">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Icon>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
