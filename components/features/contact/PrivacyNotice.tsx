import { ShieldCheck } from "lucide-react";

export default function PrivacyNotice() {
  return (
    <section id="privacy" aria-labelledby="privacy-title" className="scroll-mt-24 rounded-2xl border border-line bg-canvas p-6">
      <h2 id="privacy-title" className="mb-2 flex items-center gap-2 font-display text-lg font-semibold">
        <ShieldCheck className="size-5 text-accent" aria-hidden="true" />
        Privacy notice
      </h2>
      <div className="grid gap-3 text-sm leading-relaxed text-muted">
        <p>
          Messages sent through this form are stored securely and emailed to Christabel. They are used only to reply to
          you, are never shared or sold, and you can ask for yours to be deleted by email. Your IP address is not stored;
          a one-way hash of it is kept to prevent spam.
        </p>
        <p>
          The grid game stores your progress anonymously: a random ID in a cookie and in your browser, with no personal
          information. Use &ldquo;Reset my progress&rdquo; in the grid map to delete it.
        </p>
      </div>
    </section>
  );
}
