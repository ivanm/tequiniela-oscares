import { Card, Image, Flex, Text } from "@chakra-ui/react";

export interface SmallCardProps {
  title: string;
  imgSrc: string | undefined;
  name: string | undefined;
  status:
    | "normal"
    | "selected"
    | "selected-won"
    | "selected-lost"
    | "not-selected-won"
    | "not-selected-lost";
}

const SmallCard = ({ title, imgSrc, name, status }: SmallCardProps) => {
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
      {imgSrc && (
        <Image
          borderLeftRadius="sm"
          src={imgSrc}
          alt={title}
          objectFit="cover"
          align="0px -12px"
          height="100px"
          width="100px"
          minWidth="100px"
        />
      )}
      <Flex
        pl={4}
        justify="center"
        pt={2}
        pb={2}
        direction="column"
        w={{ base: 280, lg: 320 }}
      >
        <Text fontSize={{ base: "sm", lg: "lg" }} color={textColor}>
          {name}
        </Text>
        <Text fontSize={{ base: "xs", lg: "sm" }} color={textColor}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};
export default SmallCard;