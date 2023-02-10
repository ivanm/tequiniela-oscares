import { Card, Image, Flex } from "@chakra-ui/react";

const BigCard = ({ title, imgSrc }) => (
  <Card>
    <Image borderTopRadius="md" src={imgSrc} alt={title} />
    <Flex justify="center">{title}</Flex>
  </Card>
);
export default BigCard;
