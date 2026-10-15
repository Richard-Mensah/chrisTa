import { Suspense } from "react";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactSidebar from "@/components/features/contact/ContactSidebar";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Contact Ing. Christabel Fremah Owusu about engineering opportunities, technical collaboration, speaking or mentorship.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 09 · Contact"
        title="Start a conversation"
        lede="For engineering opportunities, technical collaboration, speaking invitations and mentorship enquiries."
      />
      <Section innerClassName="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Suspense fallback={<p className="text-muted">Loading the form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
        <div className="lg:col-span-5">
          <ContactSidebar />
        </div>
      </Section>
    </>
  );
}
