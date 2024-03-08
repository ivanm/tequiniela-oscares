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
        <UnorderedList spacing={3}>
          <ListItem>
            <b>Primer lugar:</b> Suscripción por un año a mubi + Trofeo 1er
            lugar.
          </ListItem>
          <ListItem>
            <b>Segundo lugar:</b> Suscripción por un año a Apple TV + Trofeo 2do
            lugar.
          </ListItem>
          <ListItem>
            <b>Tercer lugar:</b> Libro de arte oficial{" "}
              <b>Across The Spider-Verse</b> patrocinado por{" "}
            <b>
              <Link href="https://youtube.com/@tecnomenoide" isExternal>
                Tecnomenoide
              </Link>
            </b>{" "}
            + Trofeo 3er lugar.
          </ListItem>
          <ListItem>
            <b>Cuarto lugar:</b> $750 pesos de crédito en Uber Eats.
          </ListItem>
          <ListItem>
            <b>Quinto lugar:</b> Película <b>&apos;El 5to elemento&apos;</b>.
          </ListItem>
          <ListItem>
            <b>Sexto lugar:</b> $500 pesos en tarjeta de regalo Amazon.
          </ListItem>
          <ListItem>
            <b>Séptimo lugar:</b> Audífonos Bluetooth.
          </ListItem>
          <ListItem>
            Para el <b>último lugar</b> con un solo acierto y que haya llenado
            totalmente su quiniela: Una recarga Telcel de $20 pesos.
          </ListItem>
        </UnorderedList>
        <Text>
          <b>*</b>Premios válidos dentro de México y sujetos a disponibilidad de
          Amazon.
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
          <b>QA</b>: Rosalía
        </Text>
        <Text>
          <b>Premios:</b>{" "}
          <Link href="https://www.threads.net/@cupto" isExternal>
            @cupto
          </Link>
          ,{" "}
          <Link href="https://www.threads.net/@masiosare" isExternal>
            @masiosare
          </Link>
          ,{" "}
          <Link href="https://twitter.com/chrispulze" isExternal>
            @chrispulze
          </Link>
          ,{" "}
          <Link href="https://www.threads.net/@o.ladino" isExternal>
            @canitoy
          </Link>
          ,{" "}
          <Link href="https://twitter.com/luisitomx/" isExternal>
            @luisitomx
          </Link>
          ,{" "}
          <Link href="https://www.threads.net/thewarpaint" isExternal>
            @thewarpaint
          </Link>
          ,{" "}
          <Link href="https://twitter.com/vaan" isExternal>
            @vaan
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
