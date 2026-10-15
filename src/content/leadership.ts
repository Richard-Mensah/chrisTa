import type { Status } from "./types";

export interface LeadershipRole {
  id: string;
  organisation: string;
  title: string;
  period: string;
  /** Verified responsibilities / initiatives. Empty = not shown. */
  details: string[];
  group: "professional" | "student" | "recognition";
  status: Status;
  published: boolean;
}

export const leadership: LeadershipRole[] = [
  {
    id: "unya",
    organisation: "United Nations Youth Association of Ghana",
    title: "Youth Minister, Energy and Petroleum",
    period: "2020 – 2024",
    details: [],
    group: "professional",
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

/** Optional sections – hidden while empty. */
export const speaking: { title: string; event: string; date: string; url?: string }[] = [];
export const conferences: { name: string; role: string; date: string }[] = [];
export const communityService: { title: string; organisation: string; period: string }[] = [];
