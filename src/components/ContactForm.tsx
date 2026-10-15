"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, contactSchema, fieldErrors, type FieldErrors } from "@/lib/contact-schema";
import { EmailReveal } from "@/components/ui/EmailReveal";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/** Sends the email copy straight from the browser (Web3Forms' free plan requires this). */
async function relayEmail(data: Record<string, string>): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Website enquiry (${data.category}) from ${data.name}`,
        from_name: "christabel-owusu website",
        replyto: data.email,
        botcheck: false,
        ...data,
      }),
    });
    const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
    return res.ok && json?.success === true;
  } catch {
    return false;
  }
}

export function ContactForm() {
  const params = useSearchParams();
  const topic = params.get("topic");
  const initialCategory = CATEGORIES.some((c) => c.value === topic) ? (topic as string) : "";

  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status.kind === "sent" || status.kind === "error") statusRef.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      category: String(fd.get("category") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setErrors(errs);
      setStatus({ kind: "idle" });
      const first = Object.keys(errs)[0];
      if (first) (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setErrors({});
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        stored?: boolean;
        relay?: boolean;
        error?: string;
        fields?: FieldErrors;
      };
      if (!res.ok || !json.ok) {
        if (json.fields) setErrors(json.fields);
        setStatus({ kind: "error", message: json.error ?? "Your message could not be sent. Please try again." });
        return;
      }

      const d = parsed.data;
      const emailed = json.relay
        ? await relayEmail({
            name: d.name,
            email: d.email,
            organisation: d.organisation,
            category: CATEGORIES.find((c) => c.value === d.category)?.label ?? d.category,
            message: d.message,
          })
        : false;

      // Honeypot hits return ok with stored=false, relay=false: show success anyway.
      if (json.stored || emailed || (!json.stored && !json.relay)) {
        setStatus({ kind: "sent" });
        formRef.current?.reset();
      } else {
        setStatus({
          kind: "error",
          message: "Your message could not be delivered. Please try again, or use the email address on this page.",
        });
      }
    } catch {
      setStatus({ kind: "error", message: "You appear to be offline. Check your connection and try again." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="alert alert-ok" role="status" tabIndex={-1} ref={statusRef}>
        <p>
          <b>Message sent.</b> Thank you for getting in touch. Christabel will reply by email.
        </p>
        <p style={{ marginTop: 10 }}>
          <button type="button" className="btn btn-line" onClick={() => setStatus({ kind: "idle" })}>
            Send another message
          </button>
        </p>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? (
      <span className="err" id={`${k}-err`}>
        {errors[k]}
      </span>
    ) : null;
  const a11y = (k: keyof FieldErrors, hint?: string) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": [errors[k] ? `${k}-err` : null, hint].filter(Boolean).join(" ") || undefined,
  });

  return (
    <form ref={formRef} className="form" noValidate onSubmit={onSubmit} aria-describedby="form-note">
      {status.kind === "error" && (
        <div className="alert alert-err" role="alert" tabIndex={-1} ref={statusRef}>
          <p>{status.message}</p>
          <p style={{ marginTop: 8 }}>
            <EmailReveal />
          </p>
        </div>
      )}

      <div className="row2">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required maxLength={100} {...a11y("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} {...a11y("email")} />
          {err("email")}
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="organisation">
            Organisation <span className="opt">(optional)</span>
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" maxLength={150} {...a11y("organisation")} />
          {err("organisation")}
        </div>
        <div className="field">
          <label htmlFor="category">What is it about?</label>
          <select id="category" name="category" required defaultValue={initialCategory} {...a11y("category")}>
            <option value="" disabled>
              Choose a topic
            </option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          {err("category")}
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required maxLength={5000} {...a11y("message", "message-hint")} />
        <span className="hint" id="message-hint">
          Include the role, project or programme you have in mind. At least 20 characters.
        </span>
        {err("message")}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="hint" id="form-note" style={{ color: "var(--muted)", fontSize: "0.86rem" }}>
        By sending, you agree that your details are used only to reply to this enquiry. See the privacy notice below.
      </p>

      <div>
        <button type="submit" className="btn btn-ink" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
