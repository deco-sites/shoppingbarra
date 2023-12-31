import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo?: {
    image: LiveImage;
    description: string;
  };
}

export default function Logo({ logo }: Props) {
  return (
    <>
      {logo?.image && (
        <div class="flex flex-col gap-3">
          <div>
            <img
              src={logo?.image}
              alt={logo?.description}
              width={225}
              height={225}
              style="filter: brightness(0) invert(1)"
            />
          </div>
        </div>
      )}
    </>
  );
}
