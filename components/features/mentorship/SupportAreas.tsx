import { House, Network, Search, Sun, UserRound, Zap, type LucideIcon } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { SUPPORT_AREAS } from "@/constants/mentorship";
import type { SupportIconKey } from "@/types";

const ICONS: Record<SupportIconKey, LucideIcon> = {
  bolt: Zap,
  sun: Sun,
  home: House,
  person: UserRound,
  network: Network,
  search: Search,
};

export default function SupportAreas() {
  return (
    <div>
      <Eyebrow>Areas of support</Eyebrow>
      <ul className="grid gap-3 sm:grid-cols-2">
        {SUPPORT_AREAS.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <li
              key={a.text}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-blue/15 text-accent">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="pt-1 text-sm leading-relaxed">{a.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
