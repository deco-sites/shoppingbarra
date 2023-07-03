import { Stores } from "$store/components/ui/CategoryList.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useSignal } from "@preact/signals";
import Image from "deco-sites/std/components/Image.tsx";

export interface SearchbarItemsProps {
  options: Stores[];
  onClick: (index: number) => void;
}

export interface ModalItemsProps {
  option: Stores | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface Props {
  selectLabel: string;
  options: Stores[];
}

function SearchbarItems({ options, onClick }: SearchbarItemsProps) {
  return (
    <>
      {options.length
        ? options.map((
          { name },
          index,
        ) => (
          <li key={index}>
            <button
              onClick={() => onClick(index)}
            >
              {name.toUpperCase()}
            </button>
          </li>
        ))
        : (
          <li>
            Sem resultados para essa pesquisa.
          </li>
        )}
    </>
  );
}

function StoreModal(
  { option, isOpen, onClose }: ModalItemsProps,
) {
  return (
    <>
      {option && (
        <Modal
          loading="lazy"
          title={option.name.toUpperCase()}
          mode="center"
          open={isOpen}
          onClose={() => onClose()}
        >
          <div class="container">
            <Image
              class="card h-full"
              src={option.image}
              alt={option.name}
              width={200}
              height={200}
            />    
            <div class="flex flex-col gap-2">
              {option.type && <p>{option.type}</p>}
              {option.localization && <p>{option.localization}</p>}
              {option.phone && (
                <p>
                  Telefone: <a href={`tel:${option.phone}`} class="font-light">{option.phone}</a>
                </p>
              )}
              {option.whatsapp && (
                <p>
                  WhatsApp: <a href={`tel:${option.whatsapp}`} class="font-light">{option.whatsapp}</a>
                </p>
              )}
            </div>
          </div>
          <button
            class="flex justify-end"
            onClick={() => onClose()}
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
        phone: "21 11111-1111",
      },
    ],
  } = props;
  const selectedStoreIndex = useSignal<number | null>(null);
  const inputValue = useSignal("");

  const searchbarItemsFunction = (index: number) => {
    selectedStoreIndex.value = index;
  };
  const modalItemsFunction = () => {
    selectedStoreIndex.value = null;
  };

  const slicedOptions = options.filter((item) =>
    item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .includes(inputValue.value.toLowerCase())
  );

  return (
    <>
      <div class="w-full p-3 rounded-r-lg text-[#3a3c3e] font-extralight bg-[#f3f0ed]">
        <input
          class="w-full m-1 bg-[#f3f0ed]"
          type="text"
          placeholder={selectLabel}
          onChange={(e) => {
            inputValue.value = e.currentTarget.value;
          }}
        />
        <ul className="left-0 p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-box w-full">
          <div class="overflow-y-auto max-h-80 flex flex-col">
            <SearchbarItems
              options={slicedOptions}
              onClick={searchbarItemsFunction}
            />
          </div>
        </ul>
      </div>
      <StoreModal
        option={selectedStoreIndex.value !== null
          ? options[selectedStoreIndex.value]
          : null}
        isOpen={selectedStoreIndex.value !== null}
        onClose={modalItemsFunction}
      />
    </>
  );
}
