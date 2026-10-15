import Image from "next/image";
import { PHOTOS } from "@/constants/photos";

const FEEDERS = ["M20 70 H130 V130", "M380 70 H270 V130", "M20 330 H130 V270", "M380 330 H270 V270"];
const BREAKERS = [
  [60, 62],
  [324, 62],
  [60, 322],
  [324, 322],
];
const LABELS = [
  { x: 20, y: 56, anchor: "start", text: "POWER SYSTEMS" },
  { x: 380, y: 56, anchor: "end", text: "SOLAR PV" },
  { x: 20, y: 356, anchor: "start", text: "PROJECT DELIVERY" },
  { x: 380, y: 356, anchor: "end", text: "TESTING & COMMISSIONING" },
] as const;

/** Hero visual: four live feeders flowing into her portrait node. */
export default function SingleLineDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <svg viewBox="0 0 400 400" aria-hidden="true" className="absolute inset-0 size-full">
        {FEEDERS.map((d) => (
          <g key={d}>
            <path d={d} fill="none" strokeWidth={3} className="stroke-ondark-line" />
            <path
              d={d}
              fill="none"
              strokeWidth={3}
              strokeDasharray="6 10"
              className="stroke-brand-cyan motion-safe:animate-flow"
            />
          </g>
        ))}
        {BREAKERS.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={16} height={16} rx={3} strokeWidth={2} className="fill-navy-950 stroke-brand-blue" />
        ))}
        <circle cx={200} cy={200} r={104} fill="none" strokeWidth={1} strokeDasharray="2 6" className="stroke-ondark-line" />
        {LABELS.map((l) => (
          <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor} className="fill-ondark-muted font-mono text-[11px] tracking-widest">
            {l.text}
          </text>
        ))}
      </svg>
      <div className="absolute left-[27%] top-[27%] size-[46%] rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue p-1 shadow-2xl shadow-brand-teal/40">
        <div className="relative size-full overflow-hidden rounded-full ring-4 ring-navy-950">
          <Image
            src={PHOTOS.portrait.src}
            alt={PHOTOS.portrait.alt}
            fill
            priority
            sizes="(max-width: 1024px) 46vw, 240px"
            className="object-cover object-[50%_18%]"
          />
        </div>
      </div>
    </div>
  );
}
