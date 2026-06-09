import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum — ${content.meta.siteName}`,
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  const { impressum } = content;
  return (
    <LegalPage
      title={impressum.title}
      intro={impressum.intro}
      sections={impressum.sections}
      disclaimer={impressum.disclaimer}
    />
  );
}
