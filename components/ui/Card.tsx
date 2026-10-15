import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  as?: "div" | "article" | "section" | "li";
  className?: string;
  labelledBy?: string;
};

export default function Card({ children, as: Tag = "div", className, labelledBy }: Props) {
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-navy-900/5 transition-shadow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
