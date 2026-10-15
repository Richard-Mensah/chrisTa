import PendingBadge from "@/components/ui/PendingBadge";
import { cn } from "@/lib/utils";
import type { LeadershipRole } from "@/types";

type Props = {
  item: LeadershipRole;
};

export default function LeadershipItem({ item }: Props) {
  return (
    <article
      className={cn(
        "grid gap-2 rounded-2xl border bg-surface p-5 shadow-sm sm:grid-cols-[10rem_1fr] sm:gap-6",
        item.featured ? "border-brand-teal/50 shadow-brand-teal/10" : "border-line",
      )}
    >
      <span className="pt-1 font-mono text-xs uppercase tracking-wider text-accent">{item.period}</span>
      <div className="grid gap-1">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-muted">{item.organisation}</p>
        {item.details.length > 0 ? (
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {item.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        ) : (
          <span>
            <PendingBadge>Add responsibilities &amp; initiatives</PendingBadge>
          </span>
        )}
        {item.status === "needs-confirmation" && (
          <span>
            <PendingBadge>Confirm year</PendingBadge>
          </span>
        )}
      </div>
    </article>
  );
}
