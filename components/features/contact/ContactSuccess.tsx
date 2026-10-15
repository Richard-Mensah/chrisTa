import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

type Props = {
  onReset: () => void;
};

export default function ContactSuccess({ onReset }: Props) {
  return (
    <div role="status" className="rounded-3xl border border-brand-teal/50 bg-brand-teal/10 p-8">
      <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
      <h2 className="mt-4 text-2xl font-semibold">Message sent</h2>
      <p className="mt-2 text-muted">Thank you for getting in touch. Christabel will reply by email.</p>
      <Button variant="outline" onClick={onReset} className="mt-6">
        Send another message
      </Button>
    </div>
  );
}
