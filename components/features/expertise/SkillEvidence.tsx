import Link from "next/link";
import { ROLES } from "@/constants/experience";
import type { Skill } from "@/types";

type Props = {
  skill: Skill;
};

/** Where a skill comes from: linked roles for experience, or the training/credential behind it. */
export default function SkillEvidence({ skill }: Props) {
  if (skill.roles?.length) {
    return (
      <span className="col-span-2 text-sm text-muted">
        Evidence:{" "}
        {skill.roles.map((id, i) => (
          <span key={id}>
            {i > 0 && ", "}
            <Link href={`/experience#${id}`} className="text-accent hover:underline">
              {ROLES.find((r) => r.id === id)?.shortName ?? id}
            </Link>
          </span>
        ))}
      </span>
    );
  }
  if (skill.via) return <span className="col-span-2 text-sm text-muted">Via: {skill.via}</span>;
  return null;
}
