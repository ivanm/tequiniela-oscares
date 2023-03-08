import {
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
export const Rules = () => {
  const iconFilter = useColorModeValue(undefined, "invert(1)");

  return (
    <Flex
      direction="column"
      className="rules-container"
      m={{
        base: "0 10px",
        sm: "0 60px",
        md: "0 60px",
        lg: "0 100px",
        xl: "0 200px",
        "2xl": "0 250px",
      }}
    >
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2}>
        <Image filter={iconFilter} src="rules.svg" alt="Rules Figure" />
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
          Prepárate para disfrutar de una noche llena de sorpresas, celebridades
          y grandes premios, ¡y demuestra tus habilidades para elegir a los
          ganadores de los Oscars en la Tequiniela!
        </Text>
      </Flex>
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2}>
        <Image  filter={iconFilter} src="ranking.svg" alt="Ranking Figure" />
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
            Premios
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} direction="column" gap={2}>
        <Text>
          Compite con otros fanáticos del cine para ganar alguno de estos
          increíbles premios*:{" "}
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>
            Para el <b>primer lugar:</b> Libro de Pinocchio de Guillermo del
            Toro, A Timeless Tale Told Anew.
          </ListItem>
          <ListItem>
            {" "}
            Para el <b>segundo lugar</b>: Una tarjeta de regalo de Amazon por
            $500 mxn.
          </ListItem>
          <ListItem>
            Para el <b>tercer lugar</b>: Una taza de Top Gun Maverick.
          </ListItem>
          <ListItem>
            Para el <b>último lugar</b> con un solo acierto y que haya llenado
            totalmente su quiniela: Una recarga Telcel de $20 pesos.
          </ListItem>
        </UnorderedList>
        <Text>
          *Premios válidos dentro de México y sujetos a disponibilidad de
          Amazon.
        </Text>
      </Flex>
    </Flex>
  );
};
