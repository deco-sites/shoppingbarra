import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { SectionProps } from "$live/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

/**
 * @titleBy matcher
 */
export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @default primary */
  background: "primary" | "base-100" | "base-200";
  title?: string
  image: {
    src: LiveImage;
    /** @description image alt text */
    alt: string;
  };
}

function Banner({ banner }: SectionProps<ReturnType<typeof loader>>) {
  if (!banner) {
    return null;
  }

  const { image } = banner;

  return (
    <div class="grid grid-cols-1 grid-rows-1 bg-primary">
      <Picture
        preload
        class="col-start-1 col-span-1 row-start-1 row-span-1 p-2.5 mx-auto"
      >
        <Source
          src={image.src}
          width={900}
          height={200}
        />
        <img
          class="w-full h-auto  max-w-4xl"
          src={image.src}
          alt={image.alt}
        />
      </Picture>
    </div>
  );
}

export interface Props {
  banners?: Banner[];
}

export const loader = ({ banners = [] }: Props, req: Request) => {
  const banner = banners.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { banner };
};

export default Banner;
