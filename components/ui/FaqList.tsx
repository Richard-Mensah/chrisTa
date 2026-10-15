import type { FaqItem } from "@/types";
import Accordion from "./Accordion";

type Props = {
  items: FaqItem[];
};

export default function FaqList({ items }: Props) {
  return (
    <div className="grid gap-3">
      {items.map((f, i) => (
        <Accordion key={f.question} title={f.question} defaultOpen={i === 0}>
          <p>{f.answer}</p>
        </Accordion>
      ))}
    </div>
  );
}
