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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useUser, useAuth } from "reactfire";
import { useRecoilState, useRecoilValue } from "recoil";

import { hasNominationTimePassedState, userNominationsState } from "./atoms";

export const Header = () => {
  const [, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState
  );

  const userNominations = useRecoilValue(userNominationsState);
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
            <Image src="figure.svg" alt="Oscar Figure" mr={3}/>
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
          <Button
            className="inactive"
            onClick={() => {
              setHasNominationTimePassed(true);
            }}
            fontWeight={500}
            display="none"
          >
            Compartir
          </Button>
          {user ? (
            <>
              <Flex align="center">
                <Tag
                  className="inactive"
                  onClick={() => {
                    setHasNominationTimePassed(true);
                  }}
                  fontWeight={500}
                  borderRadius="lg"
                  bg={
                    Object.values(userNominations).length === 23
                      ? "cards.won"
                      : "cards.selected"
                  }
                  height="30px"
                  mr={3}
                >
                  <TagLabel
                    pl={1}
                    pr={1}
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                  >
                    {Object.values(userNominations).length}/23
                  </TagLabel>
                  {Object.values(userNominations).length === 23 ? (
                    <Text ml={2} fontSize="xs">
                      ✅
                    </Text>
                  ) : null}
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
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      auth.signOut();
                      window.location.replace("/");
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
