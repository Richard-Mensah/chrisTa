import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  className?: string;
};

export default function SectionHeading({ id, eyebrow, title, lede, onDark = false, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", onDark ? "text-ondark-muted" : "text-muted")}>{lede}</p>
      )}
    </div>
  );
}
