/**
 * "verified-cv"        – stated in Christabel's CV; safe to publish.
 * "needs-confirmation" – from the CV, but wording, dates or permission still need her sign-off.
 * Items with `published: false` never render. See CONFIRM-BEFORE-LAUNCH.md.
 */
export type Status = "verified-cv" | "needs-confirmation";

export type PhotoKey =
  | "portrait"
  | "factoryFloor"
  | "corridor"
  | "trainingSession"
  | "relayPanel"
  | "siteDrone"
  | "factoryShowroom"
  | "fatMeeting";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Other people are visible – keep their consent on file. */
  showsOthers: boolean;
};

export type PageKey =
  | "home"
  | "about"
  | "expertise"
  | "experience"
  | "credentials"
  | "mentorship"
  | "leadership"
  | "insights"
  | "contact";

export type PageDef = {
  key: PageKey;
  href: string;
  label: string;
  num: string;
  /** Position on the grid map's 680×360 viewBox. */
  x: number;
  y: number;
};

export type RoleId = "bentry" | "elecnor" | "nedco";

export type Role = {
  id: RoleId;
  feeder: string;
  employer: string;
  shortName: string;
  title: string;
  period: string;
  startISO: string;
  endISO: string | null;
  location: string;
  context: string;
  responsibilities: string[];
  tools: string[];
  /** Only verified outcomes. Empty = hidden. */
  outcomes: string[];
  photo?: PhotoKey;
  status: Status;
  published: boolean;
};

export type CredentialKind = "registration" | "education" | "training" | "certificate";

export type Credential = {
  id: string;
  kind: CredentialKind;
  name: string;
  issuer?: string;
  location?: string;
  /** Leave undefined until verified – it is then not shown. */
  date?: string;
  note?: string;
  status: Status;
  published: boolean;
  featured?: boolean;
};

export type SkillKind = "experience" | "tool" | "training";

export type Skill = {
  name: string;
  kind: SkillKind;
  roles?: RoleId[];
  via?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
};

export type LeadershipGroupKey = "professional" | "student" | "recognition";

export type LeadershipRole = {
  id: string;
  organisation: string;
  title: string;
  period: string;
  details: string[];
  group: LeadershipGroupKey;
  featured?: boolean;
  status: Status;
  published: boolean;
};

export type EngagementItem = {
  title: string;
  subtitle: string;
  date: string;
  url?: string;
};

export type SupportIconKey = "bolt" | "sun" | "home" | "person" | "network" | "search";

export type FocusArea = {
  icon: "power" | "solar" | "project" | "testing";
  title: string;
  text: string;
  evidence: string;
};

export type TimelineEntry = {
  when: string;
  title: string;
  text: string;
  career?: boolean;
};

export type Achievement = {
  key: string;
  name: string;
  description: string;
  test: (signals: Set<string>) => boolean;
};

export type Toast = {
  id: number;
  key: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  topic?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { body: string };

export type CategoryValue = "engineering" | "collaboration" | "speaking" | "mentorship" | "other";

export type FieldName = "name" | "email" | "organisation" | "category" | "message";

export type FieldErrors = Partial<Record<FieldName, string>>;

export type FormStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

export type GridContextValue = {
  ready: boolean;
  signals: Set<string>;
  visited: Set<PageKey>;
  achievements: string[];
  current: PageKey | null;
  send: (signal: string) => void;
  mapOpen: boolean;
  openMap: () => void;
  closeMap: () => void;
  hudHidden: boolean;
  setHudHidden: (hidden: boolean) => void;
  reset: () => void;
};

export * from "./api";
