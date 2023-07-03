import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface BannerProps {
  /** @default primary */
  background: "primary" | "base-100" | "base-200";
  image: {
    src: LiveImage;
    /** @description desktop otimized image */
    desktop: LiveImage;
    /** @description mobile otimized image */
    mobile: LiveImage;
    /** @description image alt text */
    alt: string;
  };
  /** @description image href text link*/
  href: string;
}

export interface Props {
  header?: {
    title?: string;
  };
  banner?: BannerProps;
}

function FeaturedBanner(props: Props) {
  const {
    header = {
      title: "",
    },
    banner = {
      bannerTitle: "",
      background: "",
      image: {
        desktop: "",
        mobile: "",
        src: "",
        alt: "",
      },
      href: "/",
    },
  } = props;

  return (
    <div class="grid grid-cols-1 grid-rows-1 bg-base-200 py-10 mt-10">
      <Header
        title={header.title}
        description=""
        alignment="center"
      />
      <a
        class="relative inline-block mx-auto pt-5"
        href="/"
      >
        <Picture class="col-start-1 col-span-1 row-start-1 row-span-1 p-2.5 mx-auto">
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src={banner.image.mobile}
            width={375}
            height={137}
            class="h-auto"
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src={banner.image.desktop}
            width={1350}
            height={500}
          />
          <img
            class="object-cover"
            loading="lazy"
            src={banner.image.desktop}
            alt={banner.image.alt}
          />
        </Picture>
      </a>
    </div>
  );
}

export default FeaturedBanner;
