import type { GlossaryTerm } from "@/types";

export const GLOSSARY: GlossaryTerm[] = [
  { slug: "ac-dc", term: "AC / DC", definition: "Alternating current reverses direction many times a second and is used on power grids. Direct current flows one way and is produced by solar panels and batteries." },
  { slug: "boq", term: "Bill of quantities (BoQ)", definition: "An itemised list of the materials, parts and labour a job requires, used for estimating, tendering and procurement." },
  { slug: "cable-termination", term: "Cable termination", definition: "Preparing the end of a power cable and connecting it to equipment or another cable so the joint is electrically sound, insulated and sealed." },
  { slug: "commissioning", term: "Commissioning", definition: "Testing installed systems and putting them into service, confirming they are safe and perform as designed." },
  { slug: "distribution-transformer", term: "Distribution transformer", definition: "A transformer that steps medium voltage down to the low voltage used by homes and businesses." },
  { slug: "fat", term: "Factory acceptance test (FAT)", definition: "Tests carried out at the manufacturer, often witnessed by the client, to confirm equipment meets its specification before it is shipped." },
  { slug: "ghie", term: "Ghana Institution of Engineering (GhIE)", definition: "The professional body for engineers in Ghana, organised into divisions such as the Electrical Division." },
  { slug: "goose", term: "GOOSE", definition: "Generic Object Oriented Substation Event: a fast IEC 61850 message that shares protection and control signals between devices over a network." },
  { slug: "iec-61850", term: "IEC 61850", definition: "An international standard for communication networks and systems in power utility automation, widely used in digital substations." },
  { slug: "ied", term: "Intelligent electronic device (IED)", definition: "A microprocessor-based protection, control or monitoring device in a substation, such as a protection relay." },
  { slug: "inverter", term: "Inverter", definition: "Equipment that converts the DC electricity from solar panels into AC electricity for the grid." },
  { slug: "kv", term: "Kilovolt (kV)", definition: "One thousand volts. Transmission and distribution networks are described by their voltage in kilovolts." },
  { slug: "mwp", term: "Megawatt-peak (MWp)", definition: "The rated DC output of a solar array under standard test conditions. A 15 MWp plant has 15 megawatts of peak panel capacity." },
  { slug: "nedco", term: "NEDCo", definition: "Northern Electricity Distribution Company: the distribution company serving the northern part of Ghana, a subsidiary of the Volta River Authority." },
  { slug: "om", term: "Operations and maintenance (O&M)", definition: "The day-to-day running, monitoring and upkeep of a plant after it has been built." },
  { slug: "pv", term: "Photovoltaic (PV)", definition: "Technology that converts sunlight directly into electricity using semiconductor solar cells." },
  { slug: "pvsyst", term: "PVsyst", definition: "Software used to design and simulate solar PV systems and estimate their energy yield." },
  { slug: "rpas", term: "Remotely piloted aircraft system (RPAS)", definition: "A drone together with its remote pilot station and the link that controls it." },
  { slug: "scada", term: "SCADA", definition: "Supervisory Control and Data Acquisition: systems that collect real-time data from equipment and let operators monitor and control it remotely." },
  { slug: "submittal", term: "Technical submittal", definition: "Documents a contractor submits for approval, such as drawings, datasheets and samples, before equipment is bought or installed." },
  { slug: "switchgear", term: "Switchgear", definition: "Switches, circuit breakers and protection devices that control, protect and isolate parts of a power network. Gas-insulated switchgear uses an insulating gas to stay compact." },
  { slug: "vra", term: "Volta River Authority (VRA)", definition: "Ghana's state-owned power generation company." },
  { slug: "wine", term: "Women in Engineering (WiNE)", definition: "GhIE's network supporting women engineers and engineering students." },
];

export function glossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((g) => g.slug === slug);
}
