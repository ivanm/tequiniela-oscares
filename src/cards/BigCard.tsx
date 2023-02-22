import { Card, Image, Flex, Text } from "@chakra-ui/react";

export interface BigCardProps {
  title: string;
  imgSrc: string | undefined;
  status:
    | "normal"
    | "selected"
    | "selected-won"
    | "selected-lost"
    | "not-selected-won"
    | "not-selected-lost";
}

const BigCard = ({ title, imgSrc, status }: BigCardProps) => {
  const bgColor =
    status === "selected"
      ? "#016FB9"
      : status === "selected-won"
      ? "#239A0C"
      : status === "selected-lost"
      ? "#C11A1A"
      : undefined;

  return (
    <Card
      border={
        bgColor
          ? `3px solid ${bgColor}`
          : status === "not-selected-won"
          ? "3px solid #239A0C"
          : undefined
      }
      bg={bgColor}
      opacity={["not-selected-lost"].includes(status) ? ".2" : "1"}
    >
      {imgSrc && (
        <Image
          w="100%"
          borderTopRadius="sm"
          src={imgSrc}
          alt={title}
        />
      )}
      <Flex justify="center" pt={2} pb={2} pl={2} pr={2} h="62px" align="center" textAlign="center">
        <Text
          fontSize={{ base: "xs", lg: "sm" }}
          color={
            ["selected", "selected-won", "selected-lost"].includes(status)
              ? "white"
              : status === "not-selected-won"
              ? "#239A0C"
              : undefined
          }
        >
          {title}
        </Text>
      </Flex>
    </Card>
  );
};
export default BigCard;
