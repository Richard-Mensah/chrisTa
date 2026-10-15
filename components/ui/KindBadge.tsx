import { SKILL_KIND_LABELS } from "@/constants/expertise";
import { cn } from "@/lib/utils";
import type { SkillKind } from "@/types";

type Props = {
  kind: SkillKind;
};

const STYLES: Record<SkillKind, string> = {
  experience: "border-accent/40 bg-accent/10 text-accent",
  tool: "border-line text-muted",
  training: "border-brand-blue/40 bg-brand-blue/10 text-brand-blue dark:text-brand-cyan",
};

export default function KindBadge({ kind }: Props) {
  return (
    <span
      className={cn(
        "inline-flex whitespace-nowrap rounded-md border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider",
        STYLES[kind],
      )}
    >
      {SKILL_KIND_LABELS[kind]}
    </span>
  );
}
