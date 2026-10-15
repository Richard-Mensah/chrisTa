import PhotoGallery from "@/components/features/gallery/PhotoGallery";
import SignalOnView from "@/components/features/grid/SignalOnView";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CREDENTIAL_KIND_ORDER, PUBLISHED_CREDENTIALS } from "@/constants/credentials";
import CredentialSection from "./CredentialSection";
import TrainingJourney from "./TrainingJourney";

export default function CredentialsOverview() {
  return (
    <Section innerClassName="grid gap-20">
      <section aria-labelledby="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="Training journey"
          title="Trained across four countries"
          lede="Education and work in Ghana, with technical training in the USA, China and Germany."
        />
        <div className="mt-10">
          <TrainingJourney />
        </div>
      </section>

      {CREDENTIAL_KIND_ORDER.map((kind) => (
        <CredentialSection key={kind} kind={kind} items={PUBLISHED_CREDENTIALS.filter((c) => c.kind === kind)} />
      ))}

      <section aria-labelledby="field-title">
        <SectionHeading id="field-title" eyebrow="In the field" title="Training in practice" lede="Select a photo to view it larger." />
        <PhotoGallery ids={["relayPanel", "factoryFloor", "fatMeeting", "factoryShowroom", "corridor"]} className="mt-8" />
      </section>
      <SignalOnView signal="credentials-complete" />
    </Section>
  );
}
