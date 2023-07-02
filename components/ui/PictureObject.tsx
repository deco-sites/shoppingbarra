import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

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
      <Image
        src={content.image}
        alt={content.imageAlt}
        decoding="async"
        loading="lazy"
        class="rounded-xl object-cover w-full"
        {...(highlight
          ? { width: 1200, height: 840 }
          : { width: 358, height: 177 })}
      />
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
