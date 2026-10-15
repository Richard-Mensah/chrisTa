import type { LeadershipRole } from "@/types";
import LeadershipItem from "./LeadershipItem";

type Props = {
  id: string;
  title: string;
  items: LeadershipRole[];
};

export default function LeadershipGroup({ id, title, items }: Props) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={`lg-${id}`}>
      <h2 id={`lg-${id}`} className="text-3xl font-semibold">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((l) => (
          <LeadershipItem key={l.id} item={l} />
        ))}
      </div>
    </section>
  );
}
