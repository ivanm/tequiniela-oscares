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
            <b>Primer lugar:</b> Subscripción por un año a{" "}
            <b>
              <Link href="https://mubi.com/" isExternal>
                Mubi
              </Link>
            </b>
            .
          </ListItem>
          <ListItem>
            <b>Segundo lugar:</b> Libro de Arte de  <b>&apos;The Wild Robot&apos;</b>.
          </ListItem>
          <ListItem>
            <b>Tercer lugar:</b> Tarjeta de regalo de Apple Store con el valor
            de 3 meses de suscripción a Apple TV+.
          </ListItem>
          <ListItem>
            <b>Cuarto lugar:</b> Cinepolis VIP: 4 entradas de cine.
          </ListItem>
          <ListItem>
            <b>Quinto lugar:</b> Película <b>&apos;El 5to elemento&apos;</b>.
          </ListItem>
          <ListItem>
            <b>Sexto lugar:</b> Cupón de 200 pesos para comprar en Uber Eats un
            pollo rostizado.
          </ListItem>
          <ListItem>
            Para el <b>último lugar</b> con un solo acierto y que haya llenado
            totalmente su quiniela: Una recarga Telcel de $20 pesos.
          </ListItem>
        </UnorderedList>
        <Text>
          <b>*</b>
          Para poder recibir los premios, es necesario que proporciones una
          dirección de envío aceptada por Amazon y una dirección de correo
          electrónico válida para suscripciones (Apple TV y Mubi).
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
          <Link href="#" isExternal>
            @cupto
          </Link>
          ,{" "}
          <Link href="#" isExternal>
            @chrispulze
          </Link>
          ,{" "}
          <Link href="#" isExternal>
            @canitoy
          </Link>
          ,{" "}
          <Link href="#" isExternal>
            @thewarpaint
          </Link>
          ,{" "}
          <Link href="https://x.com/vaan" isExternal>
            @vaan
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
