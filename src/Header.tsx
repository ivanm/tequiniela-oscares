import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { hasNominationTimePassedState } from "./atoms";
import { useRecoilState } from "recoil";

export const Header = () => {
  const [, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState
  );

  const { pathname } = useLocation();

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      background="#fff"
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
      zIndex={2}
    >
      <Flex align="center" p={4} bg="transparent" color="black">
        <Heading as="h1" size="lg" fontWeight={400}>
          TEQU
        </Heading>
        <Image src="figure.svg" alt="Oscar Figure" />
        <Heading as="h1" size="lg" mr={5} fontWeight={400}>
          NIELA
        </Heading>
        <Button
          as={RouterLink}
          to="/"
          mr={2}
          bg={pathname === "/" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Mi Quiniela
        </Button>
        <Button
          as={RouterLink}
          to="/ranking"
          className="inactive"
          mr={2}
          bg={pathname === "/ranking" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Ranking
        </Button>
        <Button
          as={RouterLink}
          to="/rules"
          className="inactive"
          mr={2}
          bg={pathname === "/rules" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Reglas
        </Button>
        <Flex ml="auto">
          <Button
            className="inactive"
            onClick={() => {
              setHasNominationTimePassed(true);
            }}
            fontWeight={500}
          >
            Compartir
          </Button>
          <Flex align="center" ml={3}>
            <Image boxSize="20px" src="logo-twitter.png" />
            <Box height={26} ml={1}>
              paquito
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
