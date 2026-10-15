import type { TrainingGuide } from "@/types";

// whatItCovers describes what such training typically covers (general context).
// Christabel's own facts (name, place) come from constants/credentials.ts.
export const TRAINING_GUIDES: TrainingGuide[] = [
  {
    id: "iec61850",
    summary:
      "Training across tiers I to III of IEC 61850, the international standard for communication in power utility automation, together with cyber security.",
    whatItCovers: [
      "How IEC 61850 models substation equipment as standard logical nodes and data objects",
      "Communication services: MMS for client–server reporting, GOOSE for fast peer-to-peer signals, and sampled values",
      "Substation Configuration Language (SCL) files that describe devices and their communication",
      "Cyber security principles for protecting substation and control networks",
    ],
    whyItMatters:
      "Digital substations depend on interoperable, secure communication between protection and control devices. The subject connects to the testing and commissioning responsibilities in her project engineering role.",
    relatedRoles: ["bentry"],
    diagram: "substation",
    photo: "relayPanel",
  },
  {
    id: "fat",
    summary: "A factory acceptance test (FAT) for power transformers at the manufacturer in Jiangshan, China.",
    whatItCovers: [
      "Witnessing tests at the factory before a transformer is shipped",
      "Typical routine checks: winding resistance, voltage ratio and vector group, insulation resistance, and no-load and load losses",
      "Dielectric tests confirming the insulation withstands specified voltages",
      "Comparing test reports with the purchase specification and standards such as IEC 60076",
    ],
    whyItMatters:
      "Finding a defect at the factory is far cheaper than finding it on site. It complements her experience installing and commissioning distribution transformers.",
    relatedRoles: ["nedco", "bentry"],
    diagram: "distribution",
    photo: "factoryFloor",
  },
  {
    id: "schneider",
    summary:
      "Operation and maintenance training on Schneider Electric's GHA and GMAe medium-voltage switchgear, in Regensburg, Germany.",
    whatItCovers: [
      "How gas-insulated medium-voltage switchgear is built and operated safely",
      "Switching, interlocking and earthing procedures",
      "Manufacturer-recommended inspection and maintenance routines",
      "Safe working practices around energised equipment",
    ],
    whyItMatters:
      "Switchgear controls, protects and isolates parts of the network, so correct operation and maintenance are central to safety and reliability at handover.",
    relatedRoles: ["bentry"],
  },
  {
    id: "pm",
    summary:
      "A project management course from the Cambridge Center of Excellence. It is listed as a course, not as the PMI PMP® certification.",
    whatItCovers: [
      "Defining scope, schedule and cost baselines",
      "Planning resources and managing risk",
      "Monitoring progress and controlling change",
      "Stakeholder communication and project closure",
    ],
    whyItMatters: "It maps directly onto the project planning and monitoring responsibilities in her Bentry role.",
    relatedRoles: ["bentry"],
    diagram: "lifecycle",
  },
  {
    id: "eemcp",
    summary: "The Energy Efficiency Management Certificate (EEMCP).",
    whatItCovers: [
      "Energy audits and finding where energy is wasted",
      "Measuring and verifying energy savings",
      "Efficient lighting, motors and building services",
      "Building an organisational energy management plan",
    ],
    whyItMatters:
      "Using energy efficiently reduces demand on the grid. It complements supply-side experience in distribution and solar generation.",
    relatedRoles: [],
  },
  {
    id: "drone-diploma",
    summary: "A diploma in the operational applications of drones in engineering.",
    whatItCovers: [
      "Using drones for inspection, surveying and progress documentation",
      "Planning flights that capture usable imagery of large sites",
      "Processing aerial photos and video for reports",
    ],
    whyItMatters: "She piloted drones for audio-visual reporting during the VRA solar plant construction with ELECNOR.",
    relatedRoles: ["elecnor"],
    diagram: "solar",
    photo: "siteDrone",
  },
  {
    id: "rpas",
    summary: "Remotely Piloted Aircraft Systems (RPAS) safety training.",
    whatItCovers: [
      "Pre-flight checks and risk assessment",
      "Airspace awareness and operating rules",
      "Safe operation around people, structures and live electrical infrastructure",
      "Emergency procedures",
    ],
    whyItMatters:
      "Safety training underpins drone work on energy sites. In Ghana, drone operations are regulated by the Ghana Civil Aviation Authority.",
    relatedRoles: ["elecnor"],
    diagram: "solar",
    photo: "siteDrone",
  },
];

export function trainingGuideById(id: string): TrainingGuide | undefined {
  return TRAINING_GUIDES.find((g) => g.id === id);
}
