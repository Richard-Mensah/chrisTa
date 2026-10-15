import SectionHeading from "@/components/ui/SectionHeading";
import { CREDENTIAL_KIND_LABELS } from "@/constants/credentials";
import type { Credential, CredentialKind } from "@/types";
import CredentialCard from "./CredentialCard";

type Props = {
  kind: CredentialKind;
  items: Credential[];
};

export default function CredentialSection({ kind, items }: Props) {
  if (!items.length) return null;
  const labels = CREDENTIAL_KIND_LABELS[kind];
  return (
    <section aria-labelledby={`k-${kind}`}>
      <SectionHeading id={`k-${kind}`} eyebrow={labels.blurb} title={labels.title} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((c) => (
          <CredentialCard key={c.id} credential={c} />
        ))}
      </div>
    </section>
  );
}
