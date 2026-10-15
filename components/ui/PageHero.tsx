import Container from "./Container";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, lede, children }: Props) {
  return (
    <header className="relative overflow-hidden bg-navy-950 text-ondark">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl"
      />
      <Container className="relative py-16 md:py-20">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ondark-muted">{lede}</p>}
        {children}
      </Container>
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent" />
    </header>
  );
}
