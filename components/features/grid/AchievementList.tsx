"use client";

import { Zap } from "lucide-react";
import { useGrid } from "@/hooks/useGrid";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { cn } from "@/lib/utils";

export default function AchievementList() {
  const { achievements } = useGrid();

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-base font-semibold">
        Achievements · {achievements.length}/{ACHIEVEMENTS.length}
      </h3>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a) => {
          const got = achievements.includes(a.key);
          return (
            <li
              key={a.key}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3 transition-opacity",
                got ? "border-brand-teal/60 opacity-100" : "border-ondark-line opacity-50",
              )}
            >
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full",
                  got ? "bg-gradient-to-br from-brand-cyan to-brand-blue text-white" : "bg-navy-900 text-ondark-muted",
                )}
              >
                <Zap className="size-4" aria-hidden="true" />
              </span>
              <span>
                <b className="block text-sm">{a.name}</b>
                <span className="text-xs text-ondark-muted">{a.description}</span>
                <span className="sr-only">{got ? " (unlocked)" : " (locked)"}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
