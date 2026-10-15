import { Megaphone, Sparkles, Users, Zap, type LucideIcon } from "lucide-react";
import { LEADERSHIP_THEMES } from "@/constants/leadership";

const ICONS: LucideIcon[] = [Zap, Sparkles, Users, Megaphone];

export default function LeadershipThemes() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LEADERSHIP_THEMES.map((t, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div key={t.title} className="rounded-2xl border border-ondark-line bg-white/5 p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ondark-muted">{t.text}</p>
          </div>
        );
      })}
    </div>
  );
}
