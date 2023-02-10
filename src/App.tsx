import * as React from "react";
import {
  CSSReset,
  Theme,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Button,
  Image,
  ChakraProvider,
} from "@chakra-ui/react";

import theme from "./theme";
export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box
      as="header"
      position="fixed"
      w="100%"
      background="#fff url(/topbg.png) repeat-x bottom"
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
    <Box as="main" bg="white" mt="90px">
      <Flex ml={3} mt={6} mb={3}>
        <Image src="/figure.svg" alt="Oscar Figure" />
        <Flex align="center">
          <Heading fontWeight="extrabold" as="h1" fontSize="24px" mr={2}>
            Best Picture
          </Heading>
        </Flex>
      </Flex>
      <Wrap>
        {Array(100)
          .fill(null)
          .map((_, i) => (
            <WrapItem>
              <Box p={2}>
                <Image src="https://picsum.photos/200" alt="Gallery Item 1" />
                <Text mt={2}>Item {i}</Text>
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </Box>
  </ChakraProvider>
);
