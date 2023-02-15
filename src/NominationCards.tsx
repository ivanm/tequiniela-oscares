import { Box, Wrap, WrapItem, Flex, Image, Heading } from "@chakra-ui/react";
import SmallCard from "./cards/SmallCard";
import BigCard from "./cards/BigCard";
import MiniCard from "./cards/MiniCard";
import type { Nomination } from "./nominees";

export interface NominationCardsProps {
  containerDirection: "row" | "column";
  cardsDirection: "row" | "column";
  nominations: Nomination[];
  size: "big" | "small" | "mini";
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
      <Flex align="center" minHeight="45px">
        <Heading
          fontWeight="extrabold"
          as="h1"
          fontSize={{
            base: size !== "mini" ? "20px" : "15px",
            lg: size !== "mini" ? "24px" : "17px",
          }}
          mr={2}
          maxWidth={{base: 150, lg: 220}}
        >
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
            {size === "mini" ? <MiniCard title={movie} status="normal" /> : ""}
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  </Flex>
);

export default NominationCards;
