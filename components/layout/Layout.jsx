import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { NavHeaderMobile } from "./menuMobile/NavHeaderMobile";
import { NavHeaderTablet } from "./menuTablet/NavHeaderTablet";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "components/common/loader/Loader";

//     {size.width} <- bredde
//     {size.height} <- høyde

export default function ({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const size = useWindowSize();

  return (
    <>
      {size.width <= SCREEN.tablet ? <NavHeaderMobile /> : <NavHeaderTablet />}
      {loading ? <Loader /> : children}
    </>
  );
}
