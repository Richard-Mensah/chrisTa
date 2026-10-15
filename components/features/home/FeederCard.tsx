import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Role } from "@/types";

type Props = {
  role: Role;
};

export default function FeederCard({ role }: Props) {
  return (
    <article className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue" />
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        {role.period} · {role.location.replace(", Ghana", "")}
      </p>
      <h3 className="text-xl font-semibold">{role.employer}</h3>
      <p className="font-medium">{role.title}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
        {role.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <Link
        href={`/experience#${role.id}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent hover:underline"
      >
        Open case file
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
