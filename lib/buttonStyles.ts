import { cn } from "./utils";

export type ButtonVariant = "primary" | "ghost" | "outline" | "ink";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:translate-y-px disabled:cursor-progress disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-teal to-brand-blue text-white shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:brightness-110",
  ghost: "border border-ondark-line text-ondark hover:border-brand-cyan hover:bg-white/5",
  outline: "border border-line bg-surface text-ink hover:border-accent hover:text-accent",
  ink: "bg-ink text-canvas hover:opacity-90",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string): string {
  return cn(BASE, VARIANTS[variant], className);
}
