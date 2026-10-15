import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PAGES } from "@/constants/pages";
import type { PageDef, PageKey } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function pageByKey(key: PageKey): PageDef {
  return PAGES.find((p) => p.key === key) ?? PAGES[0];
}

export function pageKeyFromPath(pathname: string): PageKey | null {
  if (pathname === "/") return "home";
  const hit = PAGES.find((p) => p.href !== "/" && (pathname === p.href || pathname.startsWith(`${p.href}/`)));
  return hit ? hit.key : null;
}

/** Orthogonal busbar path between two grid-map nodes. */
export function busbarPath(a: PageDef, b: PageDef): string {
  if (a.x === b.x || a.y === b.y) return `M${a.x} ${a.y}L${b.x} ${b.y}`;
  const midX = (a.x + b.x) / 2;
  return `M${a.x} ${a.y}H${midX}V${b.y}H${b.x}`;
}

export function joinEmail(user: string, domain: string): string {
  return [user, domain].join("@");
}
