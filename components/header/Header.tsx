import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { headerHeight, maxWidth } from "./constants.ts";
import Logo from "$store/components/header/Logo.tsx";
import OperationTime, {
  OperationTimeProps,
} from "$store/components/header/OperationTime.tsx";

export interface Props {
  operationTimes?: OperationTimeProps[];
  logo: LiveImage;
}

function Header({ logo, operationTimes }: Props) {
  const _background =
    "linear-gradient(90deg, rgba(255,255,255,1) 38%, rgba(236,124,35,1) 36%)";

  return (
    <header
      class="flex justify-center"
      style={{
        background: _background,
        height: headerHeight,
      }}
    >
      <div
        style={{ maxWidth: maxWidth, width: "100%" }}
        class="flex items-center"
      >
        <div class="flex space-between w-full h-full items-center px-3">
          <div class="flex items-center h-full w-5/12 md:w-3/12 pr-6">
            <Logo href="/" logo={logo} alt="shopping barra logo" />
          </div>
          <div class="flex h-full items-center justify-end md:w-9/12">
            <OperationTime
              operationDescriptions={operationTimes}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
