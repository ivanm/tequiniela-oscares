import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useUser, useAuth } from "reactfire";
import { useRecoilState, useRecoilValue } from "recoil";

import { hasNominationTimePassedState, userNominationsState } from "./atoms";

export const Header = () => {
  const hasNominationTimePassed = useRecoilValue(hasNominationTimePassedState);

  const [userNominations, setUserNominations] =
    useRecoilState(userNominationsState);
  const { pathname } = useLocation();
  const { data: user } = useUser();
  const auth = useAuth();
  const navigate = useNavigate();
  const isMobileMenu = useBreakpointValue({ base: true, md: false });

  const menuLinks = [
    { to: "/", title: "Mi Quiniela" },
    { to: "/ranking", title: "Ranking" },
    { to: "/rules", title: "Reglas" },
  ];

  const menuSelected = menuLinks.find(({ to }) => pathname === to);

  const menuTitle =
    menuSelected != null && menuSelected.title ? menuSelected.title : "";

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      background="#fff"
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
      zIndex={2}
    >
      <Flex align="center" p={4} bg="transparent" color="black">
        {!isMobileMenu ? (
          <>
            <Heading as="h1" size="lg" fontWeight={400}>
              TEQU
            </Heading>
            <Image src="figure.svg" alt="Oscar Figure" />
            <Heading as="h1" size="lg" mr={5} fontWeight={400}>
              NIELA
            </Heading>
            {menuLinks.map(({ to, title }) => (
              <Button
                background="transparent"
                key={to}
                as={RouterLink}
                to={to}
                mr={2}
                bg={pathname === to ? "gray.200" : "transparent"}
                fontWeight={500}
              >
                {title}
              </Button>
            ))}
          </>
        ) : (
          <>
            <Image src="figure.svg" alt="Oscar Figure" mr={2} />
            <Menu>
              <MenuButton
                pl={1}
                pr={2}
                as={Button}
                background="transparent"
                rightIcon={<ChevronDownIcon />}
              >
                <Flex align="center" ml={3}>
                  <Text fontSize="md">{menuTitle}</Text>
                </Flex>
              </MenuButton>
              <MenuList>
                {menuLinks.map(({ to, title }) => (
                  <MenuItem
                    fontWeight={pathname === to ? "800" : undefined}
                    key={to}
                    onClick={() => {
                      navigate(to);
                    }}
                  >
                    {title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </>
        )}

        <Flex ml="auto">
          <Button className="inactive" fontWeight={500} display="none">
            Compartir
          </Button>
          {user ? (
            <>
              <Flex align="center" >
                <Tag
                  fontWeight={500}
                  borderRadius="lg"
                  bg="gray.300"
                  height="40px"
                  mr={3}
                  ml={3}
                >
                  {!hasNominationTimePassed ? (
                    <Flex justify="center" align="center" width="">
                      <CircularProgress
                        thickness="10px"
                        size="30px"
                        color="cards.selected"
                        value={
                          (Object.values(userNominations).length * 100) / 23
                        }
                      >
                        <CircularProgressLabel color="gray.800">{`${
                          Math.round((Object.values(userNominations).length * 100) / 23)
                        }%`}</CircularProgressLabel>
                      </CircularProgress>
                      <TagLabel
                        pl={1}
                        pr={1}
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                      ></TagLabel>
                      {Object.values(userNominations).length === 23 ? (
                        <Text color="gray.600" ml={2} fontSize="xs">
                          Votación completa
                        </Text>
                      ) : (
                        <Text color="gray.600" ml={2} fontSize="xs">
                          {`${
                            23 - Object.values(userNominations).length
                          } ${Object.values(userNominations).length == 22? 'nominación faltante' : 'nominaciones faltantes'}`}
                        </Text>
                      )}
                    </Flex>
                  ) : (
                    <Text color="gray.600" ml={3} mr={3} fontSize="xs">
                      Votación completa
                    </Text>
                  )}
                </Tag>
              </Flex>

              <Menu>
                <MenuButton
                  pl={1}
                  pr={2}
                  as={Button}
                  background="transparent"
                  rightIcon={<ChevronDownIcon />}
                >
                  <Flex align="center" ml={3}>
                    <Image
                      boxSize="20px"
                      src={user?.photoURL ? user.photoURL : undefined}
                    />
                    {!isMobileMenu ? (
                      <Flex height={26} ml={1} maxWidth="300px" align="center">
                        <Text>{user.displayName}</Text>
                      </Flex>
                    ) : null}
                  </Flex>
                </MenuButton>
                <MenuList minW="0" w={"170px"}>
                  <MenuItem
                    onClick={async () => {
                      await auth.signOut();
                      setUserNominations({});
                      navigate("/", { replace: true });
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
              as={RouterLink}
              to="/login"
              className="inactive"
              mr={2}
              bg={pathname === "/login" ? "gray.200" : "transparent"}
              fontWeight={500}
            >
              Iniciar Sesión
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
