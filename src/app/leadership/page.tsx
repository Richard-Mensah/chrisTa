import { PageHero, Pending } from "@/components/ui/Blocks";
import { communityService, conferences, leadership, speaking } from "@/content/leadership";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Leadership & engagement",
  description:
    "Leadership roles held by Christabel Owusu, including Youth Minister for Energy and Petroleum (UN Youth Association of Ghana) and Student President of GhIE Women in Engineering at UENR.",
  path: "/leadership",
});

const groups = [
  { key: "professional", title: "Youth and sector leadership" },
  { key: "student", title: "University leadership" },
  { key: "recognition", title: "Recognition" },
] as const;

export default function LeadershipPage() {
  const published = leadership.filter((l) => l.published);
  return (
    <>
      <PageHero
        eyebrow="Substation 07 · Leadership"
        title="Leadership and professional engagement"
        lede="Roles she has held from university through national youth leadership, as documented in her CV."
      />
      <section className="sec">
        <div className="wrap" style={{ display: "grid", gap: 56 }}>
          {groups.map((g) => {
            const items = published.filter((l) => l.group === g.key);
            if (!items.length) return null;
            return (
              <section key={g.key} aria-labelledby={`lg-${g.key}`}>
                <h2 className="h2" id={`lg-${g.key}`}>
                  {g.title}
                </h2>
                <div className="lead-list">
                  {items.map((l) => (
                    <article className={`lead-item${l.id === "unya" || l.id === "wine" ? " feature" : ""}`} key={l.id}>
                      <span className="when mono">{l.period || " "}</span>
                      <div>
                        <h3>{l.title}</h3>
                        <p>{l.organisation}</p>
                        {l.details.length > 0 && (
                          <ul style={{ margin: "8px 0 0", paddingLeft: 18, listStyle: "disc" }}>
                            {l.details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        )}
                        {l.details.length === 0 && <Pending>Add responsibilities &amp; initiatives</Pending>}
                        {l.status === "needs-confirmation" && <Pending>Confirm year</Pending>}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {speaking.length > 0 && (
            <section aria-labelledby="speaking">
              <h2 className="h2" id="speaking">
                Speaking
              </h2>
              <div className="lead-list">
                {speaking.map((s) => (
                  <article className="lead-item" key={s.title}>
                    <span className="when mono">{s.date}</span>
                    <div>
                      <h3>{s.url ? <a href={s.url}>{s.title}</a> : s.title}</h3>
                      <p>{s.event}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
          {conferences.length > 0 && (
            <section aria-labelledby="conf">
              <h2 className="h2" id="conf">
                Conferences &amp; industry engagement
              </h2>
              <div className="lead-list">
                {conferences.map((c) => (
                  <article className="lead-item" key={c.name}>
                    <span className="when mono">{c.date}</span>
                    <div>
                      <h3>{c.name}</h3>
                      <p>{c.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
          {communityService.length > 0 && (
            <section aria-labelledby="community">
              <h2 className="h2" id="community">
                Community service
              </h2>
              <div className="lead-list">
                {communityService.map((c) => (
                  <article className="lead-item" key={c.title}>
                    <span className="when mono">{c.period}</span>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.organisation}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
