import CaseTimeline from "@/components/features/experience/CaseTimeline";
import PowerSystemMap from "@/components/features/experience/PowerSystemMap";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects & experience",
  description:
    "Case files from Christabel Owusu's engineering career: Bentry Company Limited, ELECNOR S.A. on the 13 MWp and 15 MWp VRA solar plants, and NEDCo Techiman.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 04 · Projects & experience"
        title="Case files from Ghana's power and solar sector"
        lede="Three roles, from distribution maintenance to utility-scale solar and project engineering. Explore the map, then switch a case file on or read the full case study."
      />
      <Section labelledBy="map-title">
        <SectionHeading
          id="map-title"
          eyebrow="Power system map"
          title="Where her work sits on the network"
          lede="Select each point to see how her roles and training map onto the journey from generation to consumers."
        />
        <div className="mt-10">
          <PowerSystemMap />
        </div>
      </Section>
      <CaseTimeline />
    </>
  );
}
