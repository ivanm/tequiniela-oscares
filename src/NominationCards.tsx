import { Box, Wrap, WrapItem, Flex, Image, Heading } from "@chakra-ui/react";
import SmallCard from "./cards/SmallCard";
import BigCard from "./cards/BigCard";
import type { Nomination } from "./nominees";

export interface NominationCardsProps {
  containerDirection: "row" | "column";
  cardsDirection: "row" | "column";
  nominations: Nomination[];
  size: "big" | "small";
  title: string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
}
const NominationCards = ({
  containerDirection,
  cardsDirection,
  nominations,
  size,
  title,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}: NominationCardsProps) => (
  <Flex direction={containerDirection}>
    <Flex mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      <Image src="/figure.svg" alt="Oscar Figure" />
      <Flex align="center">
        <Heading fontWeight="extrabold" as="h1" fontSize="24px" mr={2}>
          {title}
        </Heading>
      </Flex>
    </Flex>
    <Wrap direction={cardsDirection}>
      {nominations.map(({ imgSrc, movie, name }, i) => (
        <WrapItem key={i}>
          <Box p={2}>
            {size === "small" ? (
              <SmallCard
                imgSrc={imgSrc}
                title={movie}
                name={name}
                status="normal"
              />
            ) : (
              ""
            )}
            {size === "big" ? (
              <BigCard imgSrc={imgSrc} title={movie} status="normal" />
            ) : (
              ""
            )}
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  </Flex>
);

export default NominationCards;
