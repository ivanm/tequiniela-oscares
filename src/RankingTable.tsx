import { useMemo } from "react";
import { Box, Card, Flex, Text, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import {
  allUsersNominationsState,
  winnerNominationsState,
  hasNominationTimePassedState,
} from "./atoms";

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
  ];

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
        (a: { data: { uid: string } }, b: { data: { uid: string } }) =>
          uidPointsMap[b.data.uid] - uidPointsMap[a.data.uid]
      );
      return sorted;
    }
  }, [
    allUserNominations,
    hasNominationTimePassed,
    winnerNominations,
    uidPointsMap,
  ]);

  return (
    <Card mt={4}>
      <Flex justify="flex-start" borderBottom="1px solid #aaa">
        <Box w="10%" fontSize="md" pl={4} pt={3} pb={3}>
          #
        </Box>
        <Box w="66%" fontSize="md" pl={4} pt={3} pb={3}>
          Usuario
        </Box>
        <Box w="100px" fontSize="md" pl={4} pr={2} pt={3} pb={3}>
          Aciertos
        </Box>
      </Flex>
      {sortedAllUserNominations != null &&
        sortedAllUserNominations.map(
          ({ data: { displayName, photoURL, uid } }, index) => (
            <Flex key={index} pb={3} pt={3} borderTop="1px solid #ddd">
              <Text w="10%" pl={4}>
                {hasNominationTimePassed ? index + 1 : ""}
              </Text>
              <Flex w="66%" pl={4}>
                <Image boxSize="20px" src={photoURL} />
                <Text fontSize={{ base: "xs", md: "sm" }} w="60%" pl={2}>
                  {displayName}
                </Text>
              </Flex>
              <Text w="100px" pl={4}>
                {uidPointsMap?.[uid] ? uidPointsMap[uid] : 0}
              </Text>
            </Flex>
          )
        )}
    </Card>
  );
};
