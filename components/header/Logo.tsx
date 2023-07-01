import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo?: {
    image: LiveImage;
  };
}

export default function Logo({ logo }: Props) {
  return (
    <>
      {logo?.image && (
        <a>
          <img
            src={logo?.image}
          />
        </a>
      )}
    </>
  );
}
