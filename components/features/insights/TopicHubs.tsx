import Link from "next/link";
import { ArrowRight, BookText } from "lucide-react";
import { TOPIC_HUBS } from "@/constants/insights";

export default function TopicHubs() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TOPIC_HUBS.map((t) => (
        <div key={t.title} className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <h3 className="text-lg font-semibold">{t.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-muted">Articles coming soon</p>
        </div>
      ))}
      <Link
        href="/insights/glossary"
        className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-ondark shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <BookText className="size-7 text-brand-cyan" aria-hidden="true" />
        <span>
          <span className="mt-6 block font-display text-2xl font-semibold">Engineering glossary</span>
          <span className="mt-2 inline-flex items-center gap-1 text-sm text-ondark-muted">
            Plain-English definitions <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </span>
      </Link>
    </div>
  );
}
