export const SITE = {
  name: "Christabel Fremah Owusu",
  formalName: "Ing. Christabel Fremah Owusu, P.E.-GhIE",
  shortName: "Christabel F. Owusu",
  postNominal: "Ing. · P.E.-GhIE",
  role: "Electrical & Electronics Engineer",
  location: "Ghana",
  tagline: "Engineering for a Sustainable Future",
  description:
    "Ing. Christabel Fremah Owusu is a Ghanaian Electrical and Electronics Engineer working in power systems, solar plant operations, testing and commissioning, and engineering project delivery, and a mentor with EGA Mentorship International.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  logo: "/images/logo.png",
  /** Assembled in the browser so the plain address is not in the HTML. */
  email: { user: "cfremah30", domain: "gmail.com", show: true },
  /** Add once supplied and verified, e.g. "https://www.linkedin.com/in/…". */
  linkedin: null as string | null,
  ega: {
    name: "EGA Mentorship International",
    url: "https://www.egamentorship.org/",
  },
} as const;

export const IS_DEV = process.env.NODE_ENV !== "production";

export const KEYWORDS = [
  "Christabel Fremah Owusu",
  "electrical engineer Ghana",
  "power systems",
  "solar PV operations and maintenance",
  "testing and commissioning",
  "engineering project management",
  "Women in Engineering",
  "EGA Mentorship International mentor",
];
