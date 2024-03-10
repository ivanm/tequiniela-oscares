import { Flex, Image, Card, Text, useColorModeValue } from "@chakra-ui/react";

export const Welcome = () => {
  const welcomeBg = useColorModeValue("gray.300", "gray.400");
  return (
    <Card bg={welcomeBg} mt={3} p={5}>
      <Flex align="center">
        <Flex direction="column">
          <Text fontSize={{ base: "20px", md: "30px" }}>
            🚨 Tequiniela cerrada
          </Text>
          <Text fontSize={{ base: "xs", md: "md" }}>
            Ya no puedes modificar tus predicciones. Inicia sesión e iremos
            actualizando los resultados conforme los premios se vayan
            entregando. ¡Mucha suerte!
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
