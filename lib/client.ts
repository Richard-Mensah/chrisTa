/** Browser-side request helpers (no React). */

export async function jsonFetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { credentials: "same-origin" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export function postSignal(signal: string): void {
  fetch("/api/progress", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ signal }),
    keepalive: true,
    credentials: "same-origin",
  }).catch(() => {
    /* progress still lives in browser storage */
  });
}

export function deleteProgress(): void {
  fetch("/api/progress", { method: "DELETE", credentials: "same-origin" }).catch(() => {});
}

/**
 * Sends the email copy of an enquiry straight from the browser – Web3Forms'
 * free plan accepts browser submissions only. The access key is public by design.
 */
export async function relayEmail(fields: Record<string, string>): Promise<boolean> {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!key) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `Website enquiry (${fields.category}) from ${fields.name}`,
        from_name: "christabel-owusu website",
        replyto: fields.email,
        botcheck: false,
        ...fields,
      }),
    });
    const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
    return res.ok && json?.success === true;
  } catch {
    return false;
  }
}

export function readStoredSignals(key: string, isValid: (v: unknown) => v is string): string[] {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(key) ?? "[]");
    return Array.isArray(raw) ? raw.filter(isValid) : [];
  } catch {
    return [];
  }
}

export function storeSignals(key: string, signals: string[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(signals));
  } catch {
    /* storage unavailable */
  }
}
