import { cn } from "@/lib/utils";

type Props = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: (a11y: { id: string; "aria-invalid"?: true; "aria-describedby"?: string; className: string }) => React.ReactNode;
};

const CONTROL =
  "w-full rounded-xl border bg-surface px-4 py-3 text-ink shadow-sm transition-colors placeholder:text-muted focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-brand-teal";

/** Label, control, hint and error wired together for screen readers. */
export default function FormField({ id, label, optional, error, hint, children }: Props) {
  const describedBy = [error ? `${id}-err` : null, hint ? `${id}-hint` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        className: cn(CONTROL, error ? "border-danger" : "border-line"),
      })}
      {hint && (
        <span id={`${id}-hint`} className="text-sm text-muted">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${id}-err`} className="text-sm text-danger">
          {error}
        </span>
      )}
    </div>
  );
}
