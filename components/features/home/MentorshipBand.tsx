import ButtonLink from "@/components/ui/ButtonLink";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { SITE } from "@/constants/site";

const TOPICS = ["Electrical engineering careers", "Renewable energy pathways", "Women in Engineering", "Career readiness"];

export default function MentorshipBand() {
  return (
    <Section tone="dark" labelledBy="mentor-title" innerClassName="grid items-center gap-12 lg:grid-cols-2">
      <Photo id="trainingSession" sizes="(max-width: 1024px) 100vw, 560px" className="aspect-[4/3]" />
      <div>
        <SectionHeading
          id="mentor-title"
          onDark
          eyebrow={`Mentorship · ${SITE.ega.name}`}
          title="Guidance is part of the infrastructure"
          lede={`As a mentor with ${SITE.ega.name}, Christabel supports students and early-career engineers as they work out their next step into the power and energy sector.`}
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <Tag key={t} onDark>
              {t}
            </Tag>
          ))}
        </div>
        <ButtonLink href="/mentorship" className="mt-8">
          About my mentorship
        </ButtonLink>
      </div>
    </Section>
  );
}
