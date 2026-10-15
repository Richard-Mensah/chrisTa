"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ORDER, PAGES, pageByKey } from "@/content/pages";
import { site } from "@/content/site";
import { useGrid } from "@/components/grid/GridProvider";
import { BrandMark } from "./Icons";

export function Header() {
  const { visited, current, openMap, hudHidden } = useGrid();
  const [menuOpen, setMenuOpen] = useState(false);
  const n = visited.size;
  const total = PAGES.length;
  const online = n === total;

  useEffect(() => setMenuOpen(false), [current]);

  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${site.name}, home`}>
          <BrandMark />
          <span>
            <b>{site.shortName}</b>
            <small>{site.postNominal}</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV_ORDER.map((k) => {
            const p = pageByKey(k);
            return (
              <Link
                key={k}
                href={p.href}
                className={visited.has(k) ? "on" : undefined}
                aria-current={current === k ? "page" : undefined}
              >
                <span className="dot" aria-hidden="true" />
                {p.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {!hudHidden && (
          <button
            type="button"
            className={`hud${online ? " online" : ""}`}
            aria-haspopup="dialog"
            aria-label={`Open grid map: ${n} of ${total} pages energised`}
            onClick={openMap}
          >
            <span className="segs" aria-hidden="true">
              {PAGES.map((p, i) => (
                <i key={p.key} className={i < n ? "on" : undefined} />
              ))}
            </span>
            <span className="read" aria-hidden="true">
              {online ? "GRID ONLINE" : `GRID ${n}/${total}`}
            </span>
          </button>
        )}
      </div>

      <nav id="mobile-nav" className="mnav" aria-label="Main (mobile)" hidden={!menuOpen}>
        <div className="wrap">
          {NAV_ORDER.map((k) => {
            const p = pageByKey(k);
            return (
              <Link
                key={k}
                href={p.href}
                className={visited.has(k) ? "on" : undefined}
                aria-current={current === k ? "page" : undefined}
              >
                <span className="mono">{p.num}</span>
                {p.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
