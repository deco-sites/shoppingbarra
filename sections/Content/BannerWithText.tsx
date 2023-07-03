import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Button from "$store/components/ui/Button.tsx";
import SectionTitle from "$store/components/ui/SectionTitle.tsx";

export interface Banner {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
}

export interface Props {
  /**
    @description Page Title
    @default Title
  */
  title?: string;

  banners?: Banner[];

  /**
    @description Banner Title
    @default BannerTitle
  */
  bannerTitle: string;

  /**
    @description Banner Text Content
    @default Text 
  */
  text: HTML;

  /**
    @description Button Text
    @default Button
  */
  buttonText: string;

  /**
    @description Button href
    @default /
  */
  href?: string;

  /**
    @description Page Title Alignment
    @default center
  */
  alignment?: "center" | "left";

  /**
    @description Page Title Font Size
    @default Large
  */
  fontSize?: "Normal" | "Large";

  /**
    @description Button Background Color
    @default primary
  */
  buttonColor?: SemanticColors;
}

export type SemanticColors =
  | "primary"
  | "secondary"
  | "base";

export default function BannerWithText({
  title,
  banners = [],
  bannerTitle,
  text,
  buttonText,
  href,
  alignment,
  fontSize,
  buttonColor
}: Props) {

  const BTN_COLORS = {
    primary: "btn btn-primary border-primary-content",
    secondary: "btn btn-secondary border-secondary-content",
    base: "btn btn-base border-base-content",
  };

  return (
    <>
      <SectionTitle
        title={title || ""}
        fontSize={fontSize || "Normal"}
        alignment={alignment || "center"}
      />
      <section>
        <div class="container py-10 flex flex-col md:flex-row gap-8 lg:gap-10 justify-center px-2">
          <div>
            {banners.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                width={400}
                height={500}
                preload
                loading="eager"
                fetchPriority="high"
              />
            ))}
          </div>

          <div>
            <strong
              class="text-2xl text-center"
              style="color: rgb(100, 48, 100)"
            >
              {bannerTitle}
            </strong>
            <div
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <a href={href}>
              <Button
                class={`text-primary-content text-base rounded-3xl normal-case mt-10 ${BTN_COLORS[
                  buttonColor ?? "primary"
                ]}`}
              >
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
