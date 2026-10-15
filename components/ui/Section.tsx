import { cn } from "@/lib/utils";
import Container from "./Container";

type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  id?: string;
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
};

/** Page band. Dark bands get the faint engineering grid behind them. */
export default function Section({ children, tone = "light", id, labelledBy, className, innerClassName }: Props) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative py-16 md:py-24",
        dark && "overflow-hidden bg-navy-950 text-ondark",
        className,
      )}
    >
      {dark && <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />}
      {dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl"
        />
      )}
      <Container className={cn("relative", innerClassName)}>{children}</Container>
    </section>
  );
}
