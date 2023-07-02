import { useSignal } from "@preact/signals";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Modal from "$store/components/ui/Modal.tsx";

export interface OperationTimeProps {
  title?: string;
  weekDescription?: string;
  weekendDescription?: string;
}

export interface Props {
  operationDescriptions?: Array<OperationTimeProps>;
}

function OperationTime({ operationDescriptions }: Props) {
  const open = useSignal(false);

  return (
    <>
      <Button
        class="text-white	text-xs font-bold flex items-center bg-transparent border-none normal-case"
        onClick={() => open.value = true}
      >
        <Icon id="Timer" width={16} height={17} strokeWidth={1} />
        Funcionamento do shopping
      </Button>
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
            <p>{operationDescription.weekDescription}</p>
            <p class="mb-3">{operationDescription.weekendDescription}</p>
          </div>
        ))}
        <Button
          onClick={() => open.value = false}
        >
          Fechar
        </Button>
      </Modal>
    </>
  );
}

export default OperationTime;
