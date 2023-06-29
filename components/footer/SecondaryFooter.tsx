const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

function SecondaryFooter() {
  const year = getYear();
  return (
    <div class="flex flex-col lg:flex-row lg:justify-center max-w-full text-center">
      Copyright © {year}. Todos os direitos reservados.
    </div>
  );
}

export default SecondaryFooter;
