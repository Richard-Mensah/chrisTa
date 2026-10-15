import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CredentialCard from "@/components/features/credentials/CredentialCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLISHED_CREDENTIALS } from "@/constants/credentials";

export default function FeaturedCredentials() {
  const featured = PUBLISHED_CREDENTIALS.filter((c) => c.featured);
  return (
    <Section labelledBy="cred-title">
      <SectionHeading id="cred-title" eyebrow="Credentials & training" title="Registered, trained, tested" />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((c) => (
          <CredentialCard key={c.id} credential={c} compact />
        ))}
      </div>
      <Link href="/credentials" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
        All credentials <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Section>
  );
}
