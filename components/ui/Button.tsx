import { buttonClasses, type ButtonVariant } from "@/lib/buttonStyles";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
};

export default function Button({ children, onClick, type = "button", variant = "primary", disabled, className }: Props) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses(variant, className)}>
      {children}
    </button>
  );
}
