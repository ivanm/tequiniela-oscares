import { useRecoilState } from "recoil";
import useEffectOnce from "./useEffectOnce";

import { windowResizeState } from "../atoms";

const useResize = () => {
  const [windowResize, setWindowResize] = useRecoilState(windowResizeState);

  const resizeEffect = () => {
    setWindowResize({
      scrollbarWidth: window.innerWidth - document.body.clientWidth + 1,
      windowWidth: window.innerWidth,
    });
  };

  useEffectOnce(() => {
    
    const listener = () => {
      resizeEffect();
    };
    window.addEventListener("resize", listener);
    resizeEffect();

    return () => {
      window.removeEventListener("resize", listener);
    };
  });
  return {
    scrollbarWidth: windowResize.scrollbarWidth,
    windowWidth: windowResize.windowWidth,
    resizeEffect,
  };
};

export default useResize;
