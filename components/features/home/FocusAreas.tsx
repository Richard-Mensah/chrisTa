import Link from "next/link";
import { ArrowRight, ClipboardCheck, Gauge, SolarPanel, UtilityPole, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FOCUS_AREAS } from "@/constants/content";
import type { FocusArea } from "@/types";

const ICONS: Record<FocusArea["icon"], LucideIcon> = {
  power: UtilityPole,
  solar: SolarPanel,
  project: ClipboardCheck,
  testing: Gauge,
};

export default function FocusAreas() {
  return (
    <Section labelledBy="focus-title" className="pt-0 md:pt-0">
      <SectionHeading id="focus-title" eyebrow="Technical focus" title="Where she works on the network" />
      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {FOCUS_AREAS.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div key={a.title} className="group flex flex-col gap-3 bg-surface p-6 transition-colors hover:bg-canvas">
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-blue/15 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.text}</p>
              <p className="mt-auto font-mono text-xs uppercase tracking-wider text-accent">Evidence · {a.evidence}</p>
            </div>
          );
        })}
      </div>
      <Link href="/expertise" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
        Full engineering expertise <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Section>
  );
}
