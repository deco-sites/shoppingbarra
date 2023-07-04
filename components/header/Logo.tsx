import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: LiveImage;
  href: string;
  alt: string;
}

export default function Logo({ logo, alt, href }: Props) {
  return (
    <a href={href}>
      <Image
        src={logo}
        alt={alt}
        width={153}
        height={45}
        preload
        fetchPriority="high"
      />
    </a>
  );
}
