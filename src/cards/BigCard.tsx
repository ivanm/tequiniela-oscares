import { Card, Image, Flex } from "@chakra-ui/react";
interface BigCardProps {
  title: string;
  imgSrc: string;
}

const BigCard = ({ title, imgSrc }: BigCardProps) => (
  <Card>
    <Image borderTopRadius="md" src={imgSrc} alt={title} />
    <Flex justify="center">{title}</Flex>
  </Card>
);
export default BigCard;
