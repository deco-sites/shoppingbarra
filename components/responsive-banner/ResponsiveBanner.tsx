import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image?: {
    src: LiveImage;
  };
}

export default function ResponsiveBanner({ image }: Props) {
  return (
    <>
      {image?.src && (
        <div>
          <img src={image?.src}></img>
        </div>
      )}
    </>
  );
}
