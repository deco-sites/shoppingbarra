import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { headerHeight, maxWidth } from "./constants.ts";
import Logo from "$store/components/header/Logo.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  logo?: {
    image: LiveImage;
  };
}

function Header({ logo }: Props) {
  const _logo = <Logo logo={logo} />;
  const _background =
    "linear-gradient(90deg, rgba(255,255,255,1) 36%, rgba(236,124,35,1) 36%)";
  return (
    <>
      <header
        style={{
          background: _background,
          display: "flex",
          height: headerHeight,
          justifyContent: "center",
        }}
      >
        <div
          style={{ maxWidth: maxWidth, width: "100%" }}
          class="flex items-center	"
        >
          <div class="flex w-full h-full items-center">
            <div class="flex items-center h-full w-5/12 md:w-3/12">
              {_logo}
            </div>
            <div class="flex h-full items-center justify-end md:w-9/12">
              <button
                class="text-white	text-xs font-bold flex items-center"
                href=""
              >
                <Icon width="16px" height="16px" id="Timer" class="m-1" />
                Funcionamento do shopping
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
