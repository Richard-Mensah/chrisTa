import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { TRAINED_ACROSS } from "@/constants/about";
import { cn } from "@/lib/utils";

type Props = {
  onDark?: boolean;
};

/** Ghana → USA → China → Germany: where her education, work and training took place (from the CV). */
export default function TrainingJourney({ onDark = false }: Props) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-blue md:block"
      />
      {TRAINED_ACROSS.map((t, i) => (
        <li key={t.place} className="relative">
          <span className="relative z-10 mb-4 grid size-12 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-teal/30">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <p className={cn("font-mono text-xs uppercase tracking-widest", onDark ? "text-brand-cyan" : "text-accent")}>
            Stop {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-2xl font-semibold">{t.place}</h3>
          <p className={cn("mt-2 text-sm leading-relaxed", onDark ? "text-ondark-muted" : "text-muted")}>{t.text}</p>
          <Link
            href={t.href}
            className={cn(
              "mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline",
              onDark ? "text-brand-cyan" : "text-accent",
            )}
          >
            Learn more <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ol>
  );
}
