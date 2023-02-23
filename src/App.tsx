import { CSSReset, Box, Flex, Heading, Button, Image } from "@chakra-ui/react";
import nominees from "./nominees";
import NominationCards from "./NominationCards";

import { useRecoilState } from "recoil";
import { hasNominationTimePassedState } from "./atoms";

export const App = () => {
  // Blocks Frontend after 2023-03-12, needs Backend validation
  // const hasNominationTimePassed = new Date().getTime() > new Date('2023-03-12').getTime();
  // Uncomment to fast-forward time to 2023-03-12
  const [hasNominationTimePassed, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState
  );

  console.log("passed", hasNominationTimePassed);
  return (
    <>
      <CSSReset />
      <Box
        as="header"
        position="fixed"
        w="100%"
        background="#fff"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
        zIndex={2}
      >
        <Flex align="center" p={4} bg="transparent" color="black">
          <Heading as="h1" size="lg">
            TEQU
          </Heading>
          <Image src="figure.svg" alt="Oscar Figure" />
          <Heading as="h1" size="lg" mr={5}>
            NIELA
          </Heading>
          <Button mr={2}>Mi Quiniela</Button>
          <Button
            className="inactive"
            mr={2}
            onClick={() => {
              setHasNominationTimePassed(true);
            }}
          >
            Ranking
          </Button>
          <Button className="inactive" mr={2}>
            Reglas
          </Button>
          <Flex ml="auto">
            <Button className="inactive">Compartir</Button>
            <Flex align="center" ml={3}>
              <Image boxSize="20px" src="logo-twitter.png" />
              <Box height={26} ml={1}>
                paquito
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box as="main" mt="72px" mb="80px" w="calc(100vw - 30px)">
        <Flex
          direction="column"
          className="card-container"
          m={{
            base: "0 10px",
            sm: "0 20px",
            md: "0 30px",
            lg: "0 30px",
            xl: "0 20px",
            "2xl": "0 150px",
          }}
        >
          <NominationCards
            containerDirection="column"
            cardsDirection="row"
            nominations={nominees.bestPicture}
            size="big"
            title="Best Picture"
            nominationSlug="bestPicture"
            ml={3}
            mt={2}
            mb={3}
            pt={4}
          />
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.directing}
              size="small"
              title="Best Director"
              nominationSlug="directing"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.leadingActor}
              size="small"
              title="Best Actor"
              nominationSlug="leadingActor"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.leadingActress}
              size="small"
              title="Best Actress"
              nominationSlug="leadingActress"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.supportingActor}
              size="small"
              title="Best Supporting Actor"
              nominationSlug="supportingActor"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.supportingActress}
              size="small"
              title="Best Supporting Actress"
              nominationSlug="supportingActress"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.animatedFeature}
              size="small"
              title="Best Animated Feature Film"
              nominationSlug="animatedFeature"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.originalScreenplay}
              size="mini"
              title="Best Original Screenplay"
              nominationSlug="originalScreenplay"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.adaptedScreenplay}
              size="mini"
              title="Best Adapted Screenplay"
              nominationSlug="adaptedScreenplay"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.internationalFeature}
              size="mini"
              title="Best International Feature Film"
              nominationSlug="internationalFeature"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.documentaryFeature}
              size="mini"
              title="Best Documentary Feature"
              nominationSlug="documentaryFeature"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.documentaryShort}
              size="mini"
              title="Best Documentary Short Subject"
              nominationSlug="documentaryShort"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.liveActionShort}
              size="mini"
              title="Best Live Action Short Film"
              nominationSlug="liveActionShort"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.animatedShort}
              size="mini"
              title="Best Animated Short Film"
              nominationSlug="animatedShort"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.originalScore}
              size="mini"
              title="Best Original Score"
              nominationSlug="originalScore"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.originalSong}
              size="mini"
              title="Best Original Song"
              nominationSlug="originalSong"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.sound}
              size="mini"
              title="Best Sound"
              nominationSlug="sound"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.productionDesign}
              size="mini"
              title="Best Production Design"
              nominationSlug="productionDesign"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.cinematography}
              size="mini"
              title="Best Cinematography"
              nominationSlug="cinematography"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.makeup}
              size="mini"
              title="Best Makeup and Hairstyling"
              nominationSlug="makeup"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.costumeDesign}
              size="mini"
              title="Best Costume Design"
              nominationSlug="costumeDesign"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.filmEditing}
              size="mini"
              title="Best Film Editing"
              nominationSlug="filmEditing"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
            <NominationCards
              containerDirection="column"
              cardsDirection="column"
              nominations={nominees.visualEffects}
              size="mini"
              title="Best Visual Effects"
              nominationSlug="visualEffects"
              ml={3}
              mt={6}
              mb={3}
              pt={4}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
