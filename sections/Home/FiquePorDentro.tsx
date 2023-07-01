import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";
import FiquePorDentroGallery from "$store/components/ui/FiquePorDentroGallery.tsx";

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
    <div class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content  lg:py-10">
      <Header
        title={header.title}
        description=""
        alignment="center"
      />
      <div class="bg-black grid grid-cols-5 grid-rows-4 gap-4">
        {list?.map((content, index) => (
          <FiquePorDentroGallery content={content} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FiquePorDentro;
