import { Flex, Heading, Image } from "@chakra-ui/react";
export const Rules = () => (
  <Flex
    direction="column"
    className="rules-container"
    m={{
      base: "0 10px",
      sm: "0 20px",
      md: "0 30px",
      lg: "0 30px",
      xl: "0 20px",
      "2xl": "0 150px",
    }}
  >
    <Flex pl={3} pr={3} pt={3} pb={3} mt={2}>
      <Image src="rules.svg" alt="Rules Figure" />
      <Flex align="center" minHeight="45px">
        <Heading
          fontWeight="extrabold"
          as="h1"
          fontSize={{
            base: "19px",
            lg: "20px",
          }}
          mr={2}
          ml={2}
        >
          Reglas
        </Heading>
      </Flex>
    </Flex>
  </Flex>
);

