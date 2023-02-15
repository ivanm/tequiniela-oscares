import { Card, Flex, Text } from "@chakra-ui/react";

export interface MiniCardProps {
  title: string;
  status:
    | "normal"
    | "selected"
    | "selected-won"
    | "selected-lost"
    | "not-selected-won"
    | "not-selected-lost";
}

const MiniCard = ({ title, status }: MiniCardProps) => {
  const bgColor =
    status === "selected"
      ? "#016FB9"
      : status === "selected-won"
      ? "#239A0C"
      : status === "selected-lost"
      ? "#C11A1A"
      : undefined;

  const textColor = ["selected", "selected-won", "selected-lost"].includes(
    status
  )
    ? "white"
    : status === "not-selected-won"
    ? "#239A0C"
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
      direction="row"
    >
      <Flex
        pl={10}
        pr={10}
        justify="center"
        pt={3}
        pb={3}
        direction="column"
        w={{ base: 200, lg: 300 }}
        minHeight={"70px"}
      >
        <Text fontSize={{ base: "11px", lg: "sm" }} color={textColor}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};
export default MiniCard;

