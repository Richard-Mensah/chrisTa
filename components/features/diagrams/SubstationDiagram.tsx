import DiagramFigure from "@/components/ui/DiagramFigure";
import DiagramLink from "./DiagramLink";
import DiagramNode from "./DiagramNode";

const IEDS = [
  { x: 60, label: "Protection IED" },
  { x: 300, label: "Control IED" },
  { x: 540, label: "Bay controller" },
];
const FIELD = [
  { x: 60, label: "Merging unit", sub: "CT / VT data" },
  { x: 300, label: "Breaker I/O", sub: "switchgear" },
  { x: 540, label: "Merging unit", sub: "CT / VT data" },
];

/** IEC 61850 substation automation: station bus and process bus. */
export default function SubstationDiagram() {
  return (
    <DiagramFigure title="IEC 61850 substation automation">
      <svg viewBox="0 0 720 320" role="img" aria-label="Diagram: a SCADA gateway sits on the station bus, which links protection and control IEDs using MMS and GOOSE messages. The IEDs connect through the process bus to merging units and breaker interfaces using sampled values." className="h-auto w-full min-w-[36rem]">
        <DiagramLink d="M360 76 V104" kind="data" />
        <path d="M40 110 H680" strokeWidth={4} className="stroke-brand-teal" />
        <text x={680} y={100} textAnchor="end" className="fill-accent font-mono text-[10px] uppercase tracking-wider">
          Station bus · MMS / GOOSE
        </text>
        <path d="M40 228 H680" strokeWidth={4} className="stroke-brand-blue" />
        <text x={680} y={248} textAnchor="end" className="fill-accent font-mono text-[10px] uppercase tracking-wider">
          Process bus · sampled values
        </text>
        {IEDS.map((d) => (
          <g key={d.x}>
            <DiagramLink kind="data" d={`M${d.x + 60} 110 V136`} />
            <DiagramLink kind="data" d={`M${d.x + 60} 192 V228`} />
            <DiagramNode x={d.x} y={136} label={d.label} sublabel="IED" highlight />
          </g>
        ))}
        {FIELD.map((f, i) => (
          <g key={`${f.x}-${i}`}>
            <DiagramLink kind="data" d={`M${f.x + 60} 228 V256`} />
            <DiagramNode x={f.x} y={256} label={f.label} sublabel={f.sub} />
          </g>
        ))}
        <DiagramNode x={290} y={20} width={140} label="SCADA gateway" sublabel="HMI" />
      </svg>
    </DiagramFigure>
  );
}
