import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { SITE } from "@/constants/site";

export default function ClosingCta() {
  return (
    <section aria-labelledby="closing-title" className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <Container className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-12 text-ondark shadow-2xl shadow-navy-900/20 sm:px-10 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-display text-lg italic text-gradient-brand">{SITE.tagline}</p>
            <h2 id="closing-title" className="mt-2 text-3xl font-semibold md:text-4xl">
              Working on a power or renewable energy project?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              Read her story
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
