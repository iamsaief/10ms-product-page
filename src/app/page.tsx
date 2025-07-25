import type { Metadata } from "next";

interface PageProps {
  searchParams: { lang?: string };
}

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  return {
    title: "IELTS Course - Complete Preparation | 10minuteschool",
    description: "Master IELTS with our comprehensive preparation course designed by experts",
    keywords: "IELTS, English, Test Preparation, Online Course, 10minuteschool",
    openGraph: {
      title: "IELTS Course - Complete Preparation | 10minuteschool",
      description: "Master IELTS with our comprehensive preparation course designed by experts",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "IELTS Course - Complete Preparation | 10minuteschool",
      description: "Master IELTS with our comprehensive preparation course designed by experts",
    },
  };
}

// Server-side rendered page component
export default async function HomePage({ searchParams }: PageProps) {
  return <>Hello world</>;
}
