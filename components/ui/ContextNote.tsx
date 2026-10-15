import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

/** Marks general engineering context so readers never mistake it for a claim about specific project work. */
export default function ContextNote({ children, title = "General context", className }: Props) {
  return (
    <aside className={cn("rounded-2xl border border-dashed border-line bg-canvas p-5", className)}>
      <p className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted">
        <BookOpen className="size-4" aria-hidden="true" />
        {title}
        <span className="basis-full normal-case tracking-normal sm:basis-auto">· explains the field, not project specifics</span>
      </p>
      <div className="grid gap-3 leading-relaxed text-muted">{children}</div>
    </aside>
  );
}
