import { CREDENTIALS } from "@/constants/credentials";
import { PUBLISHED_ROLES } from "@/constants/experience";
import { SKILL_GROUPS } from "@/constants/expertise";
import { GLOSSARY } from "@/constants/glossary";
import { TRAINING_GUIDES } from "@/constants/trainingGuides";
import type { Credential, GlossaryTerm, Role, RoleId, Skill } from "@/types";

/** Skills whose evidence includes this role. */
export function skillsForRole(id: RoleId): Skill[] {
  return SKILL_GROUPS.flatMap((g) => g.skills).filter((s) => s.roles?.includes(id));
}

export function credentialsByIds(ids: string[]): Credential[] {
  return ids
    .map((id) => CREDENTIALS.find((c) => c.id === id && c.published))
    .filter((c): c is Credential => Boolean(c));
}

export function hasGuide(credentialId: string): boolean {
  return TRAINING_GUIDES.some((g) => g.id === credentialId);
}

export function glossaryBySlugs(slugs: string[]): GlossaryTerm[] {
  return slugs.map((s) => GLOSSARY.find((g) => g.slug === s)).filter((g): g is GlossaryTerm => Boolean(g));
}

export function rolesByIds(ids: RoleId[]): Role[] {
  return ids.map((id) => PUBLISHED_ROLES.find((r) => r.id === id)).filter((r): r is Role => Boolean(r));
}

/** Previous and next published roles, for case-study navigation. */
export function neighbourRoles(id: RoleId): { prev?: Role; next?: Role } {
  const i = PUBLISHED_ROLES.findIndex((r) => r.id === id);
  return { prev: PUBLISHED_ROLES[i - 1], next: PUBLISHED_ROLES[i + 1] };
}
