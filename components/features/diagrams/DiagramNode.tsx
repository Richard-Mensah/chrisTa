import { cn } from "@/lib/utils";

type Props = {
  x: number;
  y: number;
  label: string;
  sublabel?: string;
  width?: number;
  height?: number;
  highlight?: boolean;
};

/** A labelled equipment block inside an SVG diagram. */
export default function DiagramNode({ x, y, label, sublabel, width = 120, height = 56, highlight = false }: Props) {
  const cx = x + width / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={12}
        strokeWidth={1.5}
        className={cn(highlight ? "fill-brand-teal/10 stroke-brand-teal" : "fill-surface stroke-line")}
      />
      <text x={cx} y={sublabel ? y + 24 : y + height / 2 + 5} textAnchor="middle" className="fill-ink text-[13px] font-semibold">
        {label}
      </text>
      {sublabel && (
        <text x={cx} y={y + 42} textAnchor="middle" className="fill-muted font-mono text-[10px] uppercase tracking-wider">
          {sublabel}
        </text>
      )}
    </g>
  );
}
