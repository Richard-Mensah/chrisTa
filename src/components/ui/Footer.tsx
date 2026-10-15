import Link from "next/link";
import { NAV_ORDER, pageByKey } from "@/content/pages";
import { site } from "@/content/site";
import { EmailReveal } from "./EmailReveal";
import { FooterGrid } from "./FooterGrid";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap top">
        <div>
          <h2>{site.formalName}</h2>
          <p>
            {site.role}, {site.location}. Power systems, solar energy, project engineering and mentorship.
          </p>
          {site.email.show && (
            <p style={{ marginTop: 14 }}>
              <EmailReveal />
            </p>
          )}
        </div>
        <div>
          <h2>Pages</h2>
          <ul style={{ gridTemplateColumns: "1fr 1fr" }}>
            {NAV_ORDER.map((k) => {
              const p = pageByKey(k);
              return (
                <li key={k}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Elsewhere</h2>
          <ul>
            <li>
              <a href={site.ega.url} target="_blank" rel="noopener noreferrer">
                {site.ega.name} ↗
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer me">
                  LinkedIn ↗
                </a>
              </li>
            )}
            <li>
              <Link href="/contact#privacy">Privacy notice</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. This is a personal website and does not represent any employer
          or EGA Mentorship International.
        </span>
        <FooterGrid />
      </div>
    </footer>
  );
}
