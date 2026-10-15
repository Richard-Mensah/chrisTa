import DiagramFigure from "@/components/ui/DiagramFigure";
import { LIFECYCLE_STAGES } from "@/constants/home";
import type { RoleId } from "@/types";

type Props = {
  /** Stages with evidence from this role are highlighted. */
  role?: RoleId;
};

const STEP = 150;
const START = 60;

/** The electrical project lifecycle, highlighting the stages a role covers. */
export default function LifecycleDiagram({ role }: Props) {
  return (
    <DiagramFigure title="Electrical project lifecycle">
      <svg viewBox="0 0 720 150" role="img" aria-label={`Diagram of five project stages: ${LIFECYCLE_STAGES.map((s) => s.title).join(", ")}.`} className="h-auto w-full min-w-[36rem]">
        <path d={`M${START} 55 H${START + STEP * 4}`} strokeWidth={3} className="stroke-line" />
        <path
          d={`M${START} 55 H${START + STEP * 4}`}
          strokeWidth={3}
          strokeDasharray="6 10"
          className="stroke-brand-teal motion-safe:animate-flow"
        />
        {LIFECYCLE_STAGES.map((s, i) => {
          const x = START + STEP * i;
          const on = !role || s.evidence.some((e) => e.role === role);
          return (
            <g key={s.key}>
              <circle
                cx={x}
                cy={55}
                r={22}
                strokeWidth={2.5}
                className={on ? "fill-brand-teal stroke-brand-teal" : "fill-surface stroke-line"}
              />
              <text x={x} y={60} textAnchor="middle" className={on ? "fill-white text-[13px] font-bold" : "fill-muted text-[13px] font-bold"}>
                {i + 1}
              </text>
              <text x={x} y={105} textAnchor="middle" className="fill-ink text-[12px] font-semibold">
                {s.title.split(" & ")[0]}
              </text>
              <text x={x} y={122} textAnchor="middle" className="fill-muted text-[11px]">
                {s.title.includes(" & ") ? `& ${s.title.split(" & ")[1]}` : ""}
              </text>
            </g>
          );
        })}
      </svg>
    </DiagramFigure>
  );
}
