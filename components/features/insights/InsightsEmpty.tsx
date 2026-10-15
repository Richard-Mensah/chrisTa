import { PenLine } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import { INSIGHT_TOPICS } from "@/constants/content";

export default function InsightsEmpty() {
  return (
    <div className="rounded-3xl border border-dashed border-line bg-surface p-8 md:p-12">
      <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
        <PenLine className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-6 text-3xl font-semibold">The first articles are being written</h2>
      <p className="mt-3 max-w-xl text-lg text-muted">Planned topics include:</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {INSIGHT_TOPICS.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <ButtonLink href="/contact?topic=collaboration" variant="outline" className="mt-8">
        Suggest a topic or collaborate
      </ButtonLink>
    </div>
  );
}
