import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLISHED_ROLES } from "@/constants/experience";
import FeederCard from "./FeederCard";

export default function ExperienceSnapshot() {
  return (
    <Section labelledBy="snapshot-title">
      <SectionHeading
        id="snapshot-title"
        eyebrow="Experience snapshot"
        title="Three feeders into one career"
        lede="Distribution maintenance, utility-scale solar operations and project engineering in Ghana's power sector."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PUBLISHED_ROLES.map((r) => (
          <FeederCard key={r.id} role={r} />
        ))}
      </div>
    </Section>
  );
}
