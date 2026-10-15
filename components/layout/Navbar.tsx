"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";
import Container from "@/components/ui/Container";
import GridHud from "@/components/features/grid/GridHud";
import { PAGES } from "@/constants/pages";
import { SITE } from "@/constants/site";
import { useGrid } from "@/hooks/useGrid";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { visited, current } = useGrid();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [current]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/80 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/70">
      <Container className="flex h-16 max-w-7xl items-center gap-4">
        <Link href="/" aria-label={`${SITE.name}, home`} className="flex shrink-0 items-center gap-3 rounded-xl">
          <BrandMark className="w-12" priority />
          <span className="whitespace-nowrap leading-tight">
            <b className="block font-display text-base font-semibold">{SITE.shortName}</b>
            <small className="hidden font-mono text-[0.65rem] uppercase tracking-widest text-muted sm:block">
              {SITE.postNominal}
            </small>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden xl:flex">
          {PAGES.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              aria-current={current === p.key ? "page" : undefined}
              className={cn(
                "relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-sm text-muted transition-colors hover:text-ink",
                current === p.key && "bg-canvas font-medium text-ink",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "size-1.5 rounded-full transition-colors duration-500",
                  visited.has(p.key) ? "bg-brand-teal shadow-sm shadow-brand-teal" : "bg-line",
                )}
              />
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <GridHud />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-line p-2 transition-colors hover:border-accent xl:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      <MobileMenu open={menuOpen} visited={visited} current={current} />
    </header>
  );
}
