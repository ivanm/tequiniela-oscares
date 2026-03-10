import { Flex, Image, Card, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();
  const welcomeBg = useColorModeValue("gray.300", "gray.400");
  return (
    <Card bg={welcomeBg} mt={3} p={5}>
      <Flex align="center">
        <Flex direction="column">
          <Text fontSize={{ base: "20px", md: "30px" }}>
            {t("welcome.title")}
          </Text>
          <Text fontSize={{ base: "xs", md: "md" }}>
            {t("welcome.description")}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
