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
    window.addEventListener("resize", () => {
      resizeEffect();
    });

    return () => {
      window.removeEventListener("resize", resizeEffect);
    };
  });
  return { scrollbarWidth, windowWidth, resizeEffect };
};

export default useResize;
