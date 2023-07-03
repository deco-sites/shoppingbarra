import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Logo from "$store/components/header/Logo.tsx";

export interface Props {
  logo: LiveImage;
}

function CategoryHeader({ logo }: Props) {
  return (
    <>
      <header class="flex items-center justify-center">
        <div class="p-10 mt-8">
          <Logo
            href="/"
            logo={logo}
            alt="shopping barra logo"
          />
        </div>
      </header>
    </>
  );
}

export default CategoryHeader;
