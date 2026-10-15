import { GETTING_STARTED } from "@/constants/pathways";

export default function GettingStarted() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {GETTING_STARTED.map((s, i) => (
        <li key={s.title} className="rounded-2xl border border-ondark-line bg-white/5 p-5">
          <span className="font-mono text-xs text-brand-cyan">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ondark-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
