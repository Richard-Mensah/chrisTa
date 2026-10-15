import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  priority?: boolean;
};

/** The CF monogram from the logo, on a white tile so it reads on any background. */
export default function BrandMark({ className, priority }: Props) {
  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5", className)}>
      <Image src="/images/logo-mark.png" alt="" width={68} height={43} priority={priority} className="h-auto w-full" />
    </span>
  );
}
