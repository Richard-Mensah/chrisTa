import CredentialsOverview from "@/components/features/credentials/CredentialsOverview";
import PageHero from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Credentials & professional development",
  description:
    "GhIE professional registration, BSc from UENR, and technical training including IEC 61850 and cyber security, transformer factory acceptance testing and Schneider Electric switchgear O&M.",
  path: "/credentials",
});

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 05 · Credentials"
        title="Professional development and credentials"
        lede="Registration, education, training and certificates are listed separately. A training course is not presented as a licence, and dates appear only once verified."
      />
      <CredentialsOverview />
    </>
  );
}
