import { Quote } from "lucide-react";
import { MENTOR_QUOTE } from "@/constants/mentorship";
import { SITE } from "@/constants/site";

export default function MentorQuote() {
  return (
    <figure className="mt-8 max-w-3xl rounded-3xl border border-ondark-line bg-white/5 p-6 backdrop-blur md:p-8">
      <Quote className="size-8 text-brand-cyan" aria-hidden="true" />
      <blockquote className="mt-4 font-display text-xl leading-relaxed text-ondark md:text-2xl">
        “{MENTOR_QUOTE}”
      </blockquote>
      <figcaption className="mt-5 font-mono text-xs uppercase tracking-widest text-ondark-muted">{SITE.formalName}</figcaption>
    </figure>
  );
}
