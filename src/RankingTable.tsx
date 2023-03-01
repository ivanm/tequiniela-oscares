import { useMemo } from 'react';
import { Box, Card, Flex, Text, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { allUsersNominationsState } from "./atoms";

export const RankingTable = () => {

  const allUserNominations = useRecoilValue(allUsersNominationsState);

  //TODO  Sort by score when voting ends
  const sortedAllUserNominations = useMemo(() => {
    const sorted = [...allUserNominations];
    sorted.sort((a, b) => a.data.displayName.localeCompare(b.data.displayName));
    return sorted;
  }, [allUserNominations]);

  return (
    <Card mt={4}>
      <Flex justify="space-around" borderBottom="1px solid #aaa">
        <Box w="10%" fontSize="lg" pl={8} pt={4} pb={4}>
          #
        </Box>
        <Box w="60%" fontSize="lg" pl={8} pt={4} pb={4}>
          Usuario
        </Box>
        <Box w="30%" fontSize="lg" pl={8} pt={4} pb={4}>
          Aciertos
        </Box>
      </Flex>
      {sortedAllUserNominations.map(
        ({ data: { displayName, photoURL } }, index) => (
          <Flex key={index} pb={3} pt={3} borderTop="1px solid #ddd">
            <Text w="10%" pl={8}>
              {""}
            </Text>
            <Flex w="60%" pl={8}>
              <Image boxSize="20px" src={photoURL} />
              <Text w="60%" pl={2}>
                {displayName}
              </Text>
            </Flex>
            <Text w="30%" pl={8}>
              -
            </Text>
          </Flex>
        )
      )}
    </Card>
  );
};
