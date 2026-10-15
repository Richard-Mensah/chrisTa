import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui/Blocks";
import { EmailReveal } from "@/components/ui/EmailReveal";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

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
      <section className="sec">
        <div className="wrap split">
          <div>
            <Suspense fallback={<p className="lede">Loading the form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="contact-side" aria-label="Other ways to connect">
            {site.email.show && (
              <div className="side-card">
                <h2>Email</h2>
                <p style={{ color: "var(--ink)" }}>
                  <EmailReveal label={false} />
                </p>
              </div>
            )}
            {site.linkedin && (
              <div className="side-card">
                <h2>LinkedIn</h2>
                <p>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer me">
                    View profile ↗
                  </a>
                </p>
              </div>
            )}
            <div className="side-card">
              <h2>Mentorship</h2>
              <p>
                Mentorship runs through {site.ega.name}. Choose &ldquo;Mentorship&rdquo; in the form, or visit{" "}
                <a href={site.ega.url} target="_blank" rel="noopener noreferrer">
                  EGA&apos;s website
                </a>{" "}
                for current programmes.
              </p>
            </div>
            <div className="side-card" id="privacy">
              <h2>Privacy notice</h2>
              <p>
                Messages sent through this form are stored securely and emailed to Christabel. They are used only to
                reply to you, are never shared or sold, and you can ask for yours to be deleted by email. Your IP
                address is not stored; a one-way hash of it is kept to prevent spam.
              </p>
              <p style={{ marginTop: 10 }}>
                The grid game stores your progress anonymously: a random ID in a cookie and in your browser, with no
                personal information. Use &ldquo;Reset my progress&rdquo; in the grid map to delete it.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
