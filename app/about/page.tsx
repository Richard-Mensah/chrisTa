import Biography from "@/components/features/about/Biography";
import CareerTimeline from "@/components/features/about/CareerTimeline";
import PageHero from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "Biography of Ing. Christabel Fremah Owusu: BSc Electrical and Electronics Engineering (UENR), with experience at NEDCo, ELECNOR on VRA solar plants, and Bentry Company Limited.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 02 · About"
        title="An engineer shaped by the distribution network"
        lede="From transformer maintenance in Techiman to utility-scale solar in the Upper West and project engineering today."
      />
      <Biography />
      <CareerTimeline />
    </>
  );
}
