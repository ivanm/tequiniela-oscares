import { useState, useEffect } from "react";
import {
  CSSReset,
  Box,
  Flex,
  Heading,
  Button,
  Image,
  ChakraProvider,
} from "@chakra-ui/react";

import theme from "./theme";
import nominees from "./nominees";
import NominationCards from "./NominationCards";

export const App = () => {
  /// Fix for rendering on each resize
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  //
  // const resize = () => {
  //   console.log("resize!");
  //   setWindowSize({
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //   });
  // };
  //
  // useEffect(() => {
  //   resize();
  //   window.addEventListener("resize", () => {
  //     resize();
  //   });
  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   };
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        as="header"
        position="fixed"
        w="100%"
        background="#fff"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
        zIndex={2}
      >
        <Flex align="center" p={4} bg="transparent" color="black">
          <Heading as="h1" size="lg">
            TEQU
          </Heading>
          <Image src="/figure.svg" alt="Oscar Figure" />
          <Heading as="h1" size="lg" mr={5}>
            NIELA
          </Heading>
          <Button mr={2}>Mi Quiniela</Button>
          <Button className="inactive" mr={2}>
            Ranking
          </Button>
          <Button className="inactive" mr={2}>
            Reglas
          </Button>
          <Flex ml="auto">
            <Button className="inactive">Compartir</Button>
            <Flex align="center">
              <Box height={26}>@vaan</Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box as="main" mt="72px" pl={15} w="calc(100vw - 30px)">
        <NominationCards
          containerDirection="column"
          cardsDirection="row"
          nominations={nominees.bestPicture}
          size="big"
          title="Best Picture"
          ml={3}
          mt={2}
          mb={3}
          pt={4}
        />
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.directing}
            size="small"
            title="Best Director"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.leadingActor}
            size="small"
            title="Best Actor"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.leadingActress}
            size="small"
            title="Best Actress"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.supportingActor}
            size="small"
            title="Best Supporting Actor"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.supportingActress}
            size="small"
            title="Best Supporting Actress"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.animatedFeature}
            size="small"
            title="Best Animated Feature Film"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.originalScreenplay}
            size="mini"
            title="Best Original Screenplay"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.adaptedScreenplay}
            size="mini"
            title="Best Adapted Screenplay"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.internationalFeature}
            size="mini"
            title="Best International Feature Film"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.documentaryFeature}
            size="mini"
            title="Best Documentary Feature"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.documentaryShort}
            size="mini"
            title="Best Documentary Short Subject"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.liveActionShort}
            size="mini"
            title="Best Live Action Short Film"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.animatedShort}
            size="mini"
            title="Best Animated Short Film"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.originalScore}
            size="mini"
            title="Best Original Score"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.originalSong}
            size="mini"
            title="Best Original Song"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.sound}
            size="mini"
            title="Best Sound"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.productionDesign}
            size="mini"
            title="Best Production Design"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.cinematography}
            size="mini"
            title="Best Cinematography"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.makeup}
            size="mini"
            title="Best Makeup and Hairstyling"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.costumeDesign}
            size="mini"
            title="Best Costume Design"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.filmEditing}
            size="mini"
            title="Best Film Editing"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
          <NominationCards
            containerDirection="column"
            cardsDirection="column"
            nominations={nominees.visualEffects}
            size="mini"
            title="Best Visual Effects"
            ml={3}
            mt={6}
            mb={3}
            pt={4}
          />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
