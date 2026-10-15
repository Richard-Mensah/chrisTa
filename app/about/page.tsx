import AboutFacts from "@/components/features/about/AboutFacts";
import Biography from "@/components/features/about/Biography";
import CareerTimeline from "@/components/features/about/CareerTimeline";
import TrainingJourney from "@/components/features/credentials/TrainingJourney";
import PhotoGallery from "@/components/features/gallery/PhotoGallery";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";
import type { PhotoKey } from "@/types";

export const metadata = pageMeta({
  title: "About",
  description:
    "Biography of Ing. Christabel Fremah Owusu: BSc Electrical and Electronics Engineering (UENR), with experience at NEDCo, ELECNOR on VRA solar plants, and Bentry Company Limited.",
  path: "/about",
});

const ALL_PHOTOS: PhotoKey[] = [
  "portrait",
  "siteDrone",
  "relayPanel",
  "factoryFloor",
  "trainingSession",
  "fatMeeting",
  "factoryShowroom",
  "corridor",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 02 · About"
        title="An engineer shaped by the distribution network"
        lede="From transformer maintenance in Techiman to utility-scale solar in the Upper West and project engineering today."
      />
      <Biography />
      <Section className="pt-0 md:pt-0" labelledBy="facts-title">
        <SectionHeading id="facts-title" eyebrow="Profile" title="Affiliations and languages" />
        <div className="mt-10">
          <AboutFacts />
        </div>
      </Section>
      <Section tone="dark" labelledBy="journey-title">
        <SectionHeading id="journey-title" onDark eyebrow="Training journey" title="Ghana, USA, China, Germany" />
        <div className="mt-10">
          <TrainingJourney onDark />
        </div>
      </Section>
      <CareerTimeline />
      <Section id="gallery" className="scroll-mt-16 pt-0 md:pt-0" labelledBy="gallery-title">
        <SectionHeading id="gallery-title" eyebrow="Gallery" title="In the field" lede="Select a photo to view it larger. Use the arrow keys to move between photos." />
        <PhotoGallery ids={ALL_PHOTOS} className="mt-10" />
      </Section>
    </>
  );
}
