import type { Highlight, LifecycleStage } from "@/types";

/** Text highlights from the CV – deliberately no invented statistics. */
export const HIGHLIGHTS: Highlight[] = [
  { label: "13 MWp + 15 MWp", detail: "VRA solar plants, Upper West", href: "/experience/elecnor" },
  { label: "USA · China · Germany", detail: "IEC 61850, transformer FAT, switchgear O&M", href: "/credentials" },
  { label: "GhIE · Electrical Division", detail: "Professional Engineer", href: "/credentials" },
  { label: "EGA mentor", detail: "Supporting future engineers", href: "/mentorship" },
];

/** Project lifecycle: each stage lists the CV responsibilities that belong to it. */
export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    key: "plan",
    title: "Plan & estimate",
    general: "Define the work, sequence it and estimate what it needs before anything is built.",
    evidence: [
      { text: "Project planning and monitoring", role: "bentry" },
      { text: "Preparing bills of quantities", role: "nedco" },
    ],
  },
  {
    key: "supervise",
    title: "Review & supervise",
    general: "Check designs and equipment against the specification, then oversee installation on site.",
    evidence: [
      { text: "Drawings and technical submittal review", role: "bentry" },
      { text: "Site supervision", role: "bentry" },
    ],
  },
  {
    key: "commission",
    title: "Install, test & commission",
    general: "Prove the installed system is safe and works as designed before it is energised.",
    evidence: [
      { text: "Testing and commissioning", role: "bentry" },
      { text: "Transformer installation and commissioning", role: "nedco" },
      { text: "Cable termination", role: "nedco" },
    ],
  },
  {
    key: "operate",
    title: "Operate & maintain",
    general: "Keep assets running reliably through monitoring and preventive maintenance.",
    evidence: [
      { text: "Operations on the SCADA system and daily reporting", role: "elecnor" },
      { text: "Maintenance work on the plant", role: "elecnor" },
      { text: "Maintenance and servicing of distribution transformers", role: "nedco" },
    ],
  },
  {
    key: "report",
    title: "Document & report",
    general: "Record what was done and the condition of the asset so decisions rest on evidence.",
    evidence: [
      { text: "Audio-visual reporting", role: "elecnor" },
      { text: "Drone piloting", role: "elecnor" },
    ],
  },
];
