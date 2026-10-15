import Image from "next/image";
import Link from "next/link";
import { publishedRoles } from "@/content/experience";
import { kindLabels, publishedCredentials } from "@/content/credentials";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { Photo } from "@/components/ui/Blocks";
import { AreaIcon, Arrow, CredIcon } from "@/components/ui/Icons";

const areas = [
  {
    icon: AreaIcon.power,
    title: "Power systems",
    text: "Distribution transformer servicing, installation and commissioning; cable termination; electrical maintenance.",
    evidence: "NEDCo",
  },
  {
    icon: AreaIcon.solar,
    title: "Solar energy",
    text: "PV plant operations and maintenance, SCADA monitoring and daily reporting, PVsyst.",
    evidence: "ELECNOR",
  },
  {
    icon: AreaIcon.project,
    title: "Project engineering",
    text: "Planning and monitoring, site supervision, drawing and submittal review, bills of quantities.",
    evidence: "Bentry · NEDCo",
  },
  {
    icon: AreaIcon.testing,
    title: "Testing & commissioning",
    text: "Commissioning on site, plus factory acceptance testing and IEC 61850 training.",
    evidence: "Bentry · NEDCo",
  },
];

export default function Home() {
  const featured = publishedCredentials.filter((c) => c.featured);

  return (
    <>
      <section className="dark hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div>
            <p className="cred">ELECTRICAL &amp; ELECTRONICS ENGINEER · GHANA</p>
            <h1 id="hero-title">
              Engineering reliable power. <em>Developing future leaders.</em>
            </h1>
            <p className="name">{site.formalName}</p>
            <p className="lede">
              Electrical engineer working across project supervision, electrical maintenance, solar power plant
              operations, testing and commissioning, and technical reporting. Alongside that work, she mentors young
              people to build the skills, confidence and networks they need to contribute to the engineering sector.
            </p>
            <div className="ctas">
              <Link className="btn btn-volt" href="/experience">
                Explore my engineering work <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/mentorship">
                Connect for mentorship
              </Link>
            </div>
          </div>
          <div className="sld">
            <svg viewBox="0 0 400 400" aria-hidden="true">
              {[
                "M20 70 H130 V130",
                "M380 70 H270 V130",
                "M20 330 H130 V270",
                "M380 330 H270 V270",
              ].map((d) => (
                <g key={d}>
                  <path d={d} stroke="#24384F" strokeWidth="3" fill="none" />
                  <path d={d} stroke="#19C3B1" strokeWidth="3" fill="none" className="flow" />
                </g>
              ))}
              <g fill="#0B1626" stroke="#F5B544" strokeWidth="2">
                <rect x="60" y="62" width="16" height="16" rx="2" />
                <rect x="324" y="62" width="16" height="16" rx="2" />
                <rect x="60" y="322" width="16" height="16" rx="2" />
                <rect x="324" y="322" width="16" height="16" rx="2" />
              </g>
              <circle cx="200" cy="200" r="104" fill="none" stroke="#24384F" strokeWidth="1" strokeDasharray="2 6" />
              <text x="20" y="56">POWER SYSTEMS</text>
              <text x="380" y="56" textAnchor="end">
                SOLAR PV
              </text>
              <text x="20" y="356">PROJECT DELIVERY</text>
              <text x="380" y="356" textAnchor="end">
                TESTING &amp; COMMISSIONING
              </text>
            </svg>
            <div className="portrait">
              <Image
                src={photos.portrait.src}
                alt={photos.portrait.alt}
                fill
                sizes="(max-width: 880px) 46vw, 240px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="snapshot-title">
        <div className="wrap">
          <p className="eyebrow mono">Experience snapshot</p>
          <h2 className="h2" id="snapshot-title">
            Three feeders into one career
          </h2>
          <p className="lede">
            Distribution maintenance, utility-scale solar operations and project engineering in Ghana&apos;s power
            sector.
          </p>
          <div className="feeders">
            {publishedRoles.map((r) => (
              <article className="feeder" key={r.id}>
                <p className="meta mono">
                  {r.period} · {r.location.replace(", Ghana", "")}
                </p>
                <h3>{r.employer}</h3>
                <p className="role">{r.title}</p>
                <ul>
                  {r.responsibilities.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="more">
                  <Link className="linkbtn" href={`/experience#${r.id}`}>
                    Open case file <Arrow size={14} />
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="focus-title">
        <div className="wrap">
          <p className="eyebrow mono">Technical focus</p>
          <h2 className="h2" id="focus-title">
            Where she works on the network
          </h2>
          <div className="areas">
            {areas.map((a) => (
              <div className="area" key={a.title}>
                <a.icon />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <p className="src mono">Evidence · {a.evidence}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 18 }}>
            <Link className="linkbtn" href="/expertise">
              Full engineering expertise <Arrow size={14} />
            </Link>
          </p>
        </div>
      </section>

      <section className="dark band" aria-labelledby="mentor-title">
        <div className="wrap">
          <Photo id="trainingSession" sizes="(max-width: 880px) 100vw, 520px" />
          <div>
            <p className="eyebrow mono">Mentorship · {site.ega.name}</p>
            <h2 className="h2" id="mentor-title">
              Guidance is part of the infrastructure
            </h2>
            <p className="lede">
              As a mentor with {site.ega.name}, Christabel supports students and early-career engineers as they work
              out their next step into the power and energy sector.
            </p>
            <div className="taglist">
              <span>Electrical engineering careers</span>
              <span>Renewable energy pathways</span>
              <span>Women in Engineering</span>
              <span>Career readiness</span>
            </div>
            <div className="ctas">
              <Link className="btn btn-volt" href="/mentorship">
                About my mentorship
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="cred-title">
        <div className="wrap">
          <p className="eyebrow mono">Credentials &amp; training</p>
          <h2 className="h2" id="cred-title">
            Registered, trained, tested
          </h2>
          <div className="creds">
            {featured.map((c) => {
              const Icon = CredIcon[c.kind];
              return (
                <div className="cred-card" key={c.id}>
                  <span className="k">
                    <Icon />
                  </span>
                  <b>{c.issuer && c.kind === "registration" ? c.issuer : c.name}</b>
                  <span className="sub">
                    <span className="type mono">{kindLabels[c.kind].title.replace("Technical ", "")}</span>
                    {c.kind === "registration" ? ` · ${c.name}` : [c.issuer, c.location].filter(Boolean).length ? ` · ${[c.issuer, c.location].filter(Boolean).join(", ")}` : ""}
                  </span>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 18 }}>
            <Link className="linkbtn" href="/credentials">
              All credentials <Arrow size={14} />
            </Link>
          </p>
        </div>
      </section>

      <section className="dark closing" aria-labelledby="closing-title">
        <div className="wrap">
          <h2 id="closing-title">Working on a power or renewable energy project?</h2>
          <div className="ctas">
            <Link className="btn btn-volt" href="/contact">
              Start a conversation
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Read her story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
