import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  // Image,
  // useColorModeValue,
} from "@chakra-ui/react";

// import BigCard from "./cards/BigCard";
// import MiniCard from "./cards/MiniCard";
import SmallCard from "./cards/SmallCard";
import type { Nomination } from "./nominees";

export interface NominationCardsNewProps {
  nominations: Nomination[];
  nominationSlug: string;
  title: string;
}
const NominationCardsNew = ({
  nominations,
  nominationSlug,
  title,
}: NominationCardsNewProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  // const iconFilter = useColorModeValue(undefined, "invert(1)");

  return (
    <Flex grow={1} basis={0} direction="column">
      <Accordion
        allowToggle
        bg="#2f2f2f"
        borderRadius="13px"
        border="1px"
        borderColor="black"
      >
        <AccordionItem
          borderRadius="13px"
          border="1px"
          borderColor="transparent"
        >
          <AccordionButton>
            <Flex grow={1} justify="space-between" align="center">
              <Flex align="center">
                <Image
                  boxSize="24px"
                  src="selectedOn.png"
                  alt="selected off"
                  mr={4}
                />
                <Flex direction="column" minHeight="50px">
                  <Text textAlign="left" fontSize="lg" fontWeight="extrabold">
                    {title}
                  </Text>
                  <Text textAlign="left" fontSize="sm">
                    Oppenheimer
                  </Text>
                </Flex>
              </Flex>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Grid templateColumns={"1fr"} gap={"10px"}>
              {nominations.map(({ movie, movieSlug, name, nameSlug }, i) => (
                <GridItem key={i}>
                  <Box>
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
                    />
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default NominationCardsNew;
