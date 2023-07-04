import Icon from "$store/components/ui/Icon.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Content {
  label: string;
  href: string;
  imageAlt: string;
  image: LiveImage;
}

export interface Props {
  content: Content;
  highlight?: boolean;
}

export default function PictureObject({ content, highlight }: Props) {
  return (
    <>
      <Picture>
        {highlight && (
          <Source
            media="(max-width: 767px)"
            src={content.image}
            width={358}
            height={177}
            class="h-auto"
          />
        )}
        <Source
          media={highlight ? "(min-width: 768px)" : ""}
          src={content.image}
          {...(highlight
            ? { width: 1200, height: 840 }
            : { width: 358, height: 177 })}
        />
        <img
          class="rounded-xl object-cover w-full"
          src={content.image}
          alt={content.imageAlt}
        />
      </Picture>
      <div class="flex justify-between items-center">
        <div class="text-xs lg:text-base">
          {content.label}
        </div>
        <Icon
          width={20}
          height={20}
          id="OrangeChevronRight"
        />
      </div>
    </>
  );
}
