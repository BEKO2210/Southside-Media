import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `Datenschutzerklärung — ${content.meta.siteName}`,
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  const { datenschutz } = content;
  return (
    <LegalPage
      title={datenschutz.title}
      intro={datenschutz.intro}
      sections={datenschutz.sections}
      disclaimer={datenschutz.disclaimer}
    />
  );
}
