import { Box, Flex, Image, Heading, Grid, GridItem } from "@chakra-ui/react";
import SmallCard from "./cards/SmallCard";
import BigCard from "./cards/BigCard";
import MiniCard from "./cards/MiniCard";
import type { Nomination } from "./nominees";

export interface NominationCardsProps {
  containerDirection: "row" | "column";
  cardsDirection: "row" | "column";
  nominations: Nomination[];
  nominationSlug: string;
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
  nominationSlug,
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
      <Image src="figure.svg" alt="Oscar Figure" />
      <Flex align="center" minHeight="45px">
        <Heading
          fontWeight="extrabold"
          as="h1"
          fontSize={{
            base: size !== "mini" ? "18px" : "17px",
            lg: size !== "mini" ? "20px" : "18px",
          }}
          mr={2}
          maxWidth={{ base: 300, lg: size !== "mini" ? 230 : "160px", xl: 280 }}
        >
          {title}
        </Heading>
      </Flex>
    </Flex>
    <Grid
      templateColumns={
        cardsDirection === "row"
          ? {
              base: "repeat(auto-fit, minmax(100px, 1fr))",
              sm: "repeat(auto-fit, minmax(200px, 1fr))",
              lg: "repeat(auto-fit, minmax(200px, 1fr))",
              xl: "repeat(auto-fit, minmax(220px, 1fr))",
            }
          : "1fr"
      }
      gap={3}
    >
      {nominations.map(({ movie, movieSlug, name, nameSlug }, i) => (
        <GridItem key={i}>
          <Box p={2}>
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
                  name,
                  nameSlug,
                }}
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

export default NominationCards;
