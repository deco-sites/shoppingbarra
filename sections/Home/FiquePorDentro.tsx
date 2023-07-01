import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";
import PictureObject from "$store/components/ui/PictureObject.tsx";

export interface Content {
  label: string;
  href: string;
  image: LiveImage;
}

export interface Props {
  header?: {
    title?: string;
  };
  list?: Content[];
}

function FiquePorDentro(props: Props) {
  const {
    header = {
      title: "",
    },
    list = [
      {
        label: "Feminino",
        href: "/feminino",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
      },
    ],
  } = props;

  return (
    <div class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content max-w-[1226.47px] items-center">
      <Header
        title={header.title}
        description=""
        alignment="center"
      />
      {/* Main image */}
      <div class="flex flex-col mx-5 md:flex-row mt-2 md:gap-8 md:mx-40">
        {list?.map((content, index) => (
          index == 0 && (
            <a
              href={content.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${content.label} Logo`}
              class="flex gap-2 items-center"
            >
              <div class="max-w-[702px]">
                <PictureObject content={content} index={index} />
              </div>
            </a>
          )
        ))}
        {/* Secondary images */}
        <div class="flex-col">
          {list?.map((content, index) => (
            index > 0 && (
              <a
                href={content.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${content.label} Logo`}
                class="flex gap-2 items-center"
              >
                <div class="max-w-[702px] md:max-w-[360px] w-full">
                  <PictureObject content={content} index={index} />
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiquePorDentro;
