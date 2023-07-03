import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";
import SliderJS from "$store/islands/SliderJS.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import SelectStore from "$store/components/ui/SelectStore.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Modals from "$store/components/header/Modals.tsx";

export interface Stores {
  name: string;
  type: string;
  localization: string;
  image: LiveImage;
  phone?: string;
  whatsapp?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  selectLabel: string;
  list?: Stores[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

function sortOptions(fullObject: Stores[]) {
  const object = fullObject.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return object;
}

function CategoryList(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    header = {
      title: "",
      description: "",
    },
    selectLabel = "Encontrar Loja",
    list = [
      {
        name: "Loja 1",
        type: "Loja teste",
        localization: "Piso teste",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        phone: "(21) 11111-1111",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;
  const newList = sortOptions(list);
  return (
    <div
      id={id}
      class="container py-8 flex flex-col gap-4 lg:gap-10 text-base-content lg:py-10 px-11"
    >
      <Header
        title={header.title}
        description={header.description || ""}
        alignment={layout.headerAlignment || "center"}
      />
      <div class="container flex m-auto max-w-[679px] min-w-[240px] md:min-w-[640px]">
        <div class="flex items-center bg-[#f3f0ed] px-2 rounded-l-lg">
          <Icon id="Search" width={24} height={24} />
        </div>
        <SelectStore selectLabel={selectLabel} options={newList} />
      </div>
      <Slider class="carousel carousel-start gap-4 row-start-5 row-end-5">
        {newList.map((
          { name, type, localization, image, phone },
          index,
        ) => (
          <Slider.Item
            index={index}
            class="flex flex-col gap-2 carousel-item bg-[#f3f0ed]"
          >
            <div
              href="#"
              class="flex flex-col gap-2 lg:w-[196px] lg:h-[90px]"
            >
              {image &&
                (
                  <figure class="self-center mix-blend-multiply">
                    <Image
                      class="card h-full"
                      src={image}
                      alt={name || type || localization}
                      width={105}
                      height={90}
                      loading="lazy"
                    />
                  </figure>
                )}
            </div>
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default CategoryList;
