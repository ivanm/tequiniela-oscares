import * as React from "react";
import {
  CSSReset,
  Theme,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Button,
  theme,
  ChakraProvider,
} from "@chakra-ui/react";
export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <header>
      <Flex align="center" p={4} bg="white" color="black">
        <Heading as="h1" size="lg">
          Oscarin
        </Heading>
        <Button>Mi Quiniela</Button>
      </Flex>
    </header>
    <Box as="main" bg="white">
      <Wrap>
        {Array(10)
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
