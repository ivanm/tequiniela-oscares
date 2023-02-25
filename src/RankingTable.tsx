import { Box, Card, Flex, Text, Image } from "@chakra-ui/react";
export const RankingTable = () => {
  const mockResults = [
    { user: "Liam", points: 92 },
    { user: "Emma", points: 13 },
    { user: "Noah", points: 41 },
    { user: "Olivia", points: 82 },
    { user: "William", points: 67 },
    { user: "Isabella", points: 47 },
    { user: "James", points: 53 },
    { user: "Sophia", points: 77 },
    { user: "Oliver", points: 28 },
    { user: "Charlotte", points: 62 },
    { user: "Benjamin", points: 24 },
    { user: "Mia", points: 31 },
    { user: "Elijah", points: 36 },
    { user: "Amelia", points: 42 },
    { user: "Lucas", points: 94 },
    { user: "Harper", points: 20 },
    { user: "Mason", points: 38 },
    { user: "Evelyn", points: 61 },
    { user: "Logan", points: 30 },
    { user: "Abigail", points: 71 },
    { user: "Ethan", points: 72 },
    { user: "Emily", points: 79 },
    { user: "Jacob", points: 18 },
    { user: "Elizabeth", points: 33 },
    { user: "Michael", points: 56 },
    { user: "Avery", points: 16 },
    { user: "Grace", points: 45 },
    { user: "Carter", points: 27 },
    { user: "Sofia", points: 65 },
    { user: "Luke", points: 57 },
    { user: "Aria", points: 23 },
    { user: "Daniel", points: 89 },
    { user: "Chloe", points: 14 },
    { user: "Henry", points: 75 },
    { user: "Ella", points: 54 },
    { user: "Matthew", points: 87 },
    { user: "Victoria", points: 39 },
    { user: "Jackson", points: 68 },
    { user: "Aubrey", points: 50 },
    { user: "David", points: 51 },
    { user: "Addison", points: 59 },
    { user: "Joseph", points: 70 },
    { user: "Natalie", points: 81 },
    { user: "Samuel", points: 85 },
    { user: "Hannah", points: 74 },
    { user: "Wyatt", points: 22 },
    { user: "Scarlett", points: 44 },
    { user: "Andrew", points: 83 },
    { user: "Lily", points: 58 },
    { user: "Joshua", points: 48 },
    { user: "Eleanor", points: 37 },
    { user: "Christopher", points: 95 },
  ];

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
      {mockResults.map(({ user, points }, index) => (
        <Flex key={index} pb={3} pt={3} borderTop="1px solid #ddd">
          <Text w="10%" pl={8}>
            {index + 1}
          </Text>
          <Flex w="60%" pl={8}>
            <Image boxSize="20px" src="logo-twitter.png" />
            <Text w="60%" pl={2}>
              {user}
            </Text>
          </Flex>
          <Text w="30%" pl={8}>
            {points}
          </Text>
        </Flex>
      ))}
    </Card>
  );
};
