import KindBadge from "@/components/ui/KindBadge";
import { SKILL_KINDS } from "@/constants/expertise";

export default function SkillLegend() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
      <span>Key:</span>
      {SKILL_KINDS.map((k) => (
        <KindBadge key={k} kind={k} />
      ))}
    </div>
  );
}
