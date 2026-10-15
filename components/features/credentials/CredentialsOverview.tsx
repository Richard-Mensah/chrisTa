import SignalOnView from "@/components/features/grid/SignalOnView";
import Photo from "@/components/ui/Photo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CREDENTIAL_KIND_ORDER, PUBLISHED_CREDENTIALS } from "@/constants/credentials";
import CredentialSection from "./CredentialSection";

export default function CredentialsOverview() {
  return (
    <Section innerClassName="grid gap-16">
      {CREDENTIAL_KIND_ORDER.map((kind) => (
        <CredentialSection key={kind} kind={kind} items={PUBLISHED_CREDENTIALS.filter((c) => c.kind === kind)} />
      ))}

      <section aria-labelledby="field-title">
        <SectionHeading id="field-title" eyebrow="In the field" title="Training in practice" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Photo id="factoryFloor" sizes="(max-width: 768px) 100vw, 380px" className="aspect-[3/4]" />
          <Photo id="relayPanel" sizes="(max-width: 768px) 100vw, 380px" className="aspect-[3/4]" />
          <Photo id="factoryShowroom" sizes="(max-width: 768px) 100vw, 380px" className="aspect-[3/4]" />
        </div>
      </section>
      <SignalOnView signal="credentials-complete" />
    </Section>
  );
}
