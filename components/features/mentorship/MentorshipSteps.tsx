import { SITE } from "@/constants/site";

const STEPS = [
  {
    title: `Explore ${SITE.ega.name}`,
    text: "Read about EGA's current programmes, who they are for and how they work on EGA's official website.",
  },
  {
    title: "Apply through EGA",
    text: "Mentorship availability, eligibility and matching follow EGA's own programme structure and process.",
  },
  {
    title: "Ask Christabel a question",
    text: "Not sure where to start? Send a short message through the contact form and choose “Mentorship”.",
  },
];

/** How mentorship works – deliberately defers programme details to EGA. */
export default function MentorshipSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {STEPS.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <span className="font-display text-5xl font-semibold text-gradient-brand">{i + 1}</span>
          <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
