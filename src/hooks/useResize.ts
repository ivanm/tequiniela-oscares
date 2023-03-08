import { useState } from "react";
import useEffectOnce from "./useEffectOnce";

const useResize = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number | undefined>();
  const [windowWidth, setWindowWidth] = useState<number | undefined>();

  const resizeEffect = () => {
    setScrollbarWidth(window.innerWidth - document.body.clientWidth + 1);
    setWindowWidth(window.innerWidth);
  };

  useEffectOnce(() => {
    resizeEffect();

    const listener = () => {
      resizeEffect();
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  });
  return { scrollbarWidth, windowWidth };
};

export default useResize;
