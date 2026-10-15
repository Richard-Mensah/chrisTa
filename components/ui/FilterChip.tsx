import { cn } from "@/lib/utils";

type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function FilterChip({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-gradient-to-r from-brand-teal to-brand-blue text-white shadow-sm"
          : "border-line bg-surface text-ink hover:border-accent",
      )}
    >
      {label}
    </button>
  );
}
