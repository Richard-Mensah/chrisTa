"use client";

import { useEffect, useId, useState } from "react";
import type { Role } from "@/content/experience";
import { useGrid } from "@/components/grid/GridProvider";

/** A role on the feeder-line timeline. The breaker-style switch opens its full case file. */
export function ExperienceCase({
  role,
  photo,
  pending,
}: {
  role: Role;
  photo?: React.ReactNode;
  pending?: React.ReactNode;
}) {
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
    const next = !open;
    setOpen(next);
    if (next) send(`case:${role.id}`);
  };

  return (
    <article className={`case${open ? " open" : ""}`} id={role.id}>
      <span className="node" aria-hidden="true" />
      <div className="case-card">
        <div className="case-head">
          <div>
            <p className="meta mono">
              {role.feeder} · <time dateTime={role.startISO}>{role.period}</time> · {role.location}
            </p>
            <h2>{role.employer}</h2>
            <p className="role">{role.title}</p>
            <p className="ctx">{role.context}</p>
          </div>
          <button type="button" className="toggle" aria-expanded={open} aria-controls={bodyId} onClick={toggle}>
            <span className="sw" aria-hidden="true" />
            {open ? "Close case file" : "Open case file"}
          </button>
        </div>
        <div className="case-body" id={bodyId} hidden={!open}>
          <div className="info">
            <div>
              <h3>Responsibilities</h3>
              <ul>
                {role.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            {role.tools.length > 0 && (
              <div>
                <h3>Tools &amp; systems</h3>
                <div className="pills">
                  {role.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            {role.outcomes.length > 0 ? (
              <div>
                <h3>Verified outcomes</h3>
                <ul>
                  {role.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            ) : (
              pending
            )}
          </div>
          {photo}
        </div>
      </div>
    </article>
  );
}
