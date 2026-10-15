import DiagramFigure from "@/components/ui/DiagramFigure";
import DiagramLink from "./DiagramLink";
import DiagramNode from "./DiagramNode";

const TERMINATIONS = [148, 300, 452];

/** How power reaches consumers on a distribution network. */
export default function DistributionDiagram() {
  return (
    <DiagramFigure title="Distribution network: from substation to consumers">
      <svg viewBox="0 0 720 170" role="img" aria-label="Diagram: a substation feeds a medium-voltage feeder to a distribution transformer, which steps voltage down to the low-voltage network serving homes and businesses. Cable terminations join the sections." className="h-auto w-full min-w-[36rem]">
        <DiagramLink d="M130 58 H300" label={{ x: 215, y: 46, text: "MV feeder" }} />
        <DiagramLink d="M420 58 H450" />
        <DiagramLink d="M570 58 H600" label={{ x: 585, y: 46, text: "LV" }} />
        {TERMINATIONS.map((x) => (
          <circle key={x} cx={x} cy={58} r={5} strokeWidth={2} className="fill-surface stroke-brand-blue" />
        ))}
        <text x={300} y={130} textAnchor="middle" className="fill-muted font-mono text-[10px] uppercase tracking-wider">
          ● cable terminations
        </text>
        <DiagramNode x={10} y={30} label="Substation" sublabel="primary supply" />
        <DiagramNode x={300} y={30} label="Distribution" sublabel="transformer" highlight />
        <DiagramNode x={450} y={30} label="LV network" sublabel="low voltage" />
        <DiagramNode x={600} y={30} width={110} label="Consumers" sublabel="homes & business" />
      </svg>
    </DiagramFigure>
  );
}
