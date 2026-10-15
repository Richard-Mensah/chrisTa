import Image from "next/image";
import { photos } from "@/content/photos";
import { isDev } from "@/content/site";
import type { PhotoKey } from "@/content/types";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="dark phero">
      <div className="wrap">
        <p className="eyebrow mono">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </div>
  );
}

export function Photo({
  id,
  sizes,
  priority,
  className,
  style,
}: {
  id: PhotoKey;
  sizes: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const p = photos[id];
  return (
    <figure className={`photo ${className ?? ""}`} style={style}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} />
      <figcaption>{p.caption}</figcaption>
    </figure>
  );
}

/** Development-only marker for content awaiting Christabel's confirmation. Renders nothing in production. */
export function Pending({ children = "Awaiting confirmation" }: { children?: React.ReactNode }) {
  if (!isDev) return null;
  return <span className="pending">{children}</span>;
}
