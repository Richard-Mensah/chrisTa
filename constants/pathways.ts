import type { CareerPathway } from "@/types";

// General career guidance. Example links point to Christabel's documented roles and training.
export const PATHWAYS: CareerPathway[] = [
  {
    id: "distribution",
    title: "Power distribution",
    involves:
      "Keeping the local network reliable: maintaining transformers and lines, connecting new customers, responding to faults and planning upgrades.",
    skills: ["Transformer and switchgear fundamentals", "Electrical safety and switching procedures", "Bills of quantities and estimating", "Cable jointing and termination"],
    exampleRole: "nedco",
  },
  {
    id: "solar",
    title: "Solar operations & maintenance",
    involves:
      "Running solar plants after construction: monitoring performance through SCADA, maintaining modules and inverters, and reporting on availability and faults.",
    skills: ["PV system fundamentals", "SCADA and data monitoring", "Preventive maintenance planning", "Clear daily reporting"],
    exampleRole: "elecnor",
  },
  {
    id: "project",
    title: "Project & site engineering",
    involves:
      "Delivering electrical projects from plan to handover: scheduling, reviewing drawings and submittals, supervising installation, and testing and commissioning.",
    skills: ["Project planning and monitoring", "Reading and reviewing drawings", "Site safety and quality", "Testing and commissioning"],
    exampleRole: "bentry",
  },
  {
    id: "automation",
    title: "Protection & substation automation",
    involves:
      "Designing, testing and maintaining the protection relays and control systems that keep the network safe, increasingly over IEC 61850 networks.",
    skills: ["Protection principles", "IEC 61850 and substation communication", "Testing intelligent electronic devices", "Cyber security basics"],
    exampleCredential: "iec61850",
  },
  {
    id: "efficiency",
    title: "Energy efficiency",
    involves:
      "Helping organisations use less energy for the same output through audits, efficient equipment and measuring the savings.",
    skills: ["Energy auditing", "Measurement and verification", "Lighting, motor and building-services efficiency", "Communicating savings clearly"],
    exampleCredential: "eemcp",
  },
];

export const GETTING_STARTED = [
  { title: "Build strong fundamentals", text: "Circuits, machines, power systems and electronics are the base every specialism builds on." },
  { title: "Join professional networks early", text: "Student chapters of professional bodies, such as GhIE and its Women in Engineering network, connect you with practising engineers." },
  { title: "Get hands-on exposure", text: "National service, internships and site visits show how the theory is applied and where your interests lie." },
  { title: "Find a mentor", text: "Programmes such as EGA Mentorship International connect young people with mentors, skills and opportunities." },
];
