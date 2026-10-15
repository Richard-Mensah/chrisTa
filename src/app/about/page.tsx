import Link from "next/link";
import { PageHero, Photo, Pending } from "@/components/ui/Blocks";
import { Arrow } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About",
  description:
    "Biography of Ing. Christabel Fremah Owusu: BSc Electrical and Electronics Engineering (UENR), with experience at NEDCo, ELECNOR on VRA solar plants, and Bentry Company Limited.",
  path: "/about",
});

const timeline: { when: string; title: string; text: string; career?: boolean }[] = [
  { when: "2016 – 2020", title: "BSc Electrical and Electronics Engineering", text: "University of Energy and Natural Resources (UENR), Sunyani." },
  { when: "2016 – 2020", title: "Class Representative", text: "BSc Electrical/Electronic Engineering class, UENR." },
  { when: "2018 – 2019", title: "Student leadership", text: "Local NUGS Public Relations Officer, USAG Senate Observer, and Media/Publicity Head of the A.G.C.M UENR chapter." },
  { when: "2019 – 2020", title: "Student President, GhIE Women in Engineering", text: "UENR chapter of the Ghana Institution of Engineering's Women in Engineering network." },
  { when: "08/2020 – 08/2021", title: "NEDCo, Techiman", text: "Electrical Maintenance Personnel (National Service): distribution transformers, BoQ, cable termination.", career: true },
  { when: "2020 – 2024", title: "Youth Minister, Energy and Petroleum", text: "United Nations Youth Association of Ghana." },
  { when: "01/2022 – 05/2023", title: "ELECNOR S.A., Upper West Region", text: "Junior Engineer / O&M Engineer on the 13 MWp and 15 MWp solar plants for VRA.", career: true },
  { when: "10/2023 – present", title: "Bentry Company Limited", text: "Electrical Engineer / Project Engineer: planning, supervision, testing and commissioning.", career: true },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 02 · About"
        title="An engineer shaped by the distribution network"
        lede="From transformer maintenance in Techiman to utility-scale solar in the Upper West and project engineering today."
      />
      <section className="sec">
        <div className="wrap split">
          <div>
            <div className="body-copy">
              <p>
                Christabel Fremah Owusu is an Electrical and Electronics Engineer based in Ghana. She earned her BSc in
                Electrical and Electronics Engineering from the University of Energy and Natural Resources (UENR),
                Sunyani, in 2020.
              </p>
              <p>
                Her career began on the distribution network. During national service with the Northern Electricity
                Distribution Company (NEDCo) in Techiman, she maintained and serviced distribution transformers, took
                part in transformer installation and commissioning, terminated cables and prepared bills of quantities.
              </p>
              <p>
                From January 2022 to May 2023 she worked with ELECNOR S.A. as a Junior Engineer and Operations &amp;
                Maintenance Engineer on the construction of 13 MWp and 15 MWp solar plants for the Volta River
                Authority in Ghana&apos;s Upper West Region. Her work covered plant maintenance, SCADA operations and
                daily reporting, and drone piloting for audio-visual reporting.
              </p>
              <p>
                Since October 2023 she has worked as an Electrical Engineer and Project Engineer with Bentry Company
                Limited. Her responsibilities span project planning and monitoring, site supervision, testing and
                commissioning, and the review of drawings and technical submittals.
              </p>
              <p>
                Her professional development includes training on IEC 61850 (Tiers I to III) and cyber security in
                Phoenix, USA; a factory acceptance test for power transformers in Jiangshan, China; and operation and
                maintenance training on Schneider Electric GHA and GMAe switchgear in Regensburg, Germany. She is a
                Professional Engineer in the Electrical Division of the Ghana Institution of Engineering (GhIE).{" "}
                <Pending>Confirm GhIE grade</Pending>
              </p>
              <p>
                Leadership has run alongside the engineering. She was Student President of GhIE Women in Engineering at
                UENR and served as Youth Minister for Energy and Petroleum with the United Nations Youth Association of
                Ghana from 2020 to 2024. Today she is a mentor with {site.ega.name}, supporting young people as they
                prepare for careers in engineering and energy.
              </p>
              <p>She works in English, has beginner French, and speaks Asante Twi.</p>
            </div>
            <div className="ctas">
              <Link className="btn btn-ink" href="/experience">
                See the case files <Arrow />
              </Link>
              <Link className="btn btn-line" href="/credentials">
                Credentials
              </Link>
            </div>
          </div>
          <div className="stack">
            <Photo id="relayPanel" sizes="(max-width: 880px) 100vw, 420px" />
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="tl-title">
        <div className="wrap">
          <p className="eyebrow mono">Feeder line</p>
          <h2 className="h2" id="tl-title">
            Timeline
          </h2>
          <ol className="feedline">
            {timeline.map((t) => (
              <li key={t.title} className={t.career ? "career" : undefined}>
                <span className="when mono">{t.when}</span>
                <b>{t.title}</b>
                <span>{t.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
