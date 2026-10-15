import EgaNotice from "@/components/features/mentorship/EgaNotice";
import MentorProfile from "@/components/features/mentorship/MentorProfile";
import MentorQuote from "@/components/features/mentorship/MentorQuote";
import SupportAreas from "@/components/features/mentorship/SupportAreas";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

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
    </>
  );
}
