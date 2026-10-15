"use client";

import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { CATEGORIES } from "@/constants/contact";
import { useContactForm } from "@/hooks/useContactForm";
import ContactFields from "./ContactFields";
import ContactSuccess from "./ContactSuccess";
import EmailReveal from "./EmailReveal";

export default function ContactForm() {
  const topic = useSearchParams().get("topic");
  const initialCategory = CATEGORIES.some((c) => c.value === topic) ? (topic ?? "") : "";
  const { errors, status, onSubmit, reset } = useContactForm();

  if (status.kind === "sent") return <ContactSuccess onReset={reset} />;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-describedby="form-note"
      className="relative grid gap-5 rounded-3xl border border-line bg-surface p-6 shadow-sm md:p-8"
    >
      {status.kind === "error" && (
        <div role="alert" className="rounded-2xl border border-danger/60 bg-danger/10 p-4">
          <p>{status.message}</p>
          <p className="mt-2 text-sm">
            <EmailReveal />
          </p>
        </div>
      )}

      <ContactFields errors={errors} initialCategory={initialCategory} />

      <p id="form-note" className="text-sm text-muted">
        By sending, you agree that your details are used only to reply to this enquiry. See the privacy notice.
      </p>
      <div>
        <Button type="submit" disabled={status.kind === "sending"}>
          <Send className="size-4" aria-hidden="true" />
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
