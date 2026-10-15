import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

/** Native <details> disclosure: accessible and works without JavaScript. */
export default function Accordion({ title, children, defaultOpen = false, className }: Props) {
  return (
    <details
      open={defaultOpen}
      className={cn("group rounded-2xl border border-line bg-surface shadow-sm open:shadow-md", className)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="px-5 pb-5 leading-relaxed text-muted">{children}</div>
    </details>
  );
}
