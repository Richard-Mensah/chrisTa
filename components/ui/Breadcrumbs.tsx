import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href: string };

type Props = {
  items: Crumb[];
};

/** Breadcrumb trail for sub-pages, styled for the dark page hero. The last item is the current page. */
export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ondark-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-ondark">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-ondark hover:underline">
                  {c.label}
                </Link>
              )}
              {!last && <ChevronRight className="size-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
