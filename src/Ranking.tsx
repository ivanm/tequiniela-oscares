import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { RankingTable } from "./RankingTable";

export const Ranking = () => (
  <Flex
    direction="column"
    className="ranking-container"
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
      <Image src="ranking.svg" alt="Ranking Figure" />
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
    <Flex pl={2} pr={2}>
      <Text>
        La ceremonia de los Premios Óscar se llevará a cabo el domingo 12 de
        marzo de 2023. Durante el evento, actualizaremos los resultados tan
        pronto como se vayan anunciando, y este ranking se actualizará conforme
        a los resultados de los participantes.
      </Text>
    </Flex>
    <RankingTable />
  </Flex>
);
