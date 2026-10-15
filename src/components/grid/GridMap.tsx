"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { EDGES, NAV_ORDER, PAGES, pageByKey } from "@/content/pages";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { Medal } from "@/components/ui/Icons";
import { useGrid } from "./GridProvider";

export function GridMap({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const { visited, achievements, current, reset, setHudHidden, hudHidden } = useGrid();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const n = visited.size;
  const total = PAGES.length;
  const online = n === total;
  const next = new Set<string>();
  for (const [a, b] of EDGES) {
    if (visited.has(a) && !visited.has(b)) next.add(b);
    if (visited.has(b) && !visited.has(a)) next.add(a);
  }
  const pos = (k: string) => PAGES.find((p) => p.key === k)!;

  return (
    <dialog
      ref={ref}
      className="map"
      aria-labelledby="map-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="map-head">
        <h2 id="map-title">Grid map</h2>
        <button type="button" className="x" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="map-body">
        <div className="meter">
          <span className="mono">{online ? "9/9 energised · grid online" : `${n}/${total} energised`}</span>
          <span className="bar" aria-hidden="true">
            <i style={{ width: `${(n / total) * 100}%` }} />
          </span>
        </div>
        <p className="sr-only">
          Each page of this site is a substation. Visiting a page energises it. {n} of {total} pages energised.
        </p>

        <svg className="gridsvg" viewBox="0 0 680 360" role="group" aria-label="Network map of the site's pages">
          {EDGES.map(([a, b]) => {
            const A = pos(a);
            const B = pos(b);
            const d =
              A.y === B.y || A.x === B.x
                ? `M${A.x} ${A.y}L${B.x} ${B.y}`
                : `M${A.x} ${A.y}H${(A.x + B.x) / 2}V${B.y}H${B.x}`;
            const live = visited.has(a) && visited.has(b);
            return <path key={`${a}-${b}`} d={d} className={`edge${live ? " live" : ""}`} />;
          })}
          {PAGES.map((p) => {
            const cls = [
              "node",
              visited.has(p.key) ? "on" : "",
              next.has(p.key) ? "next" : "",
              current === p.key ? "here" : "",
            ].join(" ");
            return (
              <Link key={p.key} href={p.href} onClick={onClose} aria-label={`${p.label}${visited.has(p.key) ? ", energised" : ""}`}>
                <g className={cls}>
                  <circle className="ring" cx={p.x} cy={p.y} r={30} fill="none" stroke="none" />
                  <circle className="c" cx={p.x} cy={p.y} r={20} />
                  <text x={p.x} y={p.y + 48} textAnchor="middle">
                    {p.num} {p.label.toUpperCase()}
                  </text>
                </g>
              </Link>
            );
          })}
        </svg>

        <ul className="nodelist">
          {NAV_ORDER.map((k) => {
            const p = pageByKey(k);
            const on = visited.has(k);
            return (
              <li key={k} className={on ? "on" : ""}>
                <Link href={p.href} onClick={onClose} aria-current={current === k ? "page" : undefined}>
                  <span>
                    {p.num} {p.label}
                  </span>
                  <span className="st">{on ? "ENERGISED" : "OFF"}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {online && (
          <div className="online-msg">
            <span>
              <b>Grid online.</b> You have energised every substation. Thanks for exploring.
            </span>
            <Link className="btn btn-volt" href="/contact" onClick={onClose}>
              Get in touch
            </Link>
          </div>
        )}

        <div className="ach">
          <h3>
            Achievements · {achievements.length}/{ACHIEVEMENTS.length}
          </h3>
          <ul>
            {ACHIEVEMENTS.map((a) => (
              <li key={a.key} className={achievements.includes(a.key) ? "got" : ""}>
                <span className="medal">
                  <Medal />
                </span>
                <span>
                  <b>{a.name}</b>
                  <span>{a.description}</span>
                </span>
                <span className="sr-only">{achievements.includes(a.key) ? "Unlocked" : "Locked"}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="map-foot">
          <span>Progress is stored anonymously. See the privacy notice on the contact page.</span>
          <span style={{ display: "flex", gap: 14 }}>
            <button type="button" onClick={() => setHudHidden(!hudHidden)}>
              {hudHidden ? "Show grid meter" : "Hide grid meter"}
            </button>
            <button type="button" onClick={reset}>
              Reset my progress
            </button>
          </span>
        </div>
      </div>
    </dialog>
  );
}
