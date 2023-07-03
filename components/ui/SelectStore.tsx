import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";
import Modal from "$store/components/ui/Modal.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect } from "preact/hooks";

export interface FindStoreOptions {
  name: string;
  type: string;
  localization: string;
  image: LiveImage;
  phone?: string;
  whatsapp?: string;
}

export interface SearchbarItemsProps {
  options: FindStoreOptions[];
  onClickFunction: (index: number) => void;
}

export interface ModalItemsProps {
  option: FindStoreOptions;
  isStoreDetailsOpen: boolean;
  onCloseFunction: () => void;
}

export interface Props {
  selectLabel: string;
  options: FindStoreOptions[];
}

function SearchbarItems({ options, onClickFunction }: SearchbarItemsProps) {
  return (
    <>
      {options.map((
        { name },
        index,
      ) => (
        <li id={String(index)}>
          <button
            onClick={() => onClickFunction(index)}
          >
            {name.toUpperCase()}
          </button>
        </li>
      ))}
    </>
  );
}

function ModalItems(
  { option, isStoreDetailsOpen, onCloseFunction }: ModalItemsProps,
) {
  return (
    <>
      {option && (
        <Modal
          loading="lazy"
          title={option.name.toUpperCase()}
          mode="center"
          open={isStoreDetailsOpen}
          onClose={() => onCloseFunction()}
        >
          <div class="container flex">
            <div
              href="#"
              class="flex flex-col gap-2 lg:w-[196px] lg:h-[90px] self-center"
            >
              <figure class="self-center mix-blend-multiply">
                <Image
                  class="card h-full"
                  src={option.image}
                  alt={option.name ||
                    option.type ||
                    option.localization}
                  width={105}
                  height={90}
                  loading="eager"
                />
              </figure>
            </div>
            <div class="flex-column pl-4">
              <p>{option.type}</p>
              <p>{option.localization}</p>

              {option?.phone && (
                <p>
                  Telefone: <a class="font-light">{option.phone}</a>
                </p>
              )}
              {option?.whatsapp && (
                <p>
                  WhatsApp: <a class="font-light">{option.whatsapp}</a>
                </p>
              )}
            </div>
          </div>
          <button
            class="flex justify-end"
            onClick={() => onCloseFunction()}
          >
            <p class="border border-base-200 rounded py-2 px-4">Fechar</p>
          </button>
        </Modal>
      )}
    </>
  );
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
  const slicedOptions = useSignal(options);
  const inputValue = useSignal("");

  const searchbarItemsFunction = (index: number) => {
    indexStore.value = index;
    isStoreDetailsOpen.value = true;
  };
  const modalItemsFunction = () => {
    isStoreDetailsOpen.value = false;
  };

  useEffect(() => {
    slicedOptions.value = options.filter((item) =>
      item.name.toUpperCase().includes(inputValue.value.toUpperCase())
    );
  }, [inputValue.value]);

  return (
    <>
      <div class="dropdown w-full p-3 rounded-r-lg text-[#3a3c3e] font-extralight bg-[#f3f0ed]">
        <input
          class="w-full m-1 bg-[#f3f0ed]"
          type="text"
          placeholder={selectLabel}
          onChange={(e) => {
            inputValue.value = e.currentTarget.value;
          }}
        />
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[98%]">
          {
            <SearchbarItems
              options={slicedOptions.value}
              onClickFunction={searchbarItemsFunction}
            />
          }
        </ul>
      </div>
      <ModalItems
        option={slicedOptions.value[indexStore.value]}
        isStoreDetailsOpen={isStoreDetailsOpen.value}
        onCloseFunction={modalItemsFunction}
      />
    </>
  );
}
