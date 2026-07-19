import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureArticle from "@/components/FeatureArticle";
import { fitur } from "@/components/fiturData";
import { getFeatureContent } from "@/components/fiturContent";

export function generateStaticParams() {
  return fitur.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = fitur.find((f) => f.slug === slug);
  const content = getFeatureContent(slug);

  if (!meta || !content) {
    return { title: "Fitur tak ditemukan — JAGAD" };
  }

  return {
    title: `${meta.title} — JAGAD`,
    description: content.metaDescription,
  };
}

export default async function FiturDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = fitur.find((f) => f.slug === slug);
  const content = getFeatureContent(slug);

  if (!meta || !content) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FeatureArticle meta={meta} content={content} />
      </main>
      <Footer />
    </>
  );
}
