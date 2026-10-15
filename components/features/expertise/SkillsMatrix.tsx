import Link from "next/link";
import { Check } from "lucide-react";
import { PUBLISHED_ROLES } from "@/constants/experience";
import { SKILL_GROUPS } from "@/constants/expertise";

/** Experience-based skills × roles. Every tick is evidenced by a CV responsibility. */
export default function SkillsMatrix() {
  const rows = SKILL_GROUPS.flatMap((g) => g.skills).filter(
    (s, i, all) => s.kind === "experience" && all.findIndex((x) => x.name === s.name) === i,
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface shadow-sm">
      <table className="w-full min-w-[36rem] border-collapse text-sm">
        <caption className="sr-only">Which role evidences each professional skill</caption>
        <thead>
          <tr className="border-b border-line bg-canvas">
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Skill
            </th>
            {PUBLISHED_ROLES.map((r) => (
              <th key={r.id} scope="col" className="px-4 py-3 text-center font-semibold">
                <Link href={`/experience/${r.id}`} className="text-accent hover:underline">
                  {r.shortName}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((s) => (
            <tr key={s.name} className="border-b border-line last:border-0 hover:bg-canvas">
              <th scope="row" className="px-4 py-3 text-left font-normal">
                {s.name}
              </th>
              {PUBLISHED_ROLES.map((r) => (
                <td key={r.id} className="px-4 py-3 text-center">
                  {s.roles?.includes(r.id) ? (
                    <Check className="mx-auto size-5 text-accent" aria-label="Yes" />
                  ) : (
                    <span className="text-line" aria-label="No">
                      –
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
