import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import EmailReveal from "@/components/features/contact/EmailReveal";
import GridFooterControls from "@/components/features/grid/GridFooterControls";
import { PAGES } from "@/constants/pages";
import { SITE } from "@/constants/site";

const linkClass = "text-ondark-muted transition-colors hover:text-ondark hover:underline";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-ondark-muted">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-teal/70 to-transparent" />
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <span className="rounded-2xl bg-white p-2 shadow-lg">
              <Image src={SITE.logo} alt={`${SITE.formalName} logo`} width={88} height={88} className="size-20" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-ondark">{SITE.formalName}</h2>
              <p className="mt-1 font-display text-sm italic text-gradient-brand">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm">
            {SITE.role}, {SITE.location}. Power systems, solar energy, project engineering and mentorship.
          </p>
          {SITE.email.show && (
            <div className="mt-4 text-ondark">
              <EmailReveal />
            </div>
          )}
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <h2 className="mb-3 font-semibold text-ondark">Pages</h2>
          <ul className="grid grid-cols-2 gap-2">
            {PAGES.map((p) => (
              <li key={p.key}>
                <Link href={p.href} className={linkClass}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="mb-3 font-semibold text-ondark">Elsewhere</h2>
          <ul className="grid gap-2">
            <li>
              <a href={SITE.ega.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {SITE.ega.name} ↗
              </a>
            </li>
            {SITE.linkedin && (
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer me" className={linkClass}>
                  LinkedIn ↗
                </a>
              </li>
            )}
            <li>
              <Link href="/contact#privacy" className={linkClass}>
                Privacy notice
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-wrap justify-between gap-4 border-t border-ondark-line py-6 text-sm">
        <span>
          © {new Date().getFullYear()} {SITE.name}. A personal website; it does not represent any employer or EGA
          Mentorship International.
        </span>
        <GridFooterControls />
      </Container>
    </footer>
  );
}
