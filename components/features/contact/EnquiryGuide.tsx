import { CheckCircle2 } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import { CATEGORIES, ENQUIRY_GUIDES } from "@/constants/contact";

/** What to include in each type of enquiry. */
export default function EnquiryGuide() {
  return (
    <div className="grid gap-3">
      {CATEGORIES.map((c, i) => (
        <Accordion key={c.value} title={c.label} defaultOpen={i === 0}>
          <ul className="grid gap-2">
            {ENQUIRY_GUIDES[c.value].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
}
