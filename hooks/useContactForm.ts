import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { CATEGORIES } from "@/constants/contact";
import { relayEmail } from "@/lib/client";
import { contactSchema, toFieldErrors } from "@/lib/validations";
import type { ContactResponse, FieldErrors, FormStatus } from "@/types";

/** Contact form flow: validate → POST /api/contact (store + spam checks) → relay email copy. */
export function useContactForm() {
  const startedAt = useRef(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
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
      setErrors(toFieldErrors(parsed.error));
      setStatus({ kind: "idle" });
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
      const json = (await res.json().catch(() => null)) as ContactResponse | null;
      if (!json || !json.ok) {
        if (json?.fields) setErrors(json.fields);
        setStatus({ kind: "error", message: json?.error ?? "Your message could not be sent. Please try again." });
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

      // stored=false & relay=false only happens for honeypot hits – show success to bots too.
      const delivered = json.stored || emailed || !json.relay;
      if (delivered) {
        setStatus({ kind: "sent" });
        form.reset();
      } else {
        setStatus({
          kind: "error",
          message: "Your message could not be delivered. Please try again, or use the email address on this page.",
        });
      }
    } catch {
      setStatus({ kind: "error", message: "You appear to be offline. Check your connection and try again." });
    }
  }, []);

  const reset = useCallback(() => setStatus({ kind: "idle" }), []);

  return { errors, status, onSubmit, reset };
}
