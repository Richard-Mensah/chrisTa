import Card from "@/components/ui/Card";
import KindBadge from "@/components/ui/KindBadge";
import type { SkillGroup } from "@/types";
import SkillEvidence from "./SkillEvidence";

type Props = {
  group: SkillGroup;
};

export default function SkillGroupCard({ group }: Props) {
  return (
    <Card as="section" labelledBy={`g-${group.id}`} className="min-w-0">
      <h2 id={`g-${group.id}`} className="text-2xl font-semibold">
        {group.title}
      </h2>
      <p className="mt-2 text-muted">{group.summary}</p>
      <ul className="mt-5">
        {group.skills.map((s) => (
          <li key={s.name} className="grid grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-1 border-t border-line py-3">
            <span>{s.name}</span>
            <KindBadge kind={s.kind} />
            <SkillEvidence skill={s} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
