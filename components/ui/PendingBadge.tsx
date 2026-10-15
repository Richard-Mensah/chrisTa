import { IS_DEV } from "@/constants/site";

type Props = {
  children?: React.ReactNode;
};

/** Development-only marker for content awaiting Christabel's confirmation. Renders nothing in production. */
export default function PendingBadge({ children = "Awaiting confirmation" }: Props) {
  if (!IS_DEV) return null;
  return (
    <span className="inline-flex items-center rounded border border-dashed border-pending px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-pending">
      {children}
    </span>
  );
}
