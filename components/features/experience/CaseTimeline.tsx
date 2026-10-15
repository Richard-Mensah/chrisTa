import Link from "next/link";
import Section from "@/components/ui/Section";
import { PUBLISHED_ROLES } from "@/constants/experience";
import CaseFile from "./CaseFile";

export default function CaseTimeline() {
  return (
    <Section className="pt-0 md:pt-0">
      <div className="relative grid gap-6 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:to-line sm:before:left-[19px]">
        {PUBLISHED_ROLES.map((r) => (
          <CaseFile key={r.id} role={r} />
        ))}
      </div>
      <p className="mt-10 rounded-2xl border border-l-4 border-line border-l-brand-teal bg-surface p-5 text-sm text-muted">
        <b className="text-ink">About these case files.</b> Responsibilities are drawn from Christabel&apos;s CV.
        Project outcomes are published only once verified, and nothing here implies ownership of projects delivered by
        the named organisations. Want to discuss similar work?{" "}
        <Link href="/contact?topic=engineering" className="font-semibold text-accent hover:underline">
          Get in touch
        </Link>
        .
      </p>
    </Section>
  );
}
