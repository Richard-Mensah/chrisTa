import Link from "next/link";
import { buttonClasses, type ButtonVariant } from "@/lib/buttonStyles";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function ButtonLink({ href, children, variant = "primary", external = false, className, onClick }: Props) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses(variant, className)} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClasses(variant, className)} onClick={onClick}>
      {children}
    </Link>
  );
}
