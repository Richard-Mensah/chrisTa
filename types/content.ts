import type { PhotoKey, RoleId } from "./index";

export type DiagramKey = "solar" | "distribution" | "substation" | "lifecycle";

export type LifecycleStageKey = "plan" | "supervise" | "commission" | "operate" | "report";

export type LifecycleStage = {
  key: LifecycleStageKey;
  title: string;
  /** General description of the stage (not project-specific). */
  general: string;
  /** CV responsibilities that belong to this stage, with the role they come from. */
  evidence: { text: string; role: RoleId }[];
};

export type ResponsibilityNote = {
  /** Must match a responsibility string in constants/experience.ts. */
  text: string;
  /** General explanation of what this task involves in the industry. */
  general: string;
};

export type CaseStudy = {
  id: RoleId;
  sector: string;
  client?: string;
  generalContext: string[];
  notes: ResponsibilityNote[];
  diagram: DiagramKey;
  relatedCredentialIds: string[];
  glossaryTerms: string[];
};

export type TrainingGuide = {
  id: string;
  summary: string;
  whatItCovers: string[];
  whyItMatters: string;
  relatedRoles: RoleId[];
  photo?: PhotoKey;
  diagram?: DiagramKey;
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CareerPathway = {
  id: string;
  title: string;
  involves: string;
  skills: string[];
  /** Christabel's CV role that illustrates this pathway, if any. */
  exampleRole?: RoleId;
  exampleCredential?: string;
};

export type Highlight = {
  label: string;
  detail: string;
  href: string;
};

export type LeadershipTheme = {
  title: string;
  text: string;
  roleIds: string[];
};

export type EnquiryGuide = {
  category: string;
  include: string[];
};

export type MapHotspot = {
  id: string;
  label: string;
  x: number;
  y: number;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
};
