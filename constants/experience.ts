import type { Role } from "@/types";

// Newest first.
export const ROLES: Role[] = [
  {
    id: "bentry",
    feeder: "Feeder 03",
    employer: "Bentry Company Limited",
    shortName: "Bentry",
    title: "Electrical Engineer / Project Engineer",
    period: "10/2023 – present",
    startISO: "2023-10",
    endISO: null,
    location: "Ghana",
    context:
      "Project engineering across planning, site execution and handover: supervising work on site, reviewing drawings and technical submittals, and taking systems through testing and commissioning.",
    responsibilities: [
      "Project planning and monitoring",
      "Site supervision",
      "Testing and commissioning",
      "Drawings and technical submittal review",
    ],
    tools: ["AutoCAD MEP", "Microsoft Office", "Technical reporting"],
    outcomes: [],
    photo: "fatMeeting",
    status: "needs-confirmation",
    published: true,
  },
  {
    id: "elecnor",
    feeder: "Feeder 02",
    employer: "ELECNOR S.A., Ghana",
    shortName: "ELECNOR",
    title: "Junior Engineer / Operations & Maintenance Engineer (contract)",
    period: "01/2022 – 05/2023",
    startISO: "2022-01",
    endISO: "2023-05",
    location: "Upper West Region, Ghana",
    context:
      "Construction of 13 MWp and 15 MWp solar plants for the Volta River Authority (VRA). Operations, maintenance and daily reporting during the project.",
    responsibilities: [
      "Maintenance work on the plant",
      "Operations on the SCADA system and daily reporting",
      "Drone piloting",
      "Audio-visual reporting",
    ],
    tools: ["SCADA", "PVsyst", "Drone (aerial documentation)", "Adobe Lightroom & Photoshop", "Filmora X"],
    outcomes: [],
    photo: "siteDrone",
    status: "verified-cv",
    published: true,
  },
  {
    id: "nedco",
    feeder: "Feeder 01",
    employer: "Northern Electricity Distribution Company (NEDCo)",
    shortName: "NEDCo",
    title: "Electrical Maintenance Personnel · National Service",
    period: "08/2020 – 08/2021",
    startISO: "2020-08",
    endISO: "2021-08",
    location: "Techiman, Ghana",
    context:
      "Hands-on distribution network work: servicing, installing and commissioning distribution transformers, terminating cables and preparing bills of quantities.",
    responsibilities: [
      "Maintenance and servicing of distribution transformers",
      "Transformer installation and commissioning",
      "Preparing bills of quantities",
      "Cable termination",
    ],
    tools: ["Distribution transformers", "Microsoft Excel (bills of quantities)"],
    outcomes: [],
    photo: "factoryFloor",
    status: "verified-cv",
    published: true,
  },
];

export const PUBLISHED_ROLES = ROLES.filter((r) => r.published);
