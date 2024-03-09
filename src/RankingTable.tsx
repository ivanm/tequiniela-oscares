import { useMemo, useEffect } from "react";
import {
  Box,
  Card,
  Flex,
  Text,
  Image,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";

import {
  allUsersNominationsState,
  winnerNominationsState,
  hasNominationTimePassedState,
} from "./atoms";
import useResize from "./hooks/useResize";

export const RankingTable = () => {
  const allUserNominations = useRecoilValue(allUsersNominationsState);
  const winnerNominations = useRecoilValue(winnerNominationsState);
  const hasNominationTimePassed = useRecoilValue(hasNominationTimePassedState);

  const matchKeysNameSlug = [
    "directing",
    "supportingActor",
    "supportingActress",
    "leadingActress",
    "leadingActor",
    "originalSong",
  ];

  const { resizeEffect } = useResize();

  useEffect(() => {
    resizeEffect();
  }, [allUserNominations]);

  const uidPointsMap = useMemo(() => {
    let uidPointsMap: { [key: string]: number } = {};
    if (
      hasNominationTimePassed &&
      Object.keys(winnerNominations).length !== 0 &&
      allUserNominations.length !== 0
    ) {
      allUserNominations.forEach((userNomination) => {
        uidPointsMap[userNomination.data.uid] = 0;
      });
      Object.keys(winnerNominations).forEach((winnerNominationsKey) => {
        const slugKey = matchKeysNameSlug.includes(winnerNominationsKey)
          ? "nameSlug"
          : "movieSlug";
        const winner = winnerNominations[winnerNominationsKey][slugKey];

        if (winner && winner !== "") {
          allUserNominations.forEach((userNomination) => {
            if (
              userNomination &&
              userNomination.data &&
              userNomination.data.nominations &&
              userNomination.data.nominations[winnerNominationsKey] &&
              userNomination.data.nominations[winnerNominationsKey][slugKey]
            ) {
              if (
                userNomination.data.nominations[winnerNominationsKey][
                  slugKey
                ] == winner
              ) {
                uidPointsMap = {
                  ...uidPointsMap,
                  [userNomination.data.uid]:
                    uidPointsMap[userNomination.data.uid] + 1,
                };
              }
            }
          });
        }
      });
      return uidPointsMap;
    }
  }, [allUserNominations, hasNominationTimePassed, winnerNominations]);

  const sortedAllUserNominations = useMemo(() => {
    if (!hasNominationTimePassed) {
      const sorted = [...allUserNominations];
      sorted.sort((a, b) =>
        a.data.displayName.localeCompare(b.data.displayName)
      );
      return sorted;
    } else if (
      Object.keys(winnerNominations).length !== 0 &&
      allUserNominations.length !== 0 &&
      uidPointsMap != null
    ) {
      const sorted = [...allUserNominations];
      sorted.sort(
        (
          a: { data: { uid: string; created: string } },
          b: { data: { uid: string; created: string } }
        ) => {
          const pointsCompare =
            uidPointsMap[b.data.uid] - uidPointsMap[a.data.uid];
          if (pointsCompare !== 0) {
            return pointsCompare;
          } else {
            // If both users have the same points sort by Date
            const aDate = new Date(a.data.created);
            const bDate = new Date(b.data.created);
            return aDate.getTime() - bDate.getTime();
          }
        }
      );
      return sorted;
    }
  }, [
    allUserNominations,
    hasNominationTimePassed,
    winnerNominations,
    uidPointsMap,
  ]);

  // const borderColor = useColorModeValue("1px solid #aaa", "1px solid #222");
  const borderColor = useColorModeValue("gray.200", "gray.900");
  const winnerColors = ["#a19313", "#717171", "#725112"];
  const completedVotationAndWinners =
    hasNominationTimePassed &&
    Object.values(winnerNominations).every((n) =>
      n.nameSlug ? n.nameSlug !== "" : n.movieSlug !== ""
    );

  return allUserNominations.length !== 0 ? (
    <Card
      mt={4}
      bg="gray.400"
      border="1px"
      borderColor={borderColor}
      borderRadius="2xl"
    >
      <Flex direction="column" pb={2}>
        <Flex justify="space-between">
          <Box
            w="60px"
            fontSize={{ base: "sm", sm: "md" }}
            pl={4}
            pt={3}
            pb={3}
          ></Box>
          <Box
            flex={1}
            w="66%"
            fontSize={{ base: "xs", sm: "sm" }}
            pl={4}
            pt={6}
            pb={3}
          >
            Nombre
          </Box>
          <Box
            w="90px"
            fontSize={{ base: "xs", sm: "sm" }}
            pl={4}
            pr={2}
            pt={6}
            pb={3}
          >
            Aciertos
          </Box>
        </Flex>
        {sortedAllUserNominations != null &&
          sortedAllUserNominations.map(
            ({ data: { displayName, photoURL, uid, nominations } }, index) => (
              <Flex
                borderRadius="xl"
                key={index}
                bgColor={
                  completedVotationAndWinners && winnerColors[index]
                    ? winnerColors[index]
                    : "gray.800"
                }
                padding={3}
                mx={2}
                my={1}
                justify="space-between"
              >
                <Text
                  w="60px"
                  pl={4}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                >
                  {hasNominationTimePassed ? index + 1 : ""}
                </Text>
                <Flex w="auto" flex={1} align="center">
                  <Image boxSize="20px" src={photoURL} />
                  <Text
                    fontSize="md"
                    pl={2}
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    display="inline"
                    w="auto"
                    maxWidth={{ base: "187px", md: "none" }}
                  >
                    {displayName}
                  </Text>
                  {Object.keys(nominations).length >= 23 ? (
                    <CheckIcon ml={2} boxSize="10px" color="cards.won" mr={2} />
                  ) : null}
                </Flex>
                <Text
                  w="90px"
                  pl={10}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                >
                  {hasNominationTimePassed
                    ? uidPointsMap?.[uid]
                      ? uidPointsMap[uid]
                      : 0
                    : ""}
                </Text>
              </Flex>
            )
          )}
      </Flex>
    </Card>
  ) : (
    <Flex align="center" justify="center" w="100%" h="400px">
      <Spinner size="xl" />
    </Flex>
  );
};
