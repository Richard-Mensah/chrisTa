import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  source: string;
};

/** Renders an MDX article with Tailwind-styled elements (no typography plugin needed). */
export default function ArticleBody({ source }: Props) {
  return (
    <div className="max-w-3xl text-lg leading-relaxed">
      <MDXRemote
        source={source}
        components={{
          h2: (props) => <h2 className="mb-3 mt-12 text-3xl font-semibold" {...props} />,
          h3: (props) => <h3 className="mb-2 mt-8 text-2xl font-semibold" {...props} />,
          p: (props) => <p className="mb-5" {...props} />,
          ul: (props) => <ul className="mb-5 list-disc space-y-1 pl-6" {...props} />,
          ol: (props) => <ol className="mb-5 list-decimal space-y-1 pl-6" {...props} />,
          a: (props) => <a className="font-medium text-accent underline underline-offset-4" {...props} />,
          blockquote: (props) => (
            <blockquote className="my-8 border-l-4 border-brand-teal pl-5 font-display text-xl italic text-muted" {...props} />
          ),
          code: (props) => <code className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-base" {...props} />,
        }}
      />
    </div>
  );
}
