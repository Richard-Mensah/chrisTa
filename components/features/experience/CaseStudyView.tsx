import CaseDiagram from "@/components/features/diagrams/CaseDiagram";
import SignalOnMount from "@/components/features/grid/SignalOnMount";
import GlossaryChips from "@/components/features/insights/GlossaryChips";
import ButtonLink from "@/components/ui/ButtonLink";
import ContextNote from "@/components/ui/ContextNote";
import PendingBadge from "@/components/ui/PendingBadge";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { CaseStudy, Role } from "@/types";
import CaseStudyFacts from "./CaseStudyFacts";
import CaseStudyNav from "./CaseStudyNav";
import RelatedLinks from "./RelatedLinks";
import ResponsibilityList from "./ResponsibilityList";

type Props = {
  role: Role;
  study: CaseStudy;
};

export default function CaseStudyView({ role, study }: Props) {
  return (
    <>
      <SignalOnMount signal={`deep:${role.id}`} />
      <Section innerClassName="grid gap-10 lg:grid-cols-12">
        <div className="grid content-start gap-6 lg:col-span-8">
          <p className="font-display text-2xl leading-snug">{role.context}</p>
          <ContextNote>
            {study.generalContext.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </ContextNote>
        </div>
        <div className="grid content-start gap-4 lg:col-span-4">
          <CaseStudyFacts role={role} study={study} />
          {role.photo && <Photo id={role.photo} sizes="(max-width: 1024px) 100vw, 380px" className="aspect-[4/5]" />}
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" labelledBy="resp-title">
        <SectionHeading id="resp-title" eyebrow="What the role covered" title="Responsibilities" />
        <div className="mt-8">
          <ResponsibilityList role={role} study={study} />
        </div>
        {role.tools.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-widest text-muted">Tools &amp; systems</span>
            {role.tools.map((t) => (
              <span key={t} className="rounded-lg border border-line bg-surface px-2.5 py-1 text-sm">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6">
          {role.outcomes.length > 0 ? (
            <ul className="list-disc pl-5">
              {role.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          ) : (
            <PendingBadge>Verified outcomes: awaiting details from Christabel</PendingBadge>
          )}
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" labelledBy="diagram-title">
        <SectionHeading id="diagram-title" eyebrow="How the system works" title="Where this work sits" />
        <div className="mt-8">
          <CaseDiagram diagram={study.diagram} role={role.id} />
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" innerClassName="grid gap-10">
        <RelatedLinks study={study} />
        <GlossaryChips slugs={study.glossaryTerms} />
        <CaseStudyNav id={role.id} />
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/experience" variant="outline">
            All case files
          </ButtonLink>
          <ButtonLink href="/contact?topic=engineering">Discuss similar work</ButtonLink>
        </div>
      </Section>
    </>
  );
}
