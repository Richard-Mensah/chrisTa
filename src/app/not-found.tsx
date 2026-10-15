import Link from "next/link";
import { NAV_ORDER, pageByKey } from "@/content/pages";
import { OpenMapButton } from "@/components/grid/OpenMapButton";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="dark phero">
      <div className="wrap fault">
        <p className="eyebrow mono code">Fault detected · 404</p>
        <h1>This circuit doesn&apos;t exist</h1>
        <p className="lede">
          The page you were looking for has been moved or never existed. Pick a live substation to get back on the
          grid.
        </p>
        <div className="ctas">
          <Link className="btn btn-volt" href="/">
            Back to home
          </Link>
          <OpenMapButton />
        </div>
        <nav aria-label="All pages" className="taglist">
          {NAV_ORDER.map((k) => {
            const p = pageByKey(k);
            return (
              <Link key={k} href={p.href} style={{ textDecoration: "none" }}>
                <span>{p.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
