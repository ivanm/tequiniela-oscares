import { useState, useCallback, useEffect } from "react";
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
  useColorModeValue,
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

type Status = "normal" | "won" | "lost";

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
  const [status, setStatus] = useState<Status>("normal");
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  // const iconFilter = useColorModeValue(undefined, "invert(1)");

  const [userNominations, setUserNominations] =
    useRecoilState<UserNominations>(userNominationsState);

  const hasNominationTimePassed = useRecoilValue<boolean>(
    hasNominationTimePassedState
  );

  const winnerNominations = useRecoilValue<WinnerNominations>(
    winnerNominationsState
  );

  const matchKey = nominations.some((n) => n.nameSlug)
    ? "nameSlug"
    : "movieSlug";
  const matchTo = userNominations[nominationSlug]?.[matchKey];
  
  const isWinner =
    winnerNominations[nominationSlug] &&
    winnerNominations[nominationSlug][matchKey] &&
    winnerNominations[nominationSlug][matchKey] === matchTo;
  const isWinnerPending =
    winnerNominations[nominationSlug] &&
    winnerNominations[nominationSlug][matchKey] &&
    winnerNominations[nominationSlug][matchKey] === "";

  const calcStatus = useCallback(() => {
    if (
      userNominations[nominationSlug] &&
      hasNominationTimePassed &&
      isWinnerPending === false
    ) {
      if (isWinner) {
        setStatus("won");
      } else {
        setStatus("lost");
      }
    } else {
      setStatus("normal");
    }
  }, [hasNominationTimePassed, isWinner, userNominations]);

  useEffect(() => {
    calcStatus();
  }, [calcStatus]);

  const accordionBg = useColorModeValue("gray.300", "gray.400");
  const accordionBorderColor = useColorModeValue("gray.200", "gray.900");
  const selectedNomination = userNominations[nominationSlug]
    ? userNominations[nominationSlug].nameSlug
      ? userNominations[nominationSlug].name
      : userNominations[nominationSlug].movie
    : null;

  return (
    <Accordion
      width="380px"
      allowToggle
      bg={accordionBg}
      borderRadius="13px"
      border="1px"
      borderColor={accordionBorderColor}
      display="inline-table"
    >
      <AccordionItem borderRadius="13px" border="1px" borderColor="transparent">
        <AccordionButton padding="10px">
          <Flex grow={1} justify="space-between" align="center">
            <Flex align="center" grow={1}>
              <Image
                boxSize="24px"
                src={selectedNomination ? "selectedOn.png" : "selectedOff.png"}
                alt="selected off"
                mr={2}
              />
              <Flex justify="center" direction="column" minHeight="50px">
                <Text textAlign="left" fontSize="sm" fontWeight="extrabold">
                  {title}
                </Text>
                <Text textAlign="left" fontSize="xs">
                  {selectedNomination}
                </Text>
              </Flex>
              <Flex ml="auto" mr="5px">
                {status === "won" ? (
                  <Box
                    bg="#29b00f"
                    borderRadius="10px"
                    padding="2px 10px"
                    fontSize="xs"
                  >
                    Acierto
                  </Box>
                ) : status === "lost" ? (
                  <Box
                    bg="#c11a1a"
                    borderRadius="10px"
                    padding="2px 10px"
                    fontSize="xs"
                  >
                    Error
                  </Box>
                ) : null}
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
  );
};

export default NominationCardsNew;
