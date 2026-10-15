import type { SkillGroup, SkillKind } from "@/types";

export const SKILL_KIND_LABELS: Record<SkillKind, string> = {
  experience: "Professional experience",
  tool: "Tool proficiency",
  training: "Training",
};

export const SKILL_KINDS: SkillKind[] = ["experience", "tool", "training"];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "power",
    title: "Power systems & electrical infrastructure",
    summary: "Distribution network maintenance and transformer work, backed by substation-focused training.",
    skills: [
      { name: "Electrical maintenance", kind: "experience", roles: ["nedco", "elecnor"] },
      { name: "Distribution transformer servicing and installation", kind: "experience", roles: ["nedco"] },
      { name: "Transformer installation and commissioning", kind: "experience", roles: ["nedco"] },
      { name: "Cable termination", kind: "experience", roles: ["nedco"] },
      { name: "Technical documentation", kind: "experience", roles: ["nedco", "elecnor", "bentry"] },
      { name: "Factory acceptance testing of power transformers", kind: "training", via: "FAT, Jiangshan, China" },
      { name: "IEC 61850 substation communication and cyber security", kind: "training", via: "Tier I–III, Phoenix, USA" },
      { name: "GHA and GMAe switchgear operation and maintenance", kind: "training", via: "Schneider Electric, Germany" },
    ],
  },
  {
    id: "renewable",
    title: "Renewable energy",
    summary: "Operations and maintenance on utility-scale solar PV projects.",
    skills: [
      { name: "Solar PV plant operations and maintenance", kind: "experience", roles: ["elecnor"] },
      { name: "13 MWp and 15 MWp solar plant projects for VRA", kind: "experience", roles: ["elecnor"] },
      { name: "SCADA operations and daily reporting", kind: "experience", roles: ["elecnor"] },
      { name: "PVsyst", kind: "tool" },
      { name: "Energy efficiency management", kind: "training", via: "EEMCP" },
    ],
  },
  {
    id: "delivery",
    title: "Engineering project delivery",
    summary: "Planning through commissioning on electrical projects.",
    skills: [
      { name: "Project planning and monitoring", kind: "experience", roles: ["bentry"] },
      { name: "Site supervision", kind: "experience", roles: ["bentry"] },
      { name: "Testing and commissioning", kind: "experience", roles: ["bentry", "nedco"] },
      { name: "Technical drawing and submittal review", kind: "experience", roles: ["bentry"] },
      { name: "Bills of quantities", kind: "experience", roles: ["nedco"] },
      { name: "Technical reporting", kind: "experience", roles: ["elecnor"] },
      { name: "Project management", kind: "training", via: "Cambridge Center of Excellence course" },
    ],
  },
  {
    id: "digital",
    title: "Engineering software & digital tools",
    summary: "Design, modelling, reporting and aerial documentation tools.",
    skills: [
      { name: "AutoCAD MEP", kind: "tool" },
      { name: "PVsyst", kind: "tool" },
      { name: "Microsoft Office (Word, Excel, PowerPoint)", kind: "tool" },
      { name: "Drone piloting and aerial documentation", kind: "experience", roles: ["elecnor"] },
      { name: "RPAS safety", kind: "training", via: "RPAS safety training" },
      { name: "Adobe Lightroom, Photoshop and Filmora X (visual reporting)", kind: "tool" },
    ],
  },
];
