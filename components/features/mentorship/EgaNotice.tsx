import { ExternalLink } from "lucide-react";
import TrackedLink from "@/components/features/grid/TrackedLink";
import ButtonLink from "@/components/ui/ButtonLink";
import { SITE } from "@/constants/site";

export default function EgaNotice() {
  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-l-4 border-line border-l-brand-teal bg-surface p-5 text-sm leading-relaxed text-muted">
        <b className="text-ink">About {SITE.ega.name}.</b> EGA connects young people with mentorship, leadership
        training, skills development and opportunities. This is Christabel&apos;s personal website, not EGA&apos;s
        official site. Mentorship availability, eligibility and booking follow EGA&apos;s programme structure, so please
        check EGA&apos;s website for current programmes.
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedLink href={SITE.ega.url} signal="ega-link">
          Visit {SITE.ega.name} <ExternalLink className="size-4" aria-hidden="true" />
        </TrackedLink>
        <ButtonLink href="/contact?topic=mentorship" variant="outline">
          Request mentorship
        </ButtonLink>
      </div>
    </div>
  );
}
