import Card from "@/components/ui/Card";
import { SITE } from "@/constants/site";
import EmailReveal from "./EmailReveal";
import PrivacyNotice from "./PrivacyNotice";

const TITLE = "mb-2 font-display text-lg font-semibold";

export default function ContactSidebar() {
  return (
    <aside aria-label="Other ways to connect" className="grid content-start gap-4">
      {SITE.email.show && (
        <Card>
          <h2 className={TITLE}>Email</h2>
          <EmailReveal />
        </Card>
      )}
      {SITE.linkedin && (
        <Card>
          <h2 className={TITLE}>LinkedIn</h2>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer me" className="text-accent hover:underline">
            View profile ↗
          </a>
        </Card>
      )}
      <Card>
        <h2 className={TITLE}>Mentorship</h2>
        <p className="text-sm leading-relaxed text-muted">
          Mentorship runs through {SITE.ega.name}. Choose &ldquo;Mentorship&rdquo; in the form, or visit{" "}
          <a href={SITE.ega.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            EGA&apos;s website
          </a>{" "}
          for current programmes.
        </p>
      </Card>
      <PrivacyNotice />
    </aside>
  );
}
