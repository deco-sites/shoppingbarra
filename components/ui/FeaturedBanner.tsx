import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface BannerProps {
  label?: string;
  /** @description text to be rendered on top of the image */
  bannerTitle?: string;
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
  banner?: BannerProps[];
}

function FeaturedBanner(props: Props) {
  const {
    header = {
      title: "",
    },
    banner = [
      {
        label: "",
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
    ],
  } = props;

  return (
    <div class="grid grid-cols-1 grid-rows-1 bg-base-200 py-10 mt-10">
      {banner?.map((item) => (
        <>
          <Header
            title={header.title}
            description=""
            alignment="center"
          />
          <a
            class="relative inline-block mx-auto pt-5"
            href="/"
          >
            <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1 p-2.5 mx-auto">
              <Source
                media="(max-width: 767px)"
                fetchPriority="auto"
                src={item.image.mobile}
                width={375}
                height={137}
                class="h-auto"
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority="auto"
                src={item.image.desktop}
                width={1350}
                height={500}
              />
              <img
                class="object-cover"
                loading="lazy"
                src={item.image.desktop}
                alt={item.image.alt}
              />
            </Picture>
            <div class="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
              <h1>
                <span class="text-5xl font-medium text-base-100">
                  {item.bannerTitle}
                </span>
              </h1>
            </div>
          </a>
        </>
      ))}
    </div>
  );
}

export default FeaturedBanner;
