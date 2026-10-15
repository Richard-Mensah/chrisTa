import type { FocusArea, TimelineEntry } from "@/types";

export const HERO_INTRO =
  "Electrical engineer working across project supervision, electrical maintenance, solar power plant operations, testing and commissioning, and technical reporting. Alongside that work, she mentors young people to build the skills, confidence and networks they need to contribute to the engineering sector.";

export const FOCUS_AREAS: FocusArea[] = [
  {
    icon: "power",
    title: "Power systems",
    text: "Distribution transformer servicing, installation and commissioning; cable termination; electrical maintenance.",
    evidence: "NEDCo",
  },
  {
    icon: "solar",
    title: "Solar energy",
    text: "PV plant operations and maintenance, SCADA monitoring and daily reporting, PVsyst.",
    evidence: "ELECNOR",
  },
  {
    icon: "project",
    title: "Project engineering",
    text: "Planning and monitoring, site supervision, drawing and submittal review, bills of quantities.",
    evidence: "Bentry · NEDCo",
  },
  {
    icon: "testing",
    title: "Testing & commissioning",
    text: "Commissioning on site, plus factory acceptance testing and IEC 61850 training.",
    evidence: "Bentry · NEDCo",
  },
];

export const BIOGRAPHY: string[] = [
  "Christabel Fremah Owusu is an Electrical and Electronics Engineer based in Ghana. She earned her BSc in Electrical and Electronics Engineering from the University of Energy and Natural Resources (UENR), Sunyani, in 2020.",
  "Her career began on the distribution network. During national service with the Northern Electricity Distribution Company (NEDCo) in Techiman, she maintained and serviced distribution transformers, took part in transformer installation and commissioning, terminated cables and prepared bills of quantities.",
  "From January 2022 to May 2023 she worked with ELECNOR S.A. as a Junior Engineer and Operations & Maintenance Engineer on the construction of 13 MWp and 15 MWp solar plants for the Volta River Authority in Ghana's Upper West Region. Her work covered plant maintenance, SCADA operations and daily reporting, and drone piloting for audio-visual reporting.",
  "Since October 2023 she has worked as an Electrical Engineer and Project Engineer with Bentry Company Limited. Her responsibilities span project planning and monitoring, site supervision, testing and commissioning, and the review of drawings and technical submittals.",
  "Her professional development includes training on IEC 61850 (Tiers I to III) and cyber security in Phoenix, USA; a factory acceptance test for power transformers in Jiangshan, China; and operation and maintenance training on Schneider Electric GHA and GMAe switchgear in Regensburg, Germany. She is a Professional Engineer in the Electrical Division of the Ghana Institution of Engineering (GhIE).",
  "Leadership has run alongside the engineering. She was Student President of GhIE Women in Engineering at UENR and served as Youth Minister for Energy and Petroleum with the United Nations Youth Association of Ghana from 2020 to 2024. Today she is a mentor with EGA Mentorship International, supporting young people as they prepare for careers in engineering and energy.",
  "She works in English, has beginner French, and speaks Asante Twi.",
];

export const TIMELINE: TimelineEntry[] = [
  { when: "2016 – 2020", title: "BSc Electrical and Electronics Engineering", text: "University of Energy and Natural Resources (UENR), Sunyani." },
  { when: "2016 – 2020", title: "Class Representative", text: "BSc Electrical/Electronic Engineering class, UENR." },
  { when: "2018 – 2019", title: "Student leadership", text: "Local NUGS Public Relations Officer, USAG Senate Observer, and Media/Publicity Head of the A.G.C.M UENR chapter." },
  { when: "2019 – 2020", title: "Student President, GhIE Women in Engineering", text: "UENR chapter of the Ghana Institution of Engineering's Women in Engineering network." },
  { when: "08/2020 – 08/2021", title: "NEDCo, Techiman", text: "Electrical Maintenance Personnel (National Service): distribution transformers, BoQ, cable termination.", career: true },
  { when: "2020 – 2024", title: "Youth Minister, Energy and Petroleum", text: "United Nations Youth Association of Ghana." },
  { when: "01/2022 – 05/2023", title: "ELECNOR S.A., Upper West Region", text: "Junior Engineer / O&M Engineer on the 13 MWp and 15 MWp solar plants for VRA.", career: true },
  { when: "10/2023 – present", title: "Bentry Company Limited", text: "Electrical Engineer / Project Engineer: planning, supervision, testing and commissioning.", career: true },
];

export const INSIGHT_TOPICS = [
  "Renewable energy & solar power",
  "Power systems & electrical safety",
  "Engineering project delivery",
  "Energy efficiency",
  "Career development for engineers",
  "Women in Engineering",
  "Mentorship & youth development",
];
