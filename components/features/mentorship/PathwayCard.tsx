import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CREDENTIALS } from "@/constants/credentials";
import { ROLES } from "@/constants/experience";
import type { CareerPathway } from "@/types";

type Props = {
  pathway: CareerPathway;
  index: number;
};

export default function PathwayCard({ pathway: p, index }: Props) {
  const role = p.exampleRole ? ROLES.find((r) => r.id === p.exampleRole) : undefined;
  const cred = p.exampleCredential ? CREDENTIALS.find((c) => c.id === p.exampleCredential) : undefined;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Pathway {String(index + 1).padStart(2, "0")}</p>
      <h2 className="text-2xl font-semibold">{p.title}</h2>
      <p className="leading-relaxed text-muted">{p.involves}</p>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Skills to build</h3>
        <ul className="flex flex-wrap gap-2">
          {p.skills.map((s) => (
            <li key={s} className="rounded-full border border-line bg-canvas px-3 py-1 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
      {(role || cred) && (
        <Link
          href={role ? `/experience/${role.id}` : `/credentials/${cred?.id}`}
          className="mt-auto inline-flex items-center gap-1 border-t border-line pt-4 text-sm font-semibold text-accent hover:underline"
        >
          {role ? `In Christabel's career: ${role.shortName} case study` : `Related training: ${cred?.name}`}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}
