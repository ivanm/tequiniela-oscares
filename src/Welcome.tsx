import { Flex, Image, Card, Text, useColorModeValue } from "@chakra-ui/react";

export const Welcome = () => {
  const welcomeBg = useColorModeValue("gray.300", "gray.400");
  return (
    <Card bg={welcomeBg} mt={3} p={5}>
      <Flex align="center">
        <Flex direction="column">
          <Text fontSize={{ base: "20px", md: "30px" }}>
            👋 Ya puedes votar en la Tequiniela 2024
          </Text>
          <Text fontSize={{ base: "xs", md: "md" }}>
            La Tequiniela es una quiniela organizada entre amigos para la entrega de los Premios Óscar 2024. 
            Para participar, inicia sesión con tu cuenta de Google, selecciona tus candidatos, y no te olvides de revisar el reglamento.
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
