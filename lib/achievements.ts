import { PAGES } from "@/constants/pages";
import type { Achievement } from "@/types";

/**
 * Clients may only report signals. Achievements are always derived from
 * signals (on the client for instant feedback, and again on the server), so a
 * client can never "claim" an achievement directly.
 */
const ROLE_IDS = ["bentry", "elecnor", "nedco"];
const GUIDE_IDS = ["iec61850", "fat", "schneider", "pm", "eemcp", "drone-diploma", "rpas"];

export const CASE_SIGNALS = ROLE_IDS.map((id) => `case:${id}`);
export const DEEP_SIGNALS = ROLE_IDS.map((id) => `deep:${id}`);
export const GUIDE_SIGNALS = GUIDE_IDS.map((id) => `guide:${id}`);

/** Sub-pages that earn their own signal on top of energising their parent page. */
export const EXTRA_PATH_SIGNALS: Record<string, string> = {
  "/insights/glossary": "page:glossary",
  "/mentorship/pathways": "page:pathways",
};

export const SIGNALS: string[] = [
  ...PAGES.map((p) => `page:${p.key}`),
  ...CASE_SIGNALS,
  ...DEEP_SIGNALS,
  ...GUIDE_SIGNALS,
  ...Object.values(EXTRA_PATH_SIGNALS),
  "ega-link",
  "credentials-complete",
  "map-explored",
  "quiz-pass",
];

export function isSignal(value: unknown): value is string {
  return typeof value === "string" && SIGNALS.includes(value);
}

const countWithPrefix = (s: Set<string>, prefix: string) => [...s].filter((x) => x.startsWith(prefix)).length;

export const ACHIEVEMENTS: Achievement[] = [
  { key: "first", name: "First switch-on", description: "Opened the site", test: (s) => countWithPrefix(s, "page:") > 0 },
  { key: "solar", name: "Solar synced", description: "Opened the ELECNOR solar case file", test: (s) => s.has("case:elecnor") },
  {
    key: "inspector",
    name: "Site inspector",
    description: "Opened all three case files",
    test: (s) => CASE_SIGNALS.every((c) => s.has(c)),
  },
  {
    key: "deep",
    name: "Deep dive",
    description: "Read all three full case studies",
    test: (s) => DEEP_SIGNALS.every((c) => s.has(c)),
  },
  {
    key: "analyst",
    name: "Network analyst",
    description: "Explored every point on the power-system map",
    test: (s) => s.has("map-explored"),
  },
  { key: "commissioned", name: "Commissioned", description: "Reviewed every credential", test: (s) => s.has("credentials-complete") },
  {
    key: "researcher",
    name: "Field researcher",
    description: "Read three training guides",
    test: (s) => countWithPrefix(s, "guide:") >= 3,
  },
  { key: "certified", name: "Grid certified", description: "Passed the grid readiness quiz", test: (s) => s.has("quiz-pass") },
  { key: "mentor", name: "Mentor link", description: "Followed the link to EGA Mentorship International", test: (s) => s.has("ega-link") },
  { key: "lexicon", name: "Lexicon", description: "Visited the engineering glossary", test: (s) => s.has("page:glossary") },
  {
    key: "online",
    name: "Full grid energised",
    description: "Visited all nine main pages",
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
