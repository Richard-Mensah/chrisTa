"use client";

import { useEffect, useId, useState } from "react";
import { useGrid } from "@/hooks/useGrid";
import { cn } from "@/lib/utils";
import type { Role } from "@/types";
import CaseFileDetails from "./CaseFileDetails";

type Props = {
  role: Role;
};

/** A role on the feeder-line timeline. The breaker-style switch opens its full case file. */
export default function CaseFile({ role }: Props) {
  const [open, setOpen] = useState(false);
  const { send } = useGrid();
  const bodyId = useId();

  // Deep link: /experience#elecnor opens that case file.
  useEffect(() => {
    const check = () => {
      if (window.location.hash === `#${role.id}`) {
        setOpen(true);
        send(`case:${role.id}`);
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [role.id, send]);

  const toggle = () => {
    setOpen((o) => !o);
    if (!open) send(`case:${role.id}`);
  };

  return (
    <article id={role.id} className="relative scroll-mt-24 pl-10 sm:pl-14">
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-6 grid size-6 place-items-center rounded-full border-2 bg-canvas transition-colors duration-300 sm:left-2",
          open ? "border-brand-teal" : "border-muted/50",
        )}
      >
        <span
          className={cn(
            "size-2 rounded-full transition-all duration-300",
            open ? "bg-brand-cyan shadow-md shadow-brand-cyan" : "bg-muted/50",
          )}
        />
      </span>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <div className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {role.feeder} · <time dateTime={role.startISO}>{role.period}</time> · {role.location}
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{role.employer}</h2>
            <p className="mt-1 font-medium">{role.title}</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.context}</p>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls={bodyId}
            className="inline-flex items-center gap-3 justify-self-start rounded-full border border-line bg-canvas px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
          >
            <span
              aria-hidden="true"
              className={cn(
                "relative h-4 w-8 rounded-full transition-colors",
                open ? "bg-gradient-to-r from-brand-teal to-brand-blue" : "bg-muted/40",
              )}
            >
              <span
                className={cn(
                  "absolute left-0.5 top-0.5 size-3 rounded-full bg-white shadow transition-transform",
                  open && "translate-x-4",
                )}
              />
            </span>
            {open ? "Close case file" : "Open case file"}
          </button>
        </div>
        <CaseFileDetails role={role} id={bodyId} hidden={!open} />
      </div>
    </article>
  );
}
