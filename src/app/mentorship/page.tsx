import Link from "next/link";
import { TrackedLink } from "@/components/grid/Signals";
import { PageHero, Photo } from "@/components/ui/Blocks";
import { External, SupportIcon } from "@/components/ui/Icons";
import { mentorship } from "@/content/mentorship";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Mentorship: supporting the next generation of engineers",
  description:
    "Christabel Owusu mentors students and early-career engineers with EGA Mentorship International, focusing on electrical engineering, renewable energy careers and Women in Engineering.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <PageHero eyebrow="Substation 06 · Mentorship" title="Mentorship: supporting the next generation of engineers">
        <blockquote className="quote">
          “{mentorship.quote}”<cite className="mono">Ing. Christabel Fremah Owusu</cite>
        </blockquote>
      </PageHero>

      <section className="sec">
        <div className="wrap two">
          <div>
            <p className="eyebrow mono">Mentor profile</p>
            <h2 className="h2">From student leader to mentor</h2>
            <p className="lede">{mentorship.bio}</p>
            {mentorship.egaRole && (
              <p className="lede">
                Role with {site.ega.name}: {mentorship.egaRole.role}
                {mentorship.egaRole.programme ? `, ${mentorship.egaRole.programme}` : ""}.
              </p>
            )}
            <h3 className="h3" style={{ marginTop: 36 }}>
              Who it&apos;s for
            </h3>
            <ul className="who">
              {mentorship.audience.map((a, i) => (
                <li key={a}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ul>
            <Photo
              id="trainingSession"
              sizes="(max-width: 880px) 100vw, 540px"
              style={{ aspectRatio: "4/3", marginTop: 32 }}
            />
          </div>
          <div>
            <p className="eyebrow mono">Areas of support</p>
            <div className="support">
              {mentorship.areas.map((a) => {
                const Icon = SupportIcon[a.icon];
                return (
                  <div key={a.text}>
                    <Icon />
                    {a.text}
                  </div>
                );
              })}
            </div>
            <div className="notice">
              <b>About {site.ega.name}.</b> EGA connects young people with mentorship, leadership training, skills
              development and opportunities. This is Christabel&apos;s personal website, not EGA&apos;s official site.
              Mentorship availability, eligibility and booking follow EGA&apos;s programme structure, so please check
              EGA&apos;s website for current programmes.
            </div>
            <div className="ctas">
              <TrackedLink
                signal="ega-link"
                className="btn btn-ink"
                href={site.ega.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {site.ega.name} <External />
              </TrackedLink>
              <Link className="btn btn-line" href="/contact?topic=mentorship">
                Request mentorship
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
