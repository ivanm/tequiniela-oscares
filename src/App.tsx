import * as React from "react";
import {
  CSSReset,
  Box,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Button,
  Image,
  ChakraProvider,
} from "@chakra-ui/react";

import theme from "./theme";
import BigCard from "./cards/BigCard";
import nominees from "./nominees";

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
      <Flex ml={3} mt={6} mb={3} pt={4}>
        <Image src="/figure.svg" alt="Oscar Figure" />
        <Flex align="center">
          <Heading fontWeight="extrabold" as="h1" fontSize="24px" mr={2}>
            Best Picture
          </Heading>
        </Flex>
      </Flex>
      <Wrap>
        {nominees.bestPicture.map(({ imgSrc, movie }, i) => (
          <WrapItem key={i}>
            <Box p={2}>
              <BigCard imgSrc={imgSrc} title={movie} />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  </ChakraProvider>
);
