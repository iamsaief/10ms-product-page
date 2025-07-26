import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import { getCourseData } from "@/lib/api";
import { Suspense } from "react";
import CoursePageSkeleton from "@/components/CoursePageSkeleton";

interface PageProps {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams?.lang === "bn" ? "bn" : "en";
  const data = await getCourseData(lang);
  const seoArray = data?.data?.seo;
  const seo = Array.isArray(seoArray) ? seoArray[0] : seoArray;

  // Helper to extract meta by value
  const getMetaContent = (key: string) =>
    seo?.defaultMeta?.find((meta: { value: string; content: string }) => meta.value === key)?.content;

  return {
    title: seo?.title || getMetaContent("og:title"),
    description: seo?.description || getMetaContent("og:description"),
    keywords: seo?.keywords,
    openGraph: {
      title: getMetaContent("og:title"),
      description: getMetaContent("og:description"),
      url: getMetaContent("og:url"),
      type: getMetaContent("og:type") === "product" ? "website" : getMetaContent("og:type"),
      locale: getMetaContent("og:locale"),
      images: [
        {
          url: getMetaContent("og:image") || getMetaContent("og:image:secure_url"),
          alt: getMetaContent("og:image:alt"),
          type: getMetaContent("og:image:type"),
        },
      ],
    },
  };
}

// Server-side rendered page component
export default async function HomePage() {
  return (
    <Suspense fallback={<CoursePageSkeleton />}>
      <ClientPage />
    </Suspense>
  );
}
