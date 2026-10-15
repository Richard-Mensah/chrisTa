import Link from "next/link";
import Container from "@/components/ui/Container";
import { PAGES } from "@/constants/pages";
import { cn } from "@/lib/utils";
import type { PageKey } from "@/types";

type Props = {
  open: boolean;
  visited: Set<PageKey>;
  current: PageKey | null;
};

export default function MobileMenu({ open, visited, current }: Props) {
  return (
    <nav id="mobile-nav" aria-label="Main (mobile)" hidden={!open} className="border-t border-line bg-surface xl:hidden">
      <Container className="grid grid-cols-2 gap-1 py-3 sm:grid-cols-3">
        {PAGES.map((p) => (
          <Link
            key={p.key}
            href={p.href}
            aria-current={current === p.key ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-canvas",
              current === p.key && "bg-canvas font-medium",
            )}
          >
            <span className={cn("font-mono text-xs", visited.has(p.key) ? "text-accent" : "text-muted")}>{p.num}</span>
            {p.label}
          </Link>
        ))}
      </Container>
    </nav>
  );
}
