import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo?: {
    image: LiveImage;
  };
  href?: string;
  alt: string;
}

export default function Logo({ logo, alt, href }: Props) {
  return (
    <>
      {logo?.image && (
        <a href={href} target="_blank">
          <img
            src={logo?.image}
            alt={alt}
          />
        </a>
      )}
    </>
  );
}
