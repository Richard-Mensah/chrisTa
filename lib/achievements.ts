import { PAGES } from "@/constants/pages";
import type { Achievement } from "@/types";

/**
 * Clients may only report signals. Achievements are always derived from
 * signals (on the client for instant feedback, and again on the server), so a
 * client can never "claim" an achievement directly.
 */
export const CASE_SIGNALS = ["case:bentry", "case:elecnor", "case:nedco"];

export const SIGNALS: string[] = [
  ...PAGES.map((p) => `page:${p.key}`),
  ...CASE_SIGNALS,
  "ega-link",
  "credentials-complete",
];

export function isSignal(value: unknown): value is string {
  return typeof value === "string" && SIGNALS.includes(value);
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    key: "first",
    name: "First switch-on",
    description: "Opened the site",
    test: (s) => [...s].some((x) => x.startsWith("page:")),
  },
  {
    key: "solar",
    name: "Solar synced",
    description: "Opened the ELECNOR solar case file",
    test: (s) => s.has("case:elecnor"),
  },
  {
    key: "inspector",
    name: "Site inspector",
    description: "Opened all three case files",
    test: (s) => CASE_SIGNALS.every((c) => s.has(c)),
  },
  {
    key: "commissioned",
    name: "Commissioned",
    description: "Reviewed every credential",
    test: (s) => s.has("credentials-complete"),
  },
  {
    key: "mentor",
    name: "Mentor link",
    description: "Followed the link to EGA Mentorship International",
    test: (s) => s.has("ega-link"),
  },
  {
    key: "online",
    name: "Full grid energised",
    description: "Visited all nine pages",
    test: (s) => PAGES.every((p) => s.has(`page:${p.key}`)),
  },
];

export function computeAchievements(signals: Iterable<string>): string[] {
  const set = new Set(signals);
  return ACHIEVEMENTS.filter((a) => a.test(set)).map((a) => a.key);
}

export function achievementByKey(key: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.key === key);
}
