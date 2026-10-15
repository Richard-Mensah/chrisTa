import { Languages, Users } from "lucide-react";
import { AFFILIATIONS, LANGUAGES } from "@/constants/about";

export default function AboutFacts() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm md:col-span-2">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
          <Users className="size-5 text-accent" aria-hidden="true" /> Affiliations &amp; roles
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {AFFILIATIONS.map((a) => (
            <li key={a.name} className="border-l-2 border-brand-teal pl-4">
              <b className="block font-semibold">{a.name}</b>
              <span className="text-sm text-muted">{a.role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
          <Languages className="size-5 text-accent" aria-hidden="true" /> Languages
        </h3>
        <ul className="grid gap-3">
          {LANGUAGES.map((l) => (
            <li key={l.name} className="flex items-center justify-between gap-3 border-b border-line pb-3">
              <span className="font-medium">{l.name}</span>
              <span className="text-sm text-muted">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
