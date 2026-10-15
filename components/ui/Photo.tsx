import Image from "next/image";
import { PHOTOS } from "@/constants/photos";
import { cn } from "@/lib/utils";
import type { PhotoKey } from "@/types";

type Props = {
  id: PhotoKey;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Captioned photo. Give it a size or aspect ratio through `className`. */
export default function Photo({ id, sizes, priority, className }: Props) {
  const photo = PHOTOS[id];
  return (
    <figure className={cn("relative overflow-hidden rounded-2xl bg-navy-800", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-4 pb-3 pt-10 text-sm text-ondark">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
