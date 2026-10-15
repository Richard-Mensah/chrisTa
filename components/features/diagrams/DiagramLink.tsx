import { cn } from "@/lib/utils";

type Props = {
  d: string;
  /** Animated "current flow" dashes; otherwise a dashed signal/data line. */
  kind?: "power" | "data";
  label?: { x: number; y: number; text: string };
};

export default function DiagramLink({ d, kind = "power", label }: Props) {
  return (
    <g>
      {kind === "power" ? (
        <>
          <path d={d} fill="none" strokeWidth={3} className="stroke-line" />
          <path d={d} fill="none" strokeWidth={3} strokeDasharray="6 10" className="stroke-brand-teal motion-safe:animate-flow" />
        </>
      ) : (
        <path d={d} fill="none" strokeWidth={1.5} strokeDasharray="3 5" className={cn("stroke-brand-blue")} />
      )}
      {label && (
        <text x={label.x} y={label.y} textAnchor="middle" className="fill-accent font-mono text-[10px] uppercase tracking-wider">
          {label.text}
        </text>
      )}
    </g>
  );
}
