import type { MapHotspot } from "@/types";

export const TRAINED_ACROSS = [
  { place: "Ghana", text: "BSc at UENR, Sunyani, then roles with NEDCo, ELECNOR and Bentry.", href: "/experience" },
  { place: "USA", text: "IEC 61850 Tier I–III and cyber security training, Phoenix, Arizona.", href: "/credentials/iec61850" },
  { place: "China", text: "Factory acceptance test for power transformers, Jiangshan.", href: "/credentials/fat" },
  { place: "Germany", text: "GHA and GMAe switchgear O&M training, Schneider Electric, Regensburg.", href: "/credentials/schneider" },
];

export const AFFILIATIONS = [
  { name: "Ghana Institution of Engineering (GhIE)", role: "Professional Engineer, Electrical Division" },
  { name: "GhIE Women in Engineering, UENR", role: "Student President, 2019–2020" },
  { name: "United Nations Youth Association of Ghana", role: "Youth Minister, Energy and Petroleum, 2020–2024" },
  { name: "EGA Mentorship International", role: "Mentor" },
];

export const LANGUAGES = [
  { name: "English", level: "Bilingual proficiency" },
  { name: "Asante Twi", level: "Local language" },
  { name: "French", level: "Beginner" },
];

/** Hotspots on the Projects page power-system map (viewBox 0 0 720 300). */
export const MAP_HOTSPOTS: MapHotspot[] = [
  {
    id: "solar",
    label: "Generation",
    x: 90,
    y: 110,
    title: "Solar generation · ELECNOR",
    text: "O&M engineer on the construction of 13 MWp and 15 MWp solar plants for the Volta River Authority: plant maintenance, SCADA operations, drone documentation.",
    href: "/experience/elecnor",
    linkLabel: "Open the ELECNOR case study",
  },
  {
    id: "substation",
    label: "Substation",
    x: 300,
    y: 110,
    title: "Substations & switchgear · Training",
    text: "IEC 61850 and cyber security training (USA), and GHA/GMAe switchgear O&M training with Schneider Electric (Germany).",
    href: "/credentials/iec61850",
    linkLabel: "Read the IEC 61850 guide",
  },
  {
    id: "distribution",
    label: "Distribution",
    x: 510,
    y: 110,
    title: "Distribution network · NEDCo",
    text: "Distribution transformer maintenance, installation and commissioning, cable termination and bills of quantities in Techiman.",
    href: "/experience/nedco",
    linkLabel: "Open the NEDCo case study",
  },
  {
    id: "project",
    label: "Project delivery",
    x: 360,
    y: 240,
    title: "Project delivery · Bentry",
    text: "Electrical and project engineer: planning and monitoring, site supervision, testing and commissioning, drawing and submittal review.",
    href: "/experience/bentry",
    linkLabel: "Open the Bentry case study",
  },
];
