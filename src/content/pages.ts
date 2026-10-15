/** Every page is a "substation" on the grid map. x/y are positions in the map's 680×360 viewBox. */
export const PAGES = [
  { key: "home", href: "/", label: "Home", num: "01", x: 70, y: 180 },
  { key: "about", href: "/about", label: "About", num: "02", x: 200, y: 70 },
  { key: "expertise", href: "/expertise", label: "Expertise", num: "03", x: 200, y: 290 },
  { key: "experience", href: "/experience", label: "Projects", num: "04", x: 350, y: 70 },
  { key: "credentials", href: "/credentials", label: "Credentials", num: "05", x: 350, y: 290 },
  { key: "mentorship", href: "/mentorship", label: "Mentorship", num: "06", x: 490, y: 70 },
  { key: "leadership", href: "/leadership", label: "Leadership", num: "07", x: 490, y: 290 },
  { key: "contact", href: "/contact", label: "Contact", num: "09", x: 615, y: 70 },
  { key: "insights", href: "/insights", label: "Insights", num: "08", x: 615, y: 290 },
] as const;

export type PageKey = (typeof PAGES)[number]["key"];

export const NAV_ORDER: PageKey[] = [
  "home",
  "about",
  "expertise",
  "experience",
  "credentials",
  "mentorship",
  "leadership",
  "insights",
  "contact",
];

export const EDGES: [PageKey, PageKey][] = [
  ["home", "about"],
  ["home", "expertise"],
  ["about", "experience"],
  ["expertise", "credentials"],
  ["experience", "credentials"],
  ["experience", "mentorship"],
  ["credentials", "leadership"],
  ["mentorship", "contact"],
  ["leadership", "insights"],
  ["contact", "insights"],
];

export function pageByKey(key: PageKey) {
  return PAGES.find((p) => p.key === key)!;
}

export function pageKeyFromPath(pathname: string): PageKey | null {
  if (pathname === "/") return "home";
  const hit = PAGES.find((p) => p.href !== "/" && (pathname === p.href || pathname.startsWith(p.href + "/")));
  return hit ? hit.key : null;
}
