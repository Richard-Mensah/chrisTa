import type { CategoryValue } from "@/types";

export const CATEGORIES: { value: CategoryValue; label: string }[] = [
  { value: "engineering", label: "Engineering opportunity" },
  { value: "collaboration", label: "Technical collaboration" },
  { value: "speaking", label: "Speaking or event" },
  { value: "mentorship", label: "Mentorship" },
  { value: "other", label: "Something else" },
];

/** What to include, per enquiry type (keys match CATEGORIES values). */
export const ENQUIRY_GUIDES: Record<CategoryValue, string[]> = {
  engineering: ["The role or project, and where it is based", "Timeline and type of engagement", "Which part of her experience is relevant"],
  collaboration: ["A short summary of the project or research", "What you would like to collaborate on", "Other partners involved"],
  speaking: ["Event name, date and format (in person or online)", "Audience and suggested topic", "Any travel or time requirements"],
  mentorship: ["Where you are in your studies or career", "What you would like guidance on", "Whether you are part of an EGA programme"],
  other: ["A short summary of your request", "How best to reach you"],
};

/** Reject submissions filled in faster than this (bots). */
export const MIN_FILL_MS = 3000;
/** Per-IP contact limit. */
export const CONTACT_WINDOW_MS = 10 * 60 * 1000;
export const CONTACT_MAX_PER_WINDOW = 3;

export const VISITOR_COOKIE = "cfo_vid";
export const GRID_STORE_KEY = "cfo-grid-v1";
export const HUD_HIDDEN_KEY = "cfo-hud-hidden";
export const TOAST_MS = 5200;
/** Footer stat appears only once this many visitors have completed the grid. */
export const MIN_GRID_STAT = 10;
