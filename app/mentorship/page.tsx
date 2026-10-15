import { ArrowRight, Compass } from "lucide-react";
import EgaNotice from "@/components/features/mentorship/EgaNotice";
import GridReadinessQuiz from "@/components/features/mentorship/GridReadinessQuiz";
import MentorProfile from "@/components/features/mentorship/MentorProfile";
import MentorQuote from "@/components/features/mentorship/MentorQuote";
import MentorshipSteps from "@/components/features/mentorship/MentorshipSteps";
import SupportAreas from "@/components/features/mentorship/SupportAreas";
import ButtonLink from "@/components/ui/ButtonLink";
import FaqList from "@/components/ui/FaqList";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { MENTEE_FAQ } from "@/constants/faq";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Mentorship: supporting the next generation of engineers",
  description:
    "Christabel Owusu mentors students and early-career engineers with EGA Mentorship International, focusing on electrical engineering, renewable energy careers and Women in Engineering.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <PageHero eyebrow="Substation 06 · Mentorship" title="Mentorship: supporting the next generation of engineers">
        <MentorQuote />
      </PageHero>

      <Section innerClassName="grid gap-12 lg:grid-cols-2">
        <MentorProfile />
        <div>
          <SupportAreas />
          <EgaNotice />
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" labelledBy="how-title">
        <SectionHeading id="how-title" eyebrow="How it works" title="Three steps to get started" />
        <div className="mt-10">
          <MentorshipSteps />
        </div>
      </Section>

      <Section tone="dark" labelledBy="quiz-title" innerClassName="grid items-center gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            id="quiz-title"
            onDark
            eyebrow="For students · Grid readiness"
            title="How much do you know about the grid?"
            lede="Six quick questions on the power-sector basics that come up in Christabel's work. Score 4 or more to earn an achievement."
          />
        </div>
        <div className="lg:col-span-3">
          <GridReadinessQuiz />
        </div>
      </Section>

      <Section labelledBy="pathways-cta">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-surface p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
              <Compass className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 id="pathways-cta" className="text-2xl font-semibold">
                Career pathways into power &amp; energy
              </h2>
              <p className="mt-1 max-w-xl text-muted">
                Five routes into the sector, what the work involves, and the skills to build first.
              </p>
            </div>
          </div>
          <ButtonLink href="/mentorship/pathways">
            Explore pathways <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" labelledBy="faq-title">
        <SectionHeading id="faq-title" eyebrow="Questions" title="Mentorship FAQ" />
        <div className="mt-8 max-w-3xl">
          <FaqList items={MENTEE_FAQ} />
        </div>
      </Section>
      <JsonLd data={faqJsonLd(MENTEE_FAQ)} />
    </>
  );
}
