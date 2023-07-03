export interface Props {
  text: string;
}

function SecondaryFooter({ text }: Props) {
  return (
    <footer
      class={`w-full flex flex-col pt-5 pb-5 bg-primary text-white font-bold text-sm`}
    >
      <div class="flex flex-col lg:flex-row lg:justify-center max-w-full text-center">
        {text}
      </div>
    </footer>
  );
}

export default SecondaryFooter;
