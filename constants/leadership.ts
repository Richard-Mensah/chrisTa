import type { EngagementItem, LeadershipGroupKey, LeadershipRole, LeadershipTheme } from "@/types";

export const LEADERSHIP: LeadershipRole[] = [
  {
    id: "unya",
    organisation: "United Nations Youth Association of Ghana",
    title: "Youth Minister, Energy and Petroleum",
    period: "2020 – 2024",
    details: [],
    group: "professional",
    featured: true,
    status: "verified-cv",
    published: true,
  },
  {
    id: "wine",
    organisation: "GhIE Women in Engineering (WiNE), UENR",
    title: "Student President",
    period: "2019 – 2020",
    details: [],
    group: "student",
    featured: true,
    status: "verified-cv",
    published: true,
  },
  {
    id: "classrep",
    organisation: "BSc Electrical/Electronic Engineering, UENR",
    title: "Class Representative",
    period: "2016 – 2020",
    details: [],
    group: "student",
    status: "verified-cv",
    published: true,
  },
  {
    id: "nugs",
    organisation: "National Union of Ghana Students (NUGS), UENR local",
    title: "Public Relations Officer",
    period: "2018 – 2019",
    details: [],
    group: "student",
    status: "verified-cv",
    published: true,
  },
  {
    id: "usag",
    organisation: "University Students Association of Ghana (USAG)",
    title: "Senate Observer",
    period: "2018 – 2019",
    details: [],
    group: "student",
    status: "verified-cv",
    published: true,
  },
  {
    id: "agcm",
    organisation: "A.G.C.M, UENR Chapter",
    title: "Media / Publicity Head",
    period: "2018 – 2019",
    details: [],
    group: "student",
    status: "verified-cv",
    published: true,
  },
  {
    id: "brandstorm",
    organisation: "L'Oréal Brandstorm",
    title: "Semi-finalist, Sub-Saharan Africa",
    period: "",
    details: [],
    group: "recognition",
    status: "needs-confirmation",
    published: true,
  },
];

export const LEADERSHIP_GROUPS: { key: LeadershipGroupKey; title: string }[] = [
  { key: "professional", title: "Youth and sector leadership" },
  { key: "student", title: "University leadership" },
  { key: "recognition", title: "Recognition" },
];

/** Themes derived from the role titles above – not additional claims. */
export const LEADERSHIP_THEMES: LeadershipTheme[] = [
  {
    title: "Energy-sector youth leadership",
    text: "Held the energy and petroleum portfolio as a youth minister with the United Nations Youth Association of Ghana.",
    roleIds: ["unya"],
  },
  {
    title: "Women in Engineering",
    text: "Led the GhIE Women in Engineering student chapter at UENR.",
    roleIds: ["wine"],
  },
  {
    title: "Student representation",
    text: "Represented her class for the full degree and observed the University Students Association of Ghana senate.",
    roleIds: ["classrep", "usag"],
  },
  {
    title: "Communication & media",
    text: "Public relations for the local NUGS chapter and media and publicity for the A.G.C.M UENR chapter.",
    roleIds: ["nugs", "agcm"],
  },
];

/** Year range covered by the leadership timeline chart. */
export const LEADERSHIP_YEARS = { start: 2016, end: 2024 };

/** Optional sections: each stays hidden while its list is empty. */
export const ENGAGEMENT_SECTIONS: { id: string; title: string; items: EngagementItem[] }[] = [
  { id: "speaking", title: "Speaking", items: [] },
  { id: "conferences", title: "Conferences & industry engagement", items: [] },
  { id: "community", title: "Community service", items: [] },
];
