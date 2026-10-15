import DiagramFigure from "@/components/ui/DiagramFigure";
import DiagramLink from "./DiagramLink";
import DiagramNode from "./DiagramNode";

/** How a utility-scale solar plant delivers power, with SCADA monitoring. */
export default function SolarPlantDiagram() {
  return (
    <DiagramFigure title="Utility-scale solar PV: from panels to grid">
      <svg viewBox="0 0 720 230" role="img" aria-label="Diagram: PV arrays feed combiner boxes, then inverters convert DC to AC, a step-up transformer raises the voltage and power is exported to the grid. A SCADA system monitors the inverters, transformer and arrays." className="h-auto w-full min-w-[36rem]">
        <DiagramLink d="M130 58 H155" label={{ x: 142, y: 46, text: "DC" }} />
        <DiagramLink d="M265 58 H300" label={{ x: 282, y: 46, text: "DC" }} />
        <DiagramLink d="M410 58 H445" label={{ x: 427, y: 46, text: "AC" }} />
        <DiagramLink d="M555 58 H590" label={{ x: 572, y: 46, text: "HV" }} />
        <DiagramLink kind="data" d="M70 86 V180 H300" />
        <DiagramLink kind="data" d="M355 86 V152" />
        <DiagramLink kind="data" d="M500 86 V180 H410" />
        <DiagramNode x={10} y={30} label="PV arrays" sublabel="modules" highlight />
        <DiagramNode x={155} y={30} width={110} label="Combiner" sublabel="strings" />
        <DiagramNode x={300} y={30} width={110} label="Inverter" sublabel="DC → AC" highlight />
        <DiagramNode x={445} y={30} width={110} label="Transformer" sublabel="step-up" />
        <DiagramNode x={590} y={30} width={120} label="Grid export" sublabel="utility" />
        <DiagramNode x={300} y={152} width={110} label="SCADA" sublabel="monitor & report" highlight />
      </svg>
    </DiagramFigure>
  );
}
