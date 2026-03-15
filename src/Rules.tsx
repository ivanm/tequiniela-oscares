import {
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Badge,
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
      <Flex p={3} mt={2} align="center" gap={2}>
        <Image
          filter={iconFilter}
          src="rules.svg"
          boxSize="25px"
          alt="Rules Figure"
        />
        <Heading fontWeight="extrabold" as="h1" fontSize={{ base: "19px", lg: "20px" }}>
          {t("rules.title")}
        </Heading>
      </Flex>
      <Flex px={2} direction="column" gap={2}>
        <Text>{t("rules.welcome")}</Text>
        <Text>{t("rules.joinFun")}</Text>
        <Text>{t("rules.forEveryone")}</Text>
        <Text>{t("rules.getReady")}</Text>
      </Flex>

      <Flex p={3} mt={2} align="center" gap={2}>
        <Image
          filter={iconFilter}
          src="ranking.svg"
          boxSize="25px"
          alt="Ranking Figure"
        />
        <Heading fontWeight="extrabold" as="h1" fontSize={{ base: "19px", lg: "20px" }}>
          {t("rules.prizesTitle")}
        </Heading>
      </Flex>
      <Flex px={2} direction="column" gap={3}>
        <Flex align="baseline" gap={2} flexWrap="wrap">
          <Badge colorScheme="yellow" fontSize="sm">{t("rules.prizeFirst")}</Badge>
          <Text fontWeight="bold">{t("rules.prize1")}</Text>
          <Text fontSize="sm" opacity={0.7}>
            {t("rules.donatedBy")}{" "}
            <Link href="https://www.threads.com/@masiosare" isExternal>
              @masiosare
            </Link>
          </Text>
        </Flex>
        <Flex align="baseline" gap={2} flexWrap="wrap">
          <Badge colorScheme="gray" fontSize="sm">{t("rules.prizeSecond")}</Badge>
          <Text fontWeight="bold">{t("rules.prize2")}</Text>
          <Text fontSize="sm" opacity={0.7}>
            {t("rules.donatedBy")}{" "}
            <Link href="https://twitter.com/thewarpaint" isExternal>
              @thewarpaint
            </Link>
          </Text>
        </Flex>
        <Flex align="baseline" gap={2} flexWrap="wrap">
          <Badge colorScheme="orange" fontSize="sm">{t("rules.prizeThird")}</Badge>
          <Text fontWeight="bold">{t("rules.prize3")}</Text>
          <Text fontSize="sm" opacity={0.7}>
            {t("rules.donatedBy")}{" "}
            <Link href="https://www.threads.com/@o.ladino" isExternal>
              @Cani
            </Link>
          </Text>
        </Flex>
      </Flex>

      <Flex p={3} mt={2} align="center" gap={2}>
        <AtSignIcon boxSize="25px" />
        <Heading fontWeight="extrabold" as="h1" fontSize={{ base: "19px", lg: "20px" }}>
          {t("rules.teamTitle")}
        </Heading>
      </Flex>
      <Flex px={2} direction="column" gap={2}>
        <Text>
          <b>{t("rules.code")}:</b>{" "}
          <Link href="https://www.threads.net/@o.ladino" isExternal>@canitoy</Link>,{" "}
          <Link href="https://mstdn.social/@Masiosare" isExternal>@Masiosare</Link>,{" "}
          <Link href="https://twitter.com/vaan" isExternal>@vaan</Link>
        </Text>
        <Text>
          <b>{t("rules.direction")}</b>: Enrique Segoviano
        </Text>
        <Text>
          <b>{t("rules.design")}</b>:{" "}
          <Link href="https://twitter.com/chrispulze" isExternal>@chrispulze</Link>
        </Text>
        <Text>
          <b>{t("rules.prizes")}:</b>{" "}
          <Link href="https://www.threads.com/@masiosare" isExternal>@masiosare</Link>,{" "}
          <Link href="https://twitter.com/thewarpaint" isExternal>@thewarpaint</Link>,{" "}
          <Link href="https://www.threads.com/@o.ladino" isExternal>@Cani</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
