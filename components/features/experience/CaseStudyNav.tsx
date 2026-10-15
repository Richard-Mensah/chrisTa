import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { neighbourRoles } from "@/lib/related";
import { cn } from "@/lib/utils";
import type { RoleId } from "@/types";

type Props = {
  id: RoleId;
};

const CARD =
  "group flex flex-col gap-1 rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent";

export default function CaseStudyNav({ id }: Props) {
  const { prev, next } = neighbourRoles(id);
  return (
    <nav aria-label="Other case studies" className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link href={`/experience/${prev.id}`} className={CARD}>
          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted">
            <ArrowLeft className="size-3.5" aria-hidden="true" /> Newer role
          </span>
          <b className="font-display text-lg">{prev.employer}</b>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={`/experience/${next.id}`} className={cn(CARD, "sm:items-end sm:text-right")}>
          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted">
            Earlier role <ArrowRight className="size-3.5" aria-hidden="true" />
          </span>
          <b className="font-display text-lg">{next.employer}</b>
        </Link>
      )}
    </nav>
  );
}
