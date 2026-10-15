import CaseTimeline from "@/components/features/experience/CaseTimeline";
import PageHero from "@/components/ui/PageHero";
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
        lede="Three roles, from distribution maintenance to utility-scale solar and project engineering. Switch a case file on to see its full scope."
      />
      <CaseTimeline />
    </>
  );
}
