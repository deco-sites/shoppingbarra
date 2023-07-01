import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Content {
  label: string;
  href: string;
  image: LiveImage;
}

export interface Props {
  content: Content;
  index: number;
}

export default function PictureObject({ content }: Props) {
  return (
    <>
      <Picture>
        <img
          src={content.image}
          decoding="async"
          loading="lazy"
          class="rounded-xl object-cover w-full"
        />
      </Picture>

      <div class="inline">
        <div class="float-left mt-2 mb-5 text-l text-xs lg:text-base">
          {content.label}
        </div>
        <div class="float-right mt-2 mb-5">
          <Icon
            width={20}
            height={20}
            id="OrangeChevronRight"
          />
        </div>
      </div>
    </>
  );
}
