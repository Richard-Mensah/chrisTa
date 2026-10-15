import type { QuizQuestion } from "@/types";

export const QUIZ_PASS_MARK = 4;

export const GRID_QUIZ: QuizQuestion[] = [
  {
    id: "mwp",
    question: "On a solar plant, what does “MWp” describe?",
    options: ["Average monthly output", "Peak rated DC capacity of the panels", "Maximum grid voltage", "Megawatts per panel"],
    answer: 1,
    explanation: "Megawatt-peak is the panels' rated DC output under standard test conditions, which is how solar plants are sized.",
  },
  {
    id: "scada",
    question: "What does SCADA stand for?",
    options: [
      "Supervisory Control and Data Acquisition",
      "Solar Cell and Distribution Array",
      "Substation Circuit and Device Automation",
      "System Control and Demand Analysis",
    ],
    answer: 0,
    explanation: "SCADA systems gather real-time data from equipment so operators can monitor and control a plant or network remotely.",
  },
  {
    id: "iec61850",
    question: "IEC 61850 is best known as a standard for…",
    options: ["Solar panel efficiency", "Cable colour codes", "Communication in substation automation", "Transformer oil quality"],
    answer: 2,
    explanation: "IEC 61850 defines how protection and control devices in substations model data and communicate, including GOOSE messages.",
  },
  {
    id: "fat",
    question: "Where does a factory acceptance test (FAT) take place?",
    options: ["On site, after installation", "At the manufacturer, before shipping", "In a university lab", "At the grid control centre"],
    answer: 1,
    explanation: "A FAT proves equipment meets its specification at the factory, so problems are fixed before it reaches site.",
  },
  {
    id: "transformer",
    question: "What does a distribution transformer do?",
    options: [
      "Stores energy for the night",
      "Converts DC to AC",
      "Steps medium voltage down to low voltage for consumers",
      "Measures customer usage",
    ],
    answer: 2,
    explanation: "Distribution transformers bring network voltage down to the level used by homes and businesses.",
  },
  {
    id: "boq",
    question: "A bill of quantities (BoQ) is…",
    options: ["An electricity bill", "An itemised list of materials and work for a job", "A safety permit", "A test certificate"],
    answer: 1,
    explanation: "A BoQ lists what a job needs so it can be estimated, tendered and procured accurately.",
  },
];
