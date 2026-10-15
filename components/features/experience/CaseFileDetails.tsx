import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PendingBadge from "@/components/ui/PendingBadge";
import Photo from "@/components/ui/Photo";
import type { Role } from "@/types";

type Props = {
  role: Role;
  id: string;
  hidden: boolean;
};

const HEADING = "mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent";

export default function CaseFileDetails({ role, id, hidden }: Props) {
  return (
    <div id={id} hidden={hidden} className="grid border-t border-line md:grid-cols-5">
      <div className="grid content-start gap-6 p-6 md:col-span-3">
        <div>
          <h3 className={HEADING}>Responsibilities</h3>
          <ul className="list-disc space-y-1 pl-5">
            {role.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        {role.tools.length > 0 && (
          <div>
            <h3 className={HEADING}>Tools &amp; systems</h3>
            <div className="flex flex-wrap gap-2">
              {role.tools.map((t) => (
                <span key={t} className="rounded-lg border border-line bg-canvas px-2.5 py-1 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
        {role.outcomes.length > 0 ? (
          <div>
            <h3 className={HEADING}>Verified outcomes</h3>
            <ul className="list-disc space-y-1 pl-5">
              {role.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ) : (
          <PendingBadge>Outcomes: awaiting details from Christabel</PendingBadge>
        )}
        <Link
          href={`/experience/${role.id}`}
          className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
        >
          Read the full case study <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      {role.photo && (
        <Photo id={role.photo} sizes="(max-width: 768px) 100vw, 420px" className="min-h-72 rounded-none md:col-span-2" />
      )}
    </div>
  );
}
