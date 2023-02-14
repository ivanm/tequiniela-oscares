import * as React from "react";
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

export const App = () => (
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
    <Box as="main" mt="72px" pl={15} pr={15}>
      <NominationCards
        containerDirection="column"
        cardsDirection="row"
        nominations={nominees.bestPicture}
        size="big"
        title="Best Picture"
        ml={3}
        mt={6}
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
          title="Best Original Score"
          ml={3}
          mt={6}
          mb={3}
          pt={4}
        />
      </Flex>
    </Box>
    <Box as="main" mt={3} pl={15} pr={15}></Box>
  </ChakraProvider>
);
