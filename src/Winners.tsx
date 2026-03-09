import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFirestore } from "reactfire";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { computeScores, type NominationPick } from "./scoring";

interface YearConfig {
  year: string;
  label: string;
  nominationsCollection: string;
  configCollection: string;
}

const YEARS: YearConfig[] = [
  {
    year: "2025",
    label: "2025 (97th)",
    nominationsCollection: "2025-user-nominations",
    configCollection: "2025-config",
  },
  {
    year: "2024",
    label: "2024 (96th)",
    nominationsCollection: "2024-user-nominations",
    configCollection: "2024-config",
  },
  {
    year: "2023",
    label: "2023 (95th)",
    nominationsCollection: "tequiniela-user-nominations",
    configCollection: "config",
  },
];

interface UserEntry {
  uid: string;
  displayName: string;
  photoURL: string;
  created: string;
}

interface YearData {
  users: UserEntry[];
  scores: Record<string, number>;
}

export const Winners = () => {
  const db = useFirestore();
  const [yearData, setYearData] = useState<Record<string, YearData>>({});
  const [loading, setLoading] = useState(true);
  const iconFilter = useColorModeValue(undefined, "invert(1)");
  const borderColor = useColorModeValue("gray.200", "gray.900");
  const winnerColors = ["#a19313", "#717171", "#725112"];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results: Record<string, YearData> = {};

        await Promise.all(
          YEARS.map(
            async ({ year, nominationsCollection, configCollection }) => {
              const [usersSnap, configSnap] = await Promise.all([
                getDocs(collection(db, nominationsCollection)),
                getDoc(doc(db, configCollection, "default")),
              ]);

              const users: (UserEntry & {
                nominations: Record<string, NominationPick>;
              })[] = usersSnap.docs.map((d) => {
                const data = d.data();
                return {
                  uid: data.uid,
                  displayName: data.displayName,
                  photoURL: data.photoURL,
                  created: data.created,
                  nominations: data.nominations ?? {},
                };
              });

              const winners = configSnap.exists()
                ? (configSnap.data()?.winners ?? {})
                : {};
              const scores = computeScores(users, winners);

              users.sort((a, b) => {
                const pointsCompare =
                  (scores[b.uid] ?? 0) - (scores[a.uid] ?? 0);
                if (pointsCompare !== 0) return pointsCompare;
                return (
                  new Date(a.created).getTime() - new Date(b.created).getTime()
                );
              });

              results[year] = { users, scores };
            },
          ),
        );

        setYearData(results);
      } catch (e) {
        console.error("Error fetching winners data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [db]);

  const renderYear = (year: string) => {
    const data = yearData[year];
    if (!data || data.users.length === 0) {
      return (
        <Text mt={4} color="gray.400">
          No hay datos para este año.
        </Text>
      );
    }

    return (
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
          {data.users.map((user, index) => (
            <Flex
              borderRadius="xl"
              key={user.uid}
              bgColor={winnerColors[index] ?? "gray.800"}
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
                {index + 1}
              </Text>
              <Flex w="auto" flex={1} align="center">
                <Image boxSize="20px" src={user.photoURL} />
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
                  {user.displayName}
                </Text>
              </Flex>
              <Text
                w="90px"
                pl={10}
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
              >
                {data.scores[user.uid] ?? 0}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>
    );
  };

  return (
    <Flex
      direction="column"
      className="winners-container"
      m={{
        base: "0 10px",
        sm: "0 60px",
        md: "0 60px",
        lg: "0 100px",
        xl: "0 200px",
        "2xl": "0 250px",
      }}
    >
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <Image
          filter={iconFilter}
          src="figure.svg"
          boxSize="25px"
          alt="Winners"
        />
        <Flex align="center" minHeight="45px">
          <Heading
            fontWeight="extrabold"
            as="h1"
            fontSize={{
              base: "19px",
              lg: "20px",
            }}
            mr={2}
            ml={2}
          >
            Ganadores
          </Heading>
        </Flex>
      </Flex>

      {loading ? (
        <Flex align="center" justify="center" w="100%" h="400px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Box px={2}>
          <Tabs variant="soft-rounded" colorScheme="yellow">
            <TabList>
              {YEARS.map(({ year, label }) => (
                <Tab key={year} fontSize={{ base: "sm", md: "md" }}>
                  {label}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {YEARS.map(({ year }) => (
                <TabPanel key={year} px={0}>
                  {renderYear(year)}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      )}
    </Flex>
  );
};
