import Link from "next/link";
import Container from "@/components/ui/Container";
import { HIGHLIGHTS } from "@/constants/home";

/** Career highlights from the CV – text, not invented statistics. */
export default function HighlightsStrip() {
  return (
    <section aria-label="Career highlights" className="relative -mt-px border-b border-line bg-surface">
      <Container className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {HIGHLIGHTS.map((h) => (
          <Link key={h.label} href={h.href} className="group px-2 py-6 transition-colors hover:bg-canvas lg:px-6">
            <span className="block font-display text-xl font-semibold text-gradient-brand md:text-2xl">{h.label}</span>
            <span className="mt-1 block text-sm text-muted group-hover:text-ink">{h.detail}</span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
