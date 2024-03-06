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
  // Image,
  // useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";

// import BigCard from "./cards/BigCard";
// import MiniCard from "./cards/MiniCard";
// import SmallCard from "./cards/SmallCard";
import CardNew from "./CardNew";
import {
  type Nomination,
  type UserNominations,
  type WinnerNominations,
} from "./nominees";

import {
  hasNominationTimePassedState,
  userNominationsState,
  winnerNominationsState,
} from "./atoms";

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

  const [userNominations, setUserNominations] =
    useRecoilState<UserNominations>(userNominationsState);

  const hasNominationTimePassed = useRecoilValue<boolean>(
    hasNominationTimePassedState
  );

  const winnerNominations = useRecoilValue<WinnerNominations>(
    winnerNominationsState
  );

  const selectedNomination = userNominations[nominationSlug]
    ? userNominations[nominationSlug].nameSlug
      ? userNominations[nominationSlug].name
      : userNominations[nominationSlug].movie
    : null;

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
                  src={
                    selectedNomination ? "selectedOn.png" : "selectedOff.png"
                  }
                  alt="selected off"
                  mr={4}
                />
                <Flex direction="column" minHeight="50px">
                  <Text textAlign="left" fontSize="lg" fontWeight="extrabold">
                    {title}
                  </Text>
                  <Text textAlign="left" fontSize="sm">
                    {selectedNomination}
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
                    <CardNew
                      imgSrc={
                        nameSlug
                          ? `portraits/${nameSlug}.png`
                          : `moviePosters/${movieSlug}.png`
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
                      transform=""
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
