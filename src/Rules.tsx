import { Flex, Heading, Image, Text } from "@chakra-ui/react";
export const Rules = () => (
  <Flex
    direction="column"
    className="rules-container"
    m={{
      base: "0 10px",
      sm: "0 20px",
      md: "0 30px",
      lg: "0 30px",
      xl: "0 20px",
      "2xl": "0 150px",
    }}
  >
    <Flex pl={3} pr={3} pt={3} pb={3} mt={2}>
      <Image src="rules.svg" alt="Rules Figure" />
      <Flex align="center" minHeight="45px">
        <Heading
          fontWeight="extrabold"
          as="h1"
          fontSize={{
            base: "19px",
            lg: "20px",
          }}
          mr={2}
          ml={2}
        >
          Reglas
        </Heading>
      </Flex>
    </Flex>
    <Flex pl={2} pr={2} direction="column" gap={2}>
      <Text>¡Bienvenidos a la tradicional quiniela de los Oscars!</Text>
      <Text>
        Únete a la diversión y compite con otros aficionados del cine para ver
        quién tiene el ojo más agudo para seleccionar a los ganadores.
      </Text>
      <Text>
        ¡No importa si eres un cinéfilo experimentado o simplemente un
        espectador casual, la quiniela es para todos!
      </Text>
      <Text>
        Prepárate para disfrutar de una noche llena de sorpresas, celebridades y
        grandes premios, ¡y demuestra tus habilidades para elegir a los
        ganadores de los Oscars en la Tequiniela!
      </Text>
    </Flex>
  </Flex>
);
