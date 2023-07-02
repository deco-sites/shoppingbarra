import { useSignal } from "@preact/signals";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";

export interface OperationTimeProps {
  title?: string;
  operationTimeWeek?: string;
  operationTimeWeekend?: string;
}

export interface Props {
  operationDescriptions?: Array<OperationTimeProps>;
}

function OperationTime({ operationDescriptions }: Props) {
  const open = useSignal(false);

  return (
    <>
      <button
        class="flex items-center text-white	text-xs font-bold text-left"
        onClick={() => open.value = true}
      >
        <Icon
          class="mr-1.5"
          id="Timer"
          width={16}
          height={17}
          strokeWidth={1}
        />
        Funcionamento do shopping
      </button>
      <Modal
        loading="lazy"
        title="Funcionamento do shopping"
        mode="center"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        {operationDescriptions?.map((operationDescription) => (
          <div class="text-sm">
            <strong>{operationDescription.title}</strong>
            <p>{operationDescription.operationTimeWeek}</p>
            <p class="mb-3">{operationDescription.operationTimeWeekend}</p>
          </div>
        ))}
        <button
          class="flex justify-end"
          onClick={() => open.value = false}
        >
          <p class="border border-base-200 rounded py-2 px-4">Fechar</p>
        </button>
      </Modal>
    </>
  );
}

export default OperationTime;
