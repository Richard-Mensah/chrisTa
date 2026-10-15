import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { EGA_ROLE, MENTEE_AUDIENCE, MENTOR_BIO } from "@/constants/mentorship";
import { SITE } from "@/constants/site";

export default function MentorProfile() {
  return (
    <div>
      <SectionHeading eyebrow="Mentor profile" title="From student leader to mentor" lede={MENTOR_BIO} />
      {EGA_ROLE && (
        <p className="mt-4 text-lg text-muted">
          Role with {SITE.ega.name}: {EGA_ROLE.role}
          {EGA_ROLE.programme ? `, ${EGA_ROLE.programme}` : ""}.
        </p>
      )}
      <h3 className="mt-10 text-xl font-semibold">Who it&apos;s for</h3>
      <ol className="mt-4 grid gap-3">
        {MENTEE_AUDIENCE.map((a, i) => (
          <li key={a} className="flex items-baseline gap-4 border-b border-line pb-3">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            {a}
          </li>
        ))}
      </ol>
      <Photo id="trainingSession" sizes="(max-width: 1024px) 100vw, 540px" className="mt-8 aspect-[4/3]" />
    </div>
  );
}
