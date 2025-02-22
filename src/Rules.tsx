import {
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
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
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <Image
          filter={iconFilter}
          src="rules.svg"
          boxSize="25px"
          alt="Rules Figure"
        />
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
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <Image
          filter={iconFilter}
          src="ranking.svg"
          boxSize="25px"
          alt="Ranking Figure"
        />
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
          increíbles premios<b>*</b>:{" "}
        </Text>
        <Text>
          (Proximamente)
        </Text>
      </Flex>
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} align="center">
        <AtSignIcon boxSize="25px" />
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
            Equipo
          </Heading>
        </Flex>
      </Flex>
      <Flex pl={2} pr={2} direction="column" gap={2}>
        <Text>
          <b>Código:</b>{" "}
          <Link href="https://www.threads.net/@o.ladino" isExternal>
            @canitoy
          </Link>
          ,{" "}
          <Link href="https://mstdn.social/@Masiosare" isExternal>
            @Masiosare
          </Link>
          ,{" "}
          <Link href="https://twitter.com/vaan" isExternal>
            @vaan
          </Link>
        </Text>
        <Text>
          <b>Dirección</b>: Enrique Segoviano
        </Text>
        <Text>
          <b>Diseño/UX</b>:{" "}
          <Link href="https://twitter.com/chrispulze" isExternal>
            @chrispulze
          </Link>
        </Text>
        <Text>
          <b>Premios:</b>{" "}
        </Text>
        <Text>
          (Proximamente)
        </Text>
      </Flex>
    </Flex>
  );
};
