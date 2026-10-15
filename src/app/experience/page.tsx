import Link from "next/link";
import { ExperienceCase } from "@/components/ExperienceCase";
import { PageHero, Photo, Pending } from "@/components/ui/Blocks";
import { publishedRoles } from "@/content/experience";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Projects & experience",
  description:
    "Case files from Christabel Owusu's engineering career: Bentry Company Limited, ELECNOR S.A. on the 13 MWp and 15 MWp VRA solar plants, and NEDCo Techiman.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 04 · Projects & experience"
        title="Case files from Ghana's power and solar sector"
        lede="Three roles, from distribution maintenance to utility-scale solar and project engineering. Switch a case file on to see its full scope."
      />
      <section className="sec">
        <div className="wrap">
          <div className="tl">
            {publishedRoles.map((r) => (
              <ExperienceCase
                key={r.id}
                role={r}
                pending={
                  <div>
                    <h3>Verified outcomes</h3>
                    <Pending>Awaiting details from Christabel</Pending>
                  </div>
                }
                photo={r.photo ? <Photo id={r.photo} sizes="(max-width: 760px) 100vw, 400px" /> : undefined}
              />
            ))}
          </div>
          <p className="notice">
            <b>About these case files.</b> Responsibilities are drawn from Christabel&apos;s CV. Project outcomes are
            published only once verified, and nothing here implies ownership of projects delivered by the named
            organisations. Want to discuss similar work? <Link href="/contact?topic=engineering">Get in touch</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
