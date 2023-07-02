import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Logo from "$store/components/header/Logo.tsx";

export interface Props {
  logo?: {
    image: LiveImage;
  };
  href?: string;
  alt: string;
}

function CategoryHeader({ logo, alt, href }: Props) {
  return (
    <>
      <header class="flex items-center justify-center">
        <div class="p-10 mt-8">
          <Logo
            href={href}
            logo={logo}
            alt={alt}
          />
        </div>
      </header>
    </>
  );
}

export default CategoryHeader;
