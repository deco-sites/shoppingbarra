export interface Props {
  title?: string;
  href?: string;
  buttonLabel?: string;
}

function VisitOurStores({ title, href, buttonLabel }: Props) {
  return (
    <section class="flex flex-col justify-center items-center h-full">
      <p class="text-center text-4xl mt-4" style="color: rgb(100, 48, 100)">
        {title}
      </p>
      <a
        href={href}
        class="mb-11 mt-5"
        target="_blank"
      >
        <button
          class={`bg-primary text-white text-base rounded-3xl h-11`}
          style="width:200px"
        >
          {buttonLabel}
        </button>
      </a>
    </section>
  );
}

export default VisitOurStores;
