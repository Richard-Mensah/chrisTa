import { cn } from "@/lib/utils";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Frame for illustrative engineering diagrams, always captioned as not being project drawings. */
export default function DiagramFigure({ title, children, className }: Props) {
  return (
    <figure className={cn("rounded-2xl border border-line bg-surface p-4 shadow-sm md:p-6", className)}>
      <div className="overflow-x-auto">{children}</div>
      <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm">
        <span className="font-semibold">{title}</span>
        <span className="font-mono text-xs uppercase tracking-wider text-muted">Illustrative diagram · not a project drawing</span>
      </figcaption>
    </figure>
  );
}
