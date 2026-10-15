import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

export default function Eyebrow({ children, onDark = false, className }: Props) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest",
        onDark ? "text-brand-cyan" : "text-accent",
        className,
      )}
    >
      <span aria-hidden="true" className="h-0.5 w-6 shrink-0 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue" />
      {children}
    </p>
  );
}
