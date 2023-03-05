import { Flex, Image, Card, Text } from "@chakra-ui/react";

export const Welcome = () => (
  <Card bg="cards.selected" color="white" mt={3} p={5}>
    <Flex align="center">
      <Image
        filter="invert(1)"
        color="white"
        boxSize="70px"
        src="figure.svg"
        alt="Oscar Figure"
        mr={4}
      />
      <Flex direction="column">
        <Text fontSize={{ base: "20px", md: "30px" }}>
          Bienvenido a Tequiniela
        </Text>
        <Text fontSize={{ base: 'xs', md: "md"}}>
          Tequiniela es una quiniela organizada entre amigos para la entrega de
          los Premios Óscar 2023. Para participar, inicia sesión con tu cuenta
          de Google, selecciona tus candidatos, y no te olvides de revisar el
          reglamento.
        </Text>
      </Flex>
    </Flex>
  </Card>
);
