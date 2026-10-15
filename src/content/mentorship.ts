export const mentorship = {
  quote:
    "Engineering progress depends not only on technical knowledge, but also on access to guidance, professional networks, and opportunities to grow. Through my mentorship engagement with EGA Mentorship International, I support the development of emerging talent and encourage young people to pursue meaningful professional and leadership pathways.",
  bio: "Christabel led the GhIE Women in Engineering student chapter at the University of Energy and Natural Resources (2019–2020) and served as Youth Minister for Energy and Petroleum with the United Nations Youth Association of Ghana (2020–2024). She now brings her experience in distribution, solar operations and project engineering to young people preparing for the sector.",
  areas: [
    { icon: "bolt", text: "Electrical and electronics engineering career development" },
    { icon: "sun", text: "Renewable energy and power-sector career pathways" },
    { icon: "home", text: "Professional development for students and early-career engineers" },
    { icon: "person", text: "Women in Engineering and leadership development" },
    { icon: "network", text: "Career readiness and professional networking" },
    { icon: "search", text: "Finding relevant learning and development opportunities" },
  ],
  audience: [
    "Electrical and electronics engineering students",
    "Early-career engineers in power and renewable energy",
    "Young women considering or starting engineering careers",
    "Young people exploring energy-sector pathways",
  ],
  /** Fill only after confirmation: e.g. { role: "Mentor", programme: "…" } */
  egaRole: null as null | { role: string; programme?: string },
} as const;
