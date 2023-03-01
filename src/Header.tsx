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
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useUser, useAuth } from "reactfire";

import { hasNominationTimePassedState, userNominationsState } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export const Header = () => {
  const [, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState
  );

  const userNominations = useRecoilValue(userNominationsState);

  const { pathname } = useLocation();
  const { data: user } = useUser();
  const auth = useAuth();

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
        <Heading as="h1" size="lg" fontWeight={400}>
          TEQU
        </Heading>
        <Image src="figure.svg" alt="Oscar Figure" />
        <Heading as="h1" size="lg" mr={5} fontWeight={400}>
          NIELA
        </Heading>
        <Button
          as={RouterLink}
          to="/"
          mr={2}
          bg={pathname === "/" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Mi Quiniela
        </Button>
        <Button
          as={RouterLink}
          to="/ranking"
          className="inactive"
          mr={2}
          bg={pathname === "/ranking" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Ranking
        </Button>
        <Button
          as={RouterLink}
          to="/rules"
          className="inactive"
          mr={2}
          bg={pathname === "/rules" ? "gray.200" : "transparent"}
          fontWeight={500}
        >
          Reglas
        </Button>
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
                  <TagLabel pl={1} pr={1} fontSize="xs" fontWeight="bold" color="white">
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
                <MenuButton>
                  <Flex align="center" ml={3}>
                    <Image
                      boxSize="20px"
                      src={user?.photoURL ? user.photoURL : undefined}
                    />
                    <Box height={26} ml={1} maxWidth="300px">
                      {user.displayName}
                    </Box>
                    <svg
                      height="1.5em"
                      width="1.5em"
                      viewBox="0 0 24 24"
                      role="presentation"
                      className="chakra-select__icon"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                      ></path>
                    </svg>
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
