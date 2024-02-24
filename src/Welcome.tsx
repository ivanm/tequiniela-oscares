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
          ¡Tequiniela finalizada??
        </Text>
        <Text fontSize={{ base: "xs", md: "md" }}>
          Muchas felicitaciones a nuestros ganadores, nos podremos en contacto
          por correo para confirmar la entrega de los premios. 👀
        </Text>
        <Text fontSize={{ base: "xs", md: "md" }} mt={2}>
          Gracias a todos por haber participado.{" "}
        </Text>
      </Flex>
    </Flex>
  </Card>
);
