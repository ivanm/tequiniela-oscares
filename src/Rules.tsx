import {
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Badge,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export const Rules = () => {
  const { t } = useTranslation();
  const iconFilter = useColorModeValue(undefined, "invert(1)");

  return (
    <Flex
      direction="column"
      className="rules-container"
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
          src="rules.svg"
          boxSize="25px"
          alt="Rules Figure"
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
            {t("rules.title")}
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} direction="column" gap={2}>
        <Text>{t("rules.welcome")}</Text>
        <Text>{t("rules.joinFun")}</Text>
        <Text>{t("rules.forEveryone")}</Text>
        <Text>{t("rules.getReady")}</Text>
      </Flex>
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <Image
          filter={iconFilter}
          src="ranking.svg"
          boxSize="25px"
          alt="Ranking Figure"
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
            {t("rules.prizesTitle")}
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} direction="column" gap={4}>
        <Flex
          align="center"
          gap={3}
          p={3}
          borderRadius="md"
          bg="rgba(161, 147, 19, 0.15)"
          borderLeft="4px solid #a19313"
        >
          <Badge
            colorScheme="yellow"
            fontSize="md"
            px={2}
            py={1}
            borderRadius="md"
          >
            {t("rules.prizeFirst")}
          </Badge>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("rules.prize1")}
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              {t("rules.donatedBy")}{" "}
              <Link href="https://www.threads.com/@masiosare" isExternal>
                @masiosare
              </Link>
            </Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          gap={3}
          p={3}
          borderRadius="md"
          bg="rgba(113, 113, 113, 0.15)"
          borderLeft="4px solid #717171"
        >
          <Badge
            colorScheme="gray"
            fontSize="md"
            px={2}
            py={1}
            borderRadius="md"
          >
            {t("rules.prizeSecond")}
          </Badge>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("rules.prize2")}
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              {t("rules.donatedBy")}{" "}
              <Link href="https://twitter.com/thewarpaint" isExternal>
                @thewarpaint
              </Link>
            </Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          gap={3}
          p={3}
          borderRadius="md"
          bg="rgba(114, 81, 18, 0.15)"
          borderLeft="4px solid #725112"
        >
          <Badge
            colorScheme="orange"
            fontSize="md"
            px={2}
            py={1}
            borderRadius="md"
          >
            {t("rules.prizeThird")}
          </Badge>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("rules.prize3")}
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              {t("rules.donatedBy")}{" "}
              <Link href="https://www.threads.com/@o.ladino" isExternal>
                @Cani
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <AtSignIcon boxSize="25px" />
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
            {t("rules.teamTitle")}
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} direction="column" gap={2}>
        <Text>
          <b>{t("rules.code")}:</b>{" "}
          <Link href="https://www.threads.net/@o.ladino" isExternal>
            @canitoy
          </Link>
          ,{" "}
          <Link href="https://mstdn.social/@Masiosare" isExternal>
            @Masiosare
          </Link>
          ,{" "}
          <Link href="https://twitter.com/vaan" isExternal>
            @vaan
          </Link>
        </Text>
        <Text>
          <b>{t("rules.direction")}</b>: Enrique Segoviano
        </Text>
        <Text>
          <b>{t("rules.design")}</b>:{" "}
          <Link href="https://twitter.com/chrispulze" isExternal>
            @chrispulze
          </Link>
        </Text>
        <Text>
          <b>{t("rules.prizes")}:</b>{" "}
          <Link href="https://www.threads.com/@masiosare" isExternal>
            @masiosare
          </Link>
          ,{" "}
          <Link href="https://twitter.com/thewarpaint" isExternal>
            @thewarpaint
          </Link>
          ,{" "}
          <Link href="https://www.threads.com/@o.ladino" isExternal>
            @Cani
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
