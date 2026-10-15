"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { useGrid } from "@/hooks/useGrid";
import type { ButtonVariant } from "@/lib/buttonStyles";

type Props = {
  href: string;
  signal: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

/** External button-link that also reports a grid signal when followed. */
export default function TrackedLink({ href, signal, children, variant = "ink" }: Props) {
  const { send } = useGrid();
  return (
    <ButtonLink href={href} external variant={variant} onClick={() => send(signal)}>
      {children}
    </ButtonLink>
  );
}
