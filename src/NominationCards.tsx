import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import BigCard from "./cards/BigCard";
import MiniCard from "./cards/MiniCard";
import SmallCard from "./cards/SmallCard";
import type { Nomination } from "./nominees";

export interface NominationCardsProps {
  containerDirection: "row" | "column";
  cardsDirection: "row" | "column";
  nominations: Nomination[];
  nominationSlug: string;
  size: "big" | "small" | "mini";
  title: string;
  transform?: string | undefined;
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
  nominationSlug,
  size,
  title,
  transform,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}: NominationCardsProps) => {
  const iconFilter = useColorModeValue(undefined, "invert(1)");

  return (
    <Flex
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      direction={containerDirection}
      grow={1}
      basis={0}
    >
      <Flex pl={3} pr={3} pt={3} pb={3}>
        <Image filter={iconFilter} src="figure.svg" alt="Oscar Figure" />
        <Flex align="center" minHeight="45px">
          <Heading
            fontWeight="extrabold"
            as="h1"
            fontSize={{
              base: "19px",
              lg: size !== "mini" ? "20px" : "16px",
            }}
            mr={2}
          >
            {title}
          </Heading>
        </Flex>
      </Flex>
      <Grid
        templateColumns={
          cardsDirection === "row"
            ? {
                base: "repeat(auto-fit, minmax(114px, 1fr))",
                sm: "repeat(auto-fit, minmax(120px, 1fr))",
                md: "repeat(auto-fit, minmax(138px, 1fr))",
                lg: "repeat(auto-fit, minmax(183px, 1fr))",
                xl: "repeat(auto-fit, minmax(245px, 1fr))",
                "2xl": "repeat(auto-fit, minmax(270px, 1fr))",
              }
            : "1fr"
        }
        gap={"10px"}
      >
        {nominations.map(({ movie, movieSlug, name, nameSlug }, i) => (
          <GridItem key={i}>
            <Box>
              {size === "small" ? (
                <SmallCard
                  imgSrc={
                    nameSlug
                      ? `portraits/${nameSlug}.jpg`
                      : `moviePosters/${movieSlug}.jpg`
                  }
                  matchKey={nameSlug ? "nameSlug" : "movieSlug"}
                  title={movie}
                  name={name}
                  movieSlug={movieSlug}
                  nameSlug={nameSlug}
                  nominationSlug={nominationSlug}
                  nomination={{
                    movie,
                    movieSlug,
                    ...(name ? { name } : {}),
                    ...(nameSlug ? { nameSlug } : {}),
                  }}
                  transform={transform}
                />
              ) : (
                ""
              )}
              {size === "big" ? (
                <BigCard
                  imgSrc={`moviePosters/${movieSlug}.jpg`}
                  title={movie}
                  movieSlug={movieSlug}
                  nominationSlug={nominationSlug}
                  nomination={{
                    movie,
                    movieSlug,
                  }}
                  transform={transform}
                />
              ) : (
                ""
              )}
              {size === "mini" ? (
                <MiniCard
                  title={movie}
                  movieSlug={movieSlug}
                  nominationSlug={nominationSlug}
                  nomination={{
                    movie,
                    movieSlug,
                  }}
                />
              ) : (
                ""
              )}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default NominationCards;
