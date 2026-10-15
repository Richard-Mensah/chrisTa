import Link from "next/link";
import { ArrowRight, Award, BriefcaseBusiness, GraduationCap, ShieldCheck, type LucideIcon } from "lucide-react";
import { hasGuide } from "@/lib/related";
import PendingBadge from "@/components/ui/PendingBadge";
import { CREDENTIAL_KIND_LABELS } from "@/constants/credentials";
import type { Credential, CredentialKind } from "@/types";

type Props = {
  credential: Credential;
  /** Compact cards (home page) lead with the issuing body for registrations. */
  compact?: boolean;
};

const ICONS: Record<CredentialKind, LucideIcon> = {
  registration: ShieldCheck,
  education: GraduationCap,
  training: BriefcaseBusiness,
  certificate: Award,
};

export default function CredentialCard({ credential: c, compact = false }: Props) {
  const Icon = ICONS[c.kind];
  const title = compact && c.kind === "registration" && c.issuer ? c.issuer : c.name;
  const detail = compact && c.kind === "registration" ? c.name : [c.issuer, c.location, c.date].filter(Boolean).join(" · ");

  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-blue/15 text-accent">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="grid min-w-0 gap-1">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
          {CREDENTIAL_KIND_LABELS[c.kind].short}
        </span>
        <b className="font-semibold leading-snug">{title}</b>
        {detail && <span className="text-sm text-muted">{detail}</span>}
        {!compact && c.note && <span className="text-sm italic text-muted">{c.note}</span>}
        {!compact && c.status === "needs-confirmation" && (
          <span>
            <PendingBadge>Confirm name, issuer &amp; date</PendingBadge>
          </span>
        )}
        {hasGuide(c.id) && (
          <Link
            href={`/credentials/${c.id}`}
            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Read the training guide <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
