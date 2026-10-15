import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { HERO_INTRO } from "@/constants/content";
import { SITE } from "@/constants/site";
import SingleLineDiagram from "./SingleLineDiagram";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-950 text-ondark">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:py-24">
        <div className="motion-safe:animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-ondark-line bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-ondark-muted">
            <span className="size-1.5 rounded-full bg-brand-cyan shadow-sm shadow-brand-cyan" aria-hidden="true" />
            {SITE.role} · {SITE.location}
          </p>
          <h1 id="hero-title" className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Engineering reliable power.{" "}
            <em className="font-medium italic text-gradient-brand">Developing future leaders.</em>
          </h1>
          <p className="mt-6 font-display text-xl font-medium">{SITE.formalName}</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ondark-muted">{HERO_INTRO}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/experience">
              Explore my engineering work <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/mentorship" variant="ghost">
              Connect for mentorship
            </ButtonLink>
          </div>
        </div>
        <SingleLineDiagram />
      </Container>
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent" />
    </section>
  );
}
