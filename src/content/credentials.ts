import type { Status } from "./types";

export type CredentialKind = "registration" | "education" | "training" | "certificate";

export interface Credential {
  id: string;
  kind: CredentialKind;
  name: string;
  issuer?: string;
  location?: string;
  /** Leave undefined until verified – it is then simply not shown. */
  date?: string;
  note?: string;
  status: Status;
  published: boolean;
  featured?: boolean;
}

export const credentials: Credential[] = [
  {
    id: "ghie",
    kind: "registration",
    name: "Professional Engineer, Electrical Division",
    issuer: "Ghana Institution of Engineering (GhIE)",
    note: "Professional body listed in her CV.",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
  {
    id: "bsc",
    kind: "education",
    name: "BSc Electrical and Electronics Engineering",
    issuer: "University of Energy and Natural Resources (UENR)",
    location: "Sunyani, Ghana",
    date: "2016 – 2020",
    status: "verified-cv",
    published: true,
  },
  {
    id: "iec61850",
    kind: "training",
    name: "IEC 61850 Tier I, II and III and Cyber Security",
    location: "Phoenix, Arizona, USA",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
  {
    id: "fat",
    kind: "training",
    name: "Factory Acceptance Test for power transformers",
    issuer: "Zhejiang Jiangshan Transformers Company Limited",
    location: "Jiangshan, China",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
  {
    id: "schneider",
    kind: "training",
    name: "Operation and maintenance of GHA and GMAe switchgear",
    issuer: "Schneider Electric",
    location: "Regensburg, Germany",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
  {
    id: "pm",
    kind: "training",
    name: "Project Management Professional course",
    issuer: "Cambridge Center of Excellence",
    note: "A training course. It is not the PMI PMP® certification.",
    status: "needs-confirmation",
    published: true,
  },
  {
    id: "eemcp",
    kind: "certificate",
    name: "Energy Efficiency Management Certificate (EEMCP)",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
  {
    id: "drone-diploma",
    kind: "certificate",
    name: "Diploma in operational applications of drones in engineering",
    status: "needs-confirmation",
    published: true,
  },
  {
    id: "rpas",
    kind: "training",
    name: "Remotely Piloted Aircraft Systems (RPAS) safety training",
    status: "needs-confirmation",
    published: true,
    featured: true,
  },
];

export const kindLabels: Record<CredentialKind, { title: string; blurb: string }> = {
  registration: {
    title: "Professional registration",
    blurb: "Standing with a professional engineering body.",
  },
  education: { title: "Education", blurb: "Academic qualification." },
  training: {
    title: "Technical training",
    blurb: "Courses and factory or vendor training. These are not separate licences.",
  },
  certificate: { title: "Certificates", blurb: "Certificates and diplomas from completed programmes." },
};

export const publishedCredentials = credentials.filter((c) => c.published);
