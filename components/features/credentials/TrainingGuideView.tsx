import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import CaseDiagram from "@/components/features/diagrams/CaseDiagram";
import SignalOnMount from "@/components/features/grid/SignalOnMount";
import ButtonLink from "@/components/ui/ButtonLink";
import ContextNote from "@/components/ui/ContextNote";
import PendingBadge from "@/components/ui/PendingBadge";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import { TRAINING_GUIDES } from "@/constants/trainingGuides";
import { CREDENTIALS } from "@/constants/credentials";
import { rolesByIds } from "@/lib/related";
import { cn } from "@/lib/utils";
import type { Credential, TrainingGuide } from "@/types";

type Props = {
  credential: Credential;
  guide: TrainingGuide;
};

export default function TrainingGuideView({ credential, guide }: Props) {
  const roles = rolesByIds(guide.relatedRoles);
  return (
    <>
      <SignalOnMount signal={`guide:${guide.id}`} />
      <Section innerClassName="grid gap-10 lg:grid-cols-12">
        <div className="grid content-start gap-6 lg:col-span-8">
          <p className="font-display text-2xl leading-snug">{guide.summary}</p>
          {credential.status === "needs-confirmation" && (
            <span>
              <PendingBadge>Confirm official name, issuer &amp; date</PendingBadge>
            </span>
          )}
          <ContextNote title="What this kind of training typically covers">
            <ul className="grid gap-2">
              {guide.whatItCovers.map((w) => (
                <li key={w} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </ContextNote>
          <div className="rounded-2xl border border-l-4 border-line border-l-brand-teal bg-surface p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">Why it matters</h2>
            <p className="leading-relaxed text-muted">{guide.whyItMatters}</p>
            {roles.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <Link key={r.id} href={`/experience/${r.id}`} className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-sm hover:border-accent hover:text-accent">
                    {r.shortName} case study <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid content-start gap-4 lg:col-span-4">
          {guide.photo && <Photo id={guide.photo} sizes="(max-width: 1024px) 100vw, 380px" className="aspect-[4/5]" />}
        </div>
      </Section>

      {guide.diagram && (
        <Section className="pt-0 md:pt-0">
          <CaseDiagram diagram={guide.diagram} />
        </Section>
      )}

      <Section className="pt-0 md:pt-0">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">More training guides</h2>
        <div className="flex flex-wrap gap-2">
          {TRAINING_GUIDES.map((g) => {
            const c = CREDENTIALS.find((x) => x.id === g.id);
            const on = g.id === guide.id;
            return (
              <Link
                key={g.id}
                href={`/credentials/${g.id}`}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition-colors",
                  on ? "border-brand-teal bg-brand-teal/10 font-semibold" : "border-line bg-surface hover:border-accent",
                )}
              >
                {c?.name ?? g.id}
              </Link>
            );
          })}
        </div>
        <ButtonLink href="/credentials" variant="outline" className="mt-8">
          All credentials
        </ButtonLink>
      </Section>
    </>
  );
}
