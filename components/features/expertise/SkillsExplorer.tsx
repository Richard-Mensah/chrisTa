"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import FilterChip from "@/components/ui/FilterChip";
import { PUBLISHED_ROLES } from "@/constants/experience";
import { SKILL_GROUPS, SKILL_KIND_LABELS, SKILL_KINDS } from "@/constants/expertise";
import type { RoleId, SkillKind } from "@/types";
import SkillGroupCard from "./SkillGroupCard";

type KindFilter = SkillKind | "all";
type RoleFilter = RoleId | "all";

/** Filter skills by where they come from (kind), by role, or by text. */
export default function SkillsExplorer() {
  const [kind, setKind] = useState<KindFilter>("all");
  const [role, setRole] = useState<RoleFilter>("all");
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SKILL_GROUPS.map((g) => ({
      ...g,
      skills: g.skills.filter(
        (s) =>
          (kind === "all" || s.kind === kind) &&
          (role === "all" || s.roles?.includes(role)) &&
          (!q || s.name.toLowerCase().includes(q)),
      ),
    })).filter((g) => g.skills.length > 0);
  }, [kind, role, query]);

  const count = groups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <div>
      <div className="grid gap-4 rounded-3xl border border-line bg-surface p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 w-16 text-sm font-semibold">Source</span>
          <FilterChip label="All" active={kind === "all"} onClick={() => setKind("all")} />
          {SKILL_KINDS.map((k) => (
            <FilterChip key={k} label={SKILL_KIND_LABELS[k]} active={kind === k} onClick={() => setKind(k)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 w-16 text-sm font-semibold">Role</span>
          <FilterChip label="All" active={role === "all"} onClick={() => setRole("all")} />
          {PUBLISHED_ROLES.map((r) => (
            <FilterChip key={r.id} label={r.shortName} active={role === r.id} onClick={() => setRole(r.id)} />
          ))}
        </div>
        <div className="relative">
          <label htmlFor="skill-search" className="sr-only">
            Search skills
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            id="skill-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills"
            className="w-full rounded-full border border-line bg-canvas py-2.5 pl-11 pr-4 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-brand-teal"
          />
        </div>
      </div>
      <p aria-live="polite" className="mt-4 text-sm text-muted">
        Showing {count} {count === 1 ? "skill" : "skills"}
      </p>
      {groups.length ? (
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          {groups.map((g) => (
            <SkillGroupCard key={g.id} group={g} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-2xl border border-dashed border-line p-8 text-center text-muted">
          No skills match these filters. Try clearing one.
        </p>
      )}
    </div>
  );
}
