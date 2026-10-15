import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { PhotoKey } from "@/types";

const PREVIEW: PhotoKey[] = ["siteDrone", "relayPanel", "factoryFloor", "fatMeeting"];

export default function GalleryStrip() {
  return (
    <Section labelledBy="gallery-title" className="pt-0 md:pt-0">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading id="gallery-title" eyebrow="In the field" title="On site, in the factory, in training" />
        <Link href="/about#gallery" className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
          Full gallery <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {PREVIEW.map((id, i) => (
          <Photo
            key={id}
            id={id}
            sizes="(max-width: 768px) 50vw, 280px"
            className={i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] md:translate-y-8"}
          />
        ))}
      </div>
    </Section>
  );
}
