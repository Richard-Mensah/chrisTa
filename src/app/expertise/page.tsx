import Link from "next/link";
import { PageHero } from "@/components/ui/Blocks";
import { roles } from "@/content/experience";
import { skillGroups, skillKindLabel, type SkillKind } from "@/content/expertise";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Engineering expertise",
  description:
    "Power systems, renewable energy, engineering project delivery and engineering software. Each skill is labelled as professional experience, tool proficiency or training.",
  path: "/expertise",
});

const kinds: SkillKind[] = ["experience", "tool", "training"];

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Substation 03 · Expertise"
        title="Engineering expertise, with the evidence attached"
        lede="Each capability is labelled by where it comes from: hands-on professional work, software proficiency, or formal training."
      >
        <div className="legend">
          {kinds.map((k) => (
            <span key={k} className={`kind kind-${k}`}>
              {skillKindLabel[k]}
            </span>
          ))}
        </div>
      </PageHero>
      <section className="sec">
        <div className="wrap skill-groups">
          {skillGroups.map((g) => (
            <section className="skill-group" key={g.id} aria-labelledby={`g-${g.id}`}>
              <h2 id={`g-${g.id}`}>{g.title}</h2>
              <p>{g.summary}</p>
              <ul className="skills">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <span>{s.name}</span>
                    <span className={`kind kind-${s.kind}`}>{skillKindLabel[s.kind]}</span>
                    {(s.roles?.length || s.via) && (
                      <span className="ev">
                        {s.roles?.length ? (
                          <>
                            Evidence:{" "}
                            {s.roles.map((id, i) => {
                              const r = roles.find((x) => x.id === id)!;
                              return (
                                <span key={id}>
                                  {i > 0 && ", "}
                                  <Link href={`/experience#${id}`}>{r.shortName}</Link>
                                </span>
                              );
                            })}
                          </>
                        ) : (
                          <>Via: {s.via}</>
                        )}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
