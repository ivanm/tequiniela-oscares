import { Box, CSSReset } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Nominations } from "./Nominations";
import { Ranking } from "./Ranking";
import { Rules } from "./Rules";
import { Header } from "./Header";

export const App = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number | undefined>();

  useEffect(() => {
    resizeEffect();
    window.addEventListener("resize", () => {
      resizeEffect();
    });

    return () => {
      window.removeEventListener("resize", resizeEffect);
    };
  }, []);

  const resizeEffect = () => {
    setScrollbarWidth(window.innerWidth - document.body.clientWidth);
  };

  return (
    <>
      <CSSReset />
      <Header />
      <Box
        as="main"
        mt="72px"
        mb="80px"
        w={{ base: "auto", sm: `calc(100vw - ${scrollbarWidth}px)` }}
      >
        <Routes>
          <Route path="/" element={<Nominations />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Box>
    </>
  );
};
