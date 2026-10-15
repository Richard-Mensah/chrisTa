import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/constants/content";
import { cn } from "@/lib/utils";

/** Education, roles and leadership on one "feeder line". Career roles get the energised node. */
export default function CareerTimeline() {
  return (
    <Section labelledBy="tl-title" className="pt-0 md:pt-0">
      <SectionHeading id="tl-title" eyebrow="Feeder line" title="Timeline" />
      <ol className="relative mt-10 grid gap-8 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:to-line">
        {TIMELINE.map((t) => (
          <li key={`${t.when}-${t.title}`} className="relative grid gap-1 pl-10">
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-0 top-1 size-[1.125rem] rounded-full border-2",
                t.career
                  ? "border-brand-teal bg-gradient-to-br from-brand-cyan to-brand-blue shadow-md shadow-brand-teal/40"
                  : "border-accent bg-canvas",
              )}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-accent">{t.when}</span>
            <b className="font-display text-xl font-semibold">{t.title}</b>
            <span className="text-muted">{t.text}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
