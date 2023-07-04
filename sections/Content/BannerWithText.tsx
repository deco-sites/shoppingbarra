import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Button from "$store/components/ui/Button.tsx";
import SectionTitle from "$store/components/ui/SectionTitle.tsx";

export interface BannerText {
  /** @description Banner image */
  src: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description title on the top of the text content*/
  bannerTitle: string;
  /**@description Text Content*/
  text: HTML;
  /**@description Button Text*/
  buttonText?: string;
  /**@description Button href*/
  href?: string;
  /**@description Button Background Color
    @default primary
  */
  background?: SemanticColors;

  hideShowButton?: "show" | "hide";
}

export interface Props {
  title?: string;
  bannerTextContent: BannerText[];
  /**@description Section Title */
  textColor?: SemanticColors;
  /**
    @description Position of the banner and text
    @default bannerRowPositioning
  */
  contentPosition?: "bannerRowPositioning" | "bannerRowReversePositioning";
}

export type SemanticColors =
  | "primary"
  | "base"
  | "accent";

export default function BannerWithText({
  title,
  bannerTextContent = [],
  textColor,
  contentPosition,
}: Props) {
  const BTN_COLORS = {
    primary: "btn btn-primary border-primary-content",
    base: "btn btn-base border-base-content",
    accent: "text-accent group-hover:text-accent-content",
  };

  const contentDirection = {
    bannerRowPositioning: "md:flex-row",
    bannerRowReversePositioning: "md:flex-row-reverse",
  };

  const hideButton = {
    show: "show",
    hide: "hidden",
  };

  return (
    <>
      <SectionTitle
        title={title || ""}
        textColor={textColor}
      />
      <section>
        <div
          class={`container lg:pt-10 flex flex-col gap-8 lg:gap-10 justify-center px-4 mb-11 ${
            contentDirection[contentPosition ?? "bannerRowPositioning"]
          }`}
        >
          {bannerTextContent.map((
            {
              src,
              alt,
              bannerTitle,
              text,
              buttonText,
              href,
              background,
              hideShowButton,
            },
          ) => (
            <>
              <div>
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={500}
                  preload
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div>
                <h2 class="text-2xl text-center font-bold pb-4 text-accent uppercase">
                  {bannerTitle}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <a href={href} class="flex justify-center">
                  <Button
                    class={`text-base rounded-3xl normal-case mt-10 font-normal ${
                      BTN_COLORS[
                        background ?? "primary"
                      ]
                    } ${hideButton[hideShowButton ?? "show"]}`}
                  >
                    {buttonText}
                  </Button>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
