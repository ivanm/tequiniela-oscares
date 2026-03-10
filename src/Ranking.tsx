import {
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { RankingTable } from "./RankingTable";

export const Ranking = () => {
  const { t } = useTranslation();
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
            {t("ranking.title")}
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} mb={3} direction="column">
        <Text>
          <Trans i18nKey="ranking.description" components={{ bold: <b /> }} />
        </Text>
        <Text mt={2}>
          <Trans i18nKey="ranking.scoring" components={{ bold: <b /> }} />
        </Text>
      </Flex>
      <RankingTable />
    </Flex>
  );
};
