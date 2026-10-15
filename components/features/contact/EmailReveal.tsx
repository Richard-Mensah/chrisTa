"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { SITE } from "@/constants/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { joinEmail } from "@/lib/utils";

/** The address is assembled in the browser so it never appears in the HTML source. */
export default function EmailReveal() {
  const [email, setEmail] = useState<string | null>(null);
  const { state, copy } = useCopyToClipboard();

  useEffect(() => setEmail(joinEmail(SITE.email.user, SITE.email.domain)), []);

  if (!email) return <span className="font-mono text-sm opacity-60">Loading email…</span>;

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <Mail className="size-4 shrink-0" aria-hidden="true" />
      <a href={`mailto:${email}`} className="font-mono text-sm underline-offset-4 hover:underline">
        {email}
      </a>
      <button
        type="button"
        onClick={() => copy(email)}
        className="inline-flex items-center gap-1 rounded-full border border-current/30 px-2.5 py-0.5 text-xs transition-colors hover:border-current"
      >
        {state === "copied" ? <Check className="size-3" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy"}
      </button>
    </span>
  );
}
