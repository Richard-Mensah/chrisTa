import { SignalOnView } from "@/components/grid/Signals";
import { PageHero, Photo, Pending } from "@/components/ui/Blocks";
import { CredIcon } from "@/components/ui/Icons";
import { kindLabels, publishedCredentials, type CredentialKind } from "@/content/credentials";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Credentials & professional development",
  description:
    "GhIE professional registration, BSc from UENR, and technical training including IEC 61850 and cyber security, transformer factory acceptance testing and Schneider Electric switchgear O&M.",
  path: "/credentials",
});

const order: CredentialKind[] = ["registration", "education", "training", "certificate"];

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 05 · Credentials"
        title="Professional development and credentials"
        lede="Registration, education, training and certificates are listed separately. A training course is not presented as a licence, and dates appear only once verified."
      />
      <section className="sec">
        <div className="wrap" style={{ display: "grid", gap: 56 }}>
          {order.map((kind) => {
            const items = publishedCredentials.filter((c) => c.kind === kind);
            if (!items.length) return null;
            const Icon = CredIcon[kind];
            return (
              <section key={kind} aria-labelledby={`k-${kind}`}>
                <p className="eyebrow mono">{kindLabels[kind].blurb}</p>
                <h2 className="h2" id={`k-${kind}`}>
                  {kindLabels[kind].title}
                </h2>
                <div className="creds two-col">
                  {items.map((c) => (
                    <div className="cred-card" key={c.id}>
                      <span className="k">
                        <Icon />
                      </span>
                      <b>{c.name}</b>
                      <span className="sub">
                        {[c.issuer, c.location, c.date].filter(Boolean).join(" · ") || " "}
                      </span>
                      <span>
                        {c.note && <span className="note">{c.note} </span>}
                        {c.status === "needs-confirmation" && <Pending>Confirm name, issuer &amp; date</Pending>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          <section aria-labelledby="field-title">
            <p className="eyebrow mono">In the field</p>
            <h2 className="h2" id="field-title">
              Training in practice
            </h2>
            <div className="creds" style={{ marginTop: 28 }}>
              <Photo id="factoryFloor" sizes="(max-width: 900px) 100vw, 380px" style={{ aspectRatio: "3/4" }} />
              <Photo id="relayPanel" sizes="(max-width: 900px) 100vw, 380px" style={{ aspectRatio: "3/4" }} />
              <Photo id="factoryShowroom" sizes="(max-width: 900px) 100vw, 380px" style={{ aspectRatio: "3/4" }} />
            </div>
          </section>
          <SignalOnView signal="credentials-complete" />
        </div>
      </section>
    </>
  );
}
