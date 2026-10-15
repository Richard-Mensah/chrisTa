import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import PendingBadge from "@/components/ui/PendingBadge";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import { BIOGRAPHY } from "@/constants/content";

/** Index of the paragraph that mentions GhIE standing (needs confirmation). */
const GHIE_PARAGRAPH = 4;

export default function Biography() {
  return (
    <Section innerClassName="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="grid gap-5 text-lg leading-relaxed">
          {BIOGRAPHY.map((para, i) => (
            <p key={para.slice(0, 24)} className={i === 0 ? "font-display text-2xl leading-snug" : undefined}>
              {para} {i === GHIE_PARAGRAPH && <PendingBadge>Confirm GhIE grade</PendingBadge>}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/experience" variant="ink">
            See the case files <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/credentials" variant="outline">
            Credentials
          </ButtonLink>
        </div>
      </div>
      <div className="grid content-start gap-4 lg:col-span-5">
        <Photo id="relayPanel" sizes="(max-width: 1024px) 100vw, 440px" className="aspect-[3/4]" />
        <Photo id="corridor" sizes="(max-width: 1024px) 100vw, 440px" className="aspect-[4/3]" />
      </div>
    </Section>
  );
}
