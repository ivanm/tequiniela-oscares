import {
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RankingTable } from "./RankingTable";

export const Ranking = () => {
  const iconFilter = useColorModeValue(undefined, "invert(1)");

  return (
    <Flex
      direction="column"
      className="ranking-container"
      m={{
        base: "0 10px",
        sm: "0 60px",
        md: "0 60px",
        lg: "0 100px",
        xl: "0 200px",
        "2xl": "0 250px",
      }}
    >
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <Image
          filter={iconFilter}
          src="ranking.svg"
          boxSize="25px"
          alt="Ranking Figure"
        />
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
            Ranking
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} mb={3} direction="column">
        <Text>
          La ceremonia de los Premios Óscar se llevará a cabo el{" "}
          <b>domingo 10 de marzo de 2024</b>. Durante el evento, actualizaremos
          los resultados tan pronto como se vayan anunciando, y este ranking se
          actualizará conforme a los resultados de los participantes.
        </Text>
        <Text mt={2}>
          Cada acierto de cada categoría equivale a <b>1 punto</b>. El ranking
          ordenará a los usuarios según el número de puntos acumulados. En caso
          de existir un empate, el usuario que se registró primero será el
          ganador.
        </Text>
      </Flex>
      <RankingTable />
    </Flex>
  );
};
