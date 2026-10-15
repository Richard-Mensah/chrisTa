import { Suspense } from "react";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactSidebar from "@/components/features/contact/ContactSidebar";
import EnquiryGuide from "@/components/features/contact/EnquiryGuide";
import FaqList from "@/components/ui/FaqList";
import JsonLd from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT_FAQ } from "@/constants/faq";
import { faqJsonLd, pageMeta } from "@/lib/seo";

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
      <Section className="pt-0 md:pt-0" innerClassName="grid gap-12 lg:grid-cols-2">
        <section aria-labelledby="guide-title">
          <SectionHeading
            id="guide-title"
            eyebrow="Before you write"
            title="What to include"
            lede="A few details help Christabel reply usefully the first time."
          />
          <div className="mt-8">
            <EnquiryGuide />
          </div>
        </section>
        <section aria-labelledby="cfaq-title">
          <SectionHeading id="cfaq-title" eyebrow="Questions" title="Contact FAQ" />
          <div className="mt-8">
            <FaqList items={CONTACT_FAQ} />
          </div>
        </section>
      </Section>
      <JsonLd data={faqJsonLd(CONTACT_FAQ)} />
    </>
  );
}
