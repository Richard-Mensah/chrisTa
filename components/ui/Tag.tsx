import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

export default function Tag({ children, onDark = false, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm",
        onDark ? "border-ondark-line bg-white/5 text-ondark" : "border-line bg-canvas text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
