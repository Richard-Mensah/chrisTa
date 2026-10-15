import ButtonLink from "@/components/ui/ButtonLink";

type Props = {
  url: string;
  title: string;
};

export default function ShareLinks({ url, title }: Props) {
  const u = encodeURIComponent(url);
  return (
    <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-6">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">Share</span>
      <ButtonLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} external variant="outline">
        LinkedIn
      </ButtonLink>
      <ButtonLink href={`https://x.com/intent/post?url=${u}&text=${encodeURIComponent(title)}`} external variant="outline">
        X
      </ButtonLink>
      <ButtonLink href="/insights" variant="outline">
        All insights
      </ButtonLink>
    </div>
  );
}
