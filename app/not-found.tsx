import Link from "next/link";
import OpenMapButton from "@/components/features/grid/OpenMapButton";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { PAGES } from "@/constants/pages";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-ondark">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <Container className="relative py-24 md:py-32">
        <Eyebrow onDark>Fault detected · 404</Eyebrow>
        <h1 className="max-w-2xl text-5xl font-semibold md:text-6xl">This circuit doesn&apos;t exist</h1>
        <p className="mt-5 max-w-xl text-lg text-ondark-muted">
          The page you were looking for has moved or never existed. Pick a live substation to get back on the grid.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <OpenMapButton />
        </div>
        <nav aria-label="All pages" className="mt-10 flex flex-wrap gap-2">
          {PAGES.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="rounded-full border border-ondark-line px-3 py-1 text-sm transition-colors hover:border-brand-cyan"
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
