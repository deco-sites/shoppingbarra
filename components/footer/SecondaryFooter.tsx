const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

function SecondaryFooter() {
  const year = getYear();
  return (
    <footer
      class={`w-full flex flex-col pt-5 pb-5 bg-primary text-white text-sm`}
    >
      <div class="flex flex-col lg:flex-row lg:justify-center max-w-full text-center">
        Copyright © {year}. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default SecondaryFooter;
