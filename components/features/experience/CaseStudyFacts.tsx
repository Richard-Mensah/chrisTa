import PendingBadge from "@/components/ui/PendingBadge";
import type { CaseStudy, Role } from "@/types";

type Props = {
  role: Role;
  study: CaseStudy;
};

export default function CaseStudyFacts({ role, study }: Props) {
  const facts = [
    { label: "Role", value: role.title },
    { label: "Period", value: role.period },
    { label: "Location", value: role.location },
    { label: "Sector", value: study.sector },
    ...(study.client ? [{ label: "Client", value: study.client }] : []),
  ];
  return (
    <aside aria-label="Key facts" className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">Key facts</h2>
      <dl className="grid gap-4">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-xs uppercase tracking-wider text-muted">{f.label}</dt>
            <dd className="mt-0.5 font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
      {role.status === "needs-confirmation" && (
        <div className="mt-4">
          <PendingBadge>Confirm current status</PendingBadge>
        </div>
      )}
    </aside>
  );
}
