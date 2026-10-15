import { CheckCircle2 } from "lucide-react";
import type { CaseStudy, Role } from "@/types";

type Props = {
  role: Role;
  study: CaseStudy;
};

/** CV responsibilities, each with a short general explanation of what the task involves. */
export default function ResponsibilityList({ role, study }: Props) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {role.responsibilities.map((r) => {
        const note = study.notes.find((n) => n.text === r);
        return (
          <li key={r} className="flex gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              <b className="block font-semibold">{r}</b>
              {note && <span className="mt-1 block text-sm text-muted">{note.general}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
