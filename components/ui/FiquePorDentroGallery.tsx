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

export default function FiquePorDentroGallery({ content, index }: Props) {
  return (
    <>
      {index == 0 && (
        <div class="col-span-3 row-span-4 bg-white">
          <Picture>
            <img
              src={content.image}
              decoding="async"
              loading="lazy"
              class="rounded-xl"
            />
          </Picture>

          <div class="inline">
            <div class="float-left my-2">
              {content.label}
            </div>
            <div class="float-right my-2">
          
            </div>
          </div>
        </div>
      )}
      {index > 0 && (
        <div class="col-span-2 row-span-4 col-start-4 bg-white">
          Index {index}
        </div>
      )}
    </>
  );
}
