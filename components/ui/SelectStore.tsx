import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";
import Modal from "$store/components/ui/Modal.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface FindStoreOptions {
  name: string;
  type: string;
  localization: string;
  image: LiveImage;
  phone?: string;
  whatsapp?: string;
}

export interface Props {
  selectLabel: string;
  options: FindStoreOptions[];
}

export default function SelectStore(props: Props) {
  const {
    selectLabel = "",
    options = [
      {
        name: "Loja 1",
        type: "Loja teste",
        localization: "Piso teste",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        phone: "(21) 11111-1111",
      },
    ],
  } = props;
  const isStoreDetailsOpen = useSignal(false);
  const indexStore = useSignal(0);

  return (
    <>
      <div class="dropdown w-full p-3 rounded-r-lg text-[#3a3c3e] font-extralight bg-[#f3f0ed]">
        <input
          class="w-full m-1 bg-[#f3f0ed]"
          type="text"
          placeholder={selectLabel}
        />
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[98%]">
          {options.map((
            { name },
            index,
          ) => (
            <li id={String(index)}>
              <button
                onClick={() => {
                  indexStore.value = index;
                  isStoreDetailsOpen.value = true;
                }}
              >
                {name.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        loading="lazy"
        title={options[indexStore.value].name.toUpperCase()}
        mode="center"
        open={isStoreDetailsOpen.value}
        onClose={() => {
          isStoreDetailsOpen.value = false;
        }}
      >
        <div class="container flex">
          <div
            href="#"
            class="flex flex-col gap-2 lg:w-[196px] lg:h-[90px] self-center"
          >
            <figure class="self-center mix-blend-multiply">
              <Image
                class="card h-full"
                src={options[indexStore.value].image}
                alt={options[indexStore.value].name ||
                  options[indexStore.value].type ||
                  options[indexStore.value].localization}
                width={105}
                height={90}
                loading="lazy"
              />
            </figure>
          </div>
          <div class="flex-column pl-4">
            <p>{options[indexStore.value].type}</p>
            <p>{options[indexStore.value].localization}</p>

            {options[indexStore.value]?.phone && (
              <p>
                Telefone:{" "}
                <a class="font-light">{options[indexStore.value].phone}</a>
              </p>
            )}
            {options[indexStore.value]?.phone && (
              <p>
                WhatsApp:{" "}
                <a class="font-light">{options[indexStore.value].whatsapp}</a>
              </p>
            )}
          </div>
        </div>
        <button
          class="flex justify-end"
          onClick={() => isStoreDetailsOpen.value = false}
        >
          <p class="border border-base-200 rounded py-2 px-4">Fechar</p>
        </button>
      </Modal>
    </>
  );
}
