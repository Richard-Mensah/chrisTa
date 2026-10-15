import type { CaseStudy } from "@/types";

// generalContext and notes[].general describe the field in general terms only.
// Facts about Christabel come solely from constants/experience.ts (her CV).
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bentry",
    sector: "Electrical project engineering",
    generalContext: [
      "Electrical project engineering spans the journey from planning to handover: scheduling the work, checking that designs and equipment meet the specification, supervising installation, and proving the finished system before it goes live.",
      "Technical submittal reviews check that a contractor's proposed drawings, equipment and materials match the project specification before anything is bought or installed.",
      "Testing and commissioning verifies that installed systems are safe and work as designed before they are energised and handed over to the owner.",
    ],
    notes: [
      { text: "Project planning and monitoring", general: "Sequencing work, resources and milestones, then tracking progress against the plan." },
      { text: "Site supervision", general: "Overseeing installation on site for quality, safety and compliance with drawings and specifications." },
      { text: "Testing and commissioning", general: "Running checks and tests on installed equipment before it is energised and put into service." },
      { text: "Drawings and technical submittal review", general: "Checking contractor drawings and equipment submittals against the project specification." },
    ],
    diagram: "lifecycle",
    relatedCredentialIds: ["pm", "schneider", "iec61850", "fat"],
    glossaryTerms: ["commissioning", "submittal", "switchgear", "fat", "iec-61850"],
  },
  {
    id: "elecnor",
    sector: "Utility-scale solar PV",
    client: "Volta River Authority (VRA)",
    generalContext: [
      "Utility-scale solar plants convert sunlight into DC electricity in photovoltaic modules. Inverters convert it to AC, and transformers step the voltage up for export to the grid.",
      "Plant operation is usually monitored through a SCADA system that gathers data from inverters, meters and weather sensors, so faults and underperformance can be spotted and reported quickly.",
      "Operations and maintenance teams keep modules, inverters and electrical equipment available through inspections, cleaning, preventive maintenance and fault response. Drones are increasingly used to inspect and document large sites.",
    ],
    notes: [
      { text: "Maintenance work on the plant", general: "Preventive and corrective maintenance that keeps modules, inverters and electrical equipment available." },
      { text: "Operations on the SCADA system and daily reporting", general: "Monitoring plant status and alarms through SCADA and recording daily operational data." },
      { text: "Drone piloting", general: "Using drones for aerial inspection and documentation of large sites." },
      { text: "Audio-visual reporting", general: "Capturing photo and video records of site progress and condition." },
    ],
    diagram: "solar",
    relatedCredentialIds: ["drone-diploma", "rpas", "eemcp"],
    glossaryTerms: ["mwp", "pv", "inverter", "scada", "om", "pvsyst", "rpas", "vra"],
  },
  {
    id: "nedco",
    sector: "Power distribution",
    generalContext: [
      "Distribution companies take power from the transmission network and deliver it to homes and businesses at usable voltages.",
      "Distribution transformers step medium voltage (commonly 33 kV or 11 kV in Ghana) down to the low voltage used by consumers. Keeping them healthy through inspection, testing and servicing is central to reliable supply.",
      "Distribution work also includes estimating materials with bills of quantities and making sound cable terminations, which are common points of failure if done poorly.",
    ],
    notes: [
      { text: "Maintenance and servicing of distribution transformers", general: "Inspecting and servicing transformers on the distribution network to keep supply reliable." },
      { text: "Transformer installation and commissioning", general: "Mounting, connecting and testing new transformers before they are energised." },
      { text: "Preparing bills of quantities", general: "Itemising the materials and quantities a job needs, for planning and costing." },
      { text: "Cable termination", general: "Preparing and connecting cable ends so joints are electrically and mechanically sound." },
    ],
    diagram: "distribution",
    relatedCredentialIds: ["fat"],
    glossaryTerms: ["distribution-transformer", "boq", "cable-termination", "kv", "nedco", "commissioning"],
  },
];

export function caseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.id === id);
}
