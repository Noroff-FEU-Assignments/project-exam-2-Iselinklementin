import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { NavHeaderMobile } from "./menuMobile/NavHeaderMobile";
import { NavHeaderTablet } from "./menuTablet/NavHeaderTablet";

//     {size.width} <- bredde
//     {size.height} <- høyde

export default function ({ children }) {
  const size = useWindowSize();

  return (
    <>
      {size.width <= SCREEN.tablet ? <NavHeaderMobile /> : <NavHeaderTablet />}
      {children}
    </>
  );
}
