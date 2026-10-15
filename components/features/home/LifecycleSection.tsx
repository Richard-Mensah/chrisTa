"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ROLES } from "@/constants/experience";
import { LIFECYCLE_STAGES } from "@/constants/home";
import { cn } from "@/lib/utils";

/** Interactive project lifecycle: pick a stage to see the CV responsibilities that belong to it. */
export default function LifecycleSection() {
  const [active, setActive] = useState(0);
  const stage = LIFECYCLE_STAGES[active];

  return (
    <Section labelledBy="lifecycle-title" className="pt-0 md:pt-0">
      <SectionHeading
        id="lifecycle-title"
        eyebrow="How she works"
        title="Across the project lifecycle"
        lede="Select a stage to see which of her documented responsibilities sit there."
      />
      <div role="tablist" aria-label="Project lifecycle stages" className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {LIFECYCLE_STAGES.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            type="button"
            id={`tab-${s.key}`}
            aria-selected={i === active}
            aria-controls="lifecycle-panel"
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all",
              i === active
                ? "border-transparent bg-gradient-to-r from-brand-teal to-brand-blue text-white shadow-lg shadow-brand-blue/20"
                : "border-line bg-surface hover:border-accent",
            )}
          >
            <span className={cn("font-mono text-xs", i === active ? "text-white/80" : "text-accent")}>0{i + 1}</span>
            {s.title}
          </button>
        ))}
      </div>
      <div
        id="lifecycle-panel"
        role="tabpanel"
        aria-labelledby={`tab-${stage.key}`}
        className="mt-4 grid gap-6 rounded-3xl border border-line bg-surface p-6 shadow-sm md:grid-cols-5 md:p-8"
      >
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">{stage.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{stage.general}</p>
        </div>
        <ul className="grid gap-3 md:col-span-3">
          {stage.evidence.map((e) => {
            const role = ROLES.find((r) => r.id === e.role);
            return (
              <li key={e.text} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-canvas px-4 py-3">
                <span className="font-medium">{e.text}</span>
                <Link href={`/experience/${e.role}`} className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                  {role?.shortName} <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
