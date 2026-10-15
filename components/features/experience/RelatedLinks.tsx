import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import KindBadge from "@/components/ui/KindBadge";
import { credentialsByIds, hasGuide, skillsForRole } from "@/lib/related";
import type { CaseStudy } from "@/types";

type Props = {
  study: CaseStudy;
};

/** Skills evidenced by this role, and related training with links to the guides. */
export default function RelatedLinks({ study }: Props) {
  const skills = skillsForRole(study.id);
  const training = credentialsByIds(study.relatedCredentialIds);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-semibold">Skills evidenced by this role</h3>
        <ul className="grid gap-2">
          {skills.map((s) => (
            <li key={s.name} className="flex items-center justify-between gap-3 border-b border-line pb-2 text-sm">
              {s.name}
              <KindBadge kind={s.kind} />
            </li>
          ))}
        </ul>
        <Link href="/expertise" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
          All expertise <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-semibold">Related training</h3>
        <ul className="grid gap-2">
          {training.map((c) => (
            <li key={c.id} className="border-b border-line pb-2 text-sm">
              {hasGuide(c.id) ? (
                <Link href={`/credentials/${c.id}`} className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                  {c.name} <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              ) : (
                c.name
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">Training listed here is relevant to the role&apos;s work; it does not state where it was arranged.</p>
      </div>
    </div>
  );
}
