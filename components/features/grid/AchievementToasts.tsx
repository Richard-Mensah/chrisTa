"use client";

import { X, Zap } from "lucide-react";
import { achievementByKey } from "@/lib/achievements";
import type { Toast } from "@/types";

type Props = {
  toasts: Toast[];
  onDismiss: (id: number) => void;
};

export default function AchievementToasts({ toasts, onDismiss }: Props) {
  return (
    <div aria-live="polite" className="fixed bottom-4 right-4 z-50 grid w-[min(22rem,calc(100vw-2rem))] gap-3">
      {toasts.map((t) => {
        const a = achievementByKey(t.key);
        if (!a) return null;
        return (
          <div
            key={t.id}
            role="status"
            className="flex items-start gap-3 rounded-2xl border border-brand-teal/60 bg-navy-950/95 p-4 text-ondark shadow-2xl shadow-navy-950/40 backdrop-blur motion-safe:animate-pop"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
              <Zap className="size-4" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <b className="block text-sm">Achievement · {a.name}</b>
              <span className="text-sm text-ondark-muted">{a.description}</span>
            </span>
            <button
              type="button"
              onClick={() => onDismiss(t.id)}
              aria-label={`Dismiss ${a.name}`}
              className="rounded-full p-1 text-ondark-muted transition-colors hover:text-ondark"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
