"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/** The address is assembled in the browser so it never appears in the HTML source. */
export function EmailReveal({ label = true }: { label?: boolean }) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => setEmail([site.email.user, site.email.domain].join("@")), []);

  if (!email) {
    return <span className="email">{label && <span className="mono">Email</span>}<code>loading…</code></span>;
  }

  return (
    <span className="email">
      {label && <span className="mono">Email</span>}
      <a href={`mailto:${email}`}>
        <code>{email}</code>
      </a>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setCopied("copied");
          } catch {
            setCopied("failed");
          }
          setTimeout(() => setCopied("idle"), 1800);
        }}
      >
        {copied === "copied" ? "Copied" : copied === "failed" ? "Copy failed" : "Copy"}
      </button>
    </span>
  );
}
