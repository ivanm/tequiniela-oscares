import { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  CheckIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useUser, useAuth } from "reactfire";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";

import { hasNominationTimePassedState, userNominationsState } from "./atoms";
import useResize from "./hooks/useResize";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const hasNominationTimePassed = useRecoilValue(hasNominationTimePassedState);

  const [userNominations, setUserNominations] =
    useRecoilState(userNominationsState);
  const { pathname } = useLocation();
  const { data: user } = useUser();
  const auth = useAuth();
  const navigate = useNavigate();
  const isMobileMenu = useBreakpointValue({ base: true, md: false });

  const menuLinks = [
    { to: "/", title: t("nav.myQuiniela") },
    { to: "/ranking", title: t("nav.ranking") },
    { to: "/rules", title: t("nav.rules") },
    { to: "/winners", title: t("nav.winners") },
  ];

  const menuSelected = menuLinks.find(({ to }) => pathname === to);

  const menuTitle =
    menuSelected != null && menuSelected.title ? menuSelected.title : "";

  const bgHeader = useColorModeValue("#fff", "gray.700");
  const iconFilter = useColorModeValue(undefined, "invert(1)");
  const selectedColor = useColorModeValue("gray.300", "gray.400");
  const { colorMode, toggleColorMode } = useColorMode();
  const { resizeEffect } = useResize();

  useEffect(() => {
    resizeEffect();
  }, [pathname]);

  const remaining = 24 - Object.values(userNominations).length;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      background={bgHeader}
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
      zIndex={2}
    >
      <Flex align="center" p={4} bg="transparent">
        {!isMobileMenu ? (
          <>
            <Heading as="h1" size="lg" fontWeight={400}>
              TEQU
            </Heading>
            <Image filter={iconFilter} src="figure.svg" alt="Oscar Figure" />
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
                bg={pathname === to ? selectedColor : "transparent"}
                fontWeight={pathname === to ? 800 : 500}
                fontSize={{ md: "12px", lg: "md" }}
                color={pathname === to ? "#FECB61" : "white"}
              >
                {title}
              </Button>
            ))}
          </>
        ) : (
          <>
            <Image
              filter={iconFilter}
              src="figure.svg"
              alt="Oscar Figure"
              mr={2}
            />
            <Menu>
              {/* @ts-expect-error Chakra UI v2 + TS5 complex union type */}
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

        <Flex ml="auto" align="center">
          {user ? (
            <>
              <Flex align="center">
                <Flex
                  fontWeight={500}
                  borderRadius="lg"
                  bg={selectedColor}
                  height="40px"
                  mr={1}
                  ml={2}
                  pl={1}
                  pr={0}
                  minWidth={{ base: "auto", xs: "150px", sm: "200px" }}
                >
                  {!hasNominationTimePassed ? (
                    <Flex justify="center" align="center">
                      <CircularProgress
                        thickness="15px"
                        size="34px"
                        color="gray.600"
                        mr={1}
                        value={
                          (Object.values(userNominations).length * 100) / 24
                        }
                      >
                        <CircularProgressLabel fontSize="8px">{`${Math.round(
                          (Object.values(userNominations).length * 100) / 24
                        )}%`}</CircularProgressLabel>
                      </CircularProgress>

                      {Object.values(userNominations).length === 24 ? (
                        <Flex align="center">
                          <Text
                            minWidth="107px"
                            ml={1}
                            fontSize="10px"
                            display={{ base: "none", sm: "block" }}
                          >
                            {t("header.completed")}
                          </Text>
                          <CheckIcon
                            ml={2}
                            boxSize="10px"
                            color="cards.won"
                            mr={2}
                          />
                        </Flex>
                      ) : (
                        <Text
                          ml={1}
                          display={{ base: "none", sm: "block" }}
                          minWidth="120px"
                          fontSize="10px"
                        >
                          {t("header.categoriesRemaining", { count: remaining })}
                        </Text>
                      )}
                    </Flex>
                  ) : (
                    <Flex align="center">
                      <Text ml={3} mr={3} fontSize="10px">
                        {t("header.votingClosed")}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </Flex>

              <Menu>
                <MenuButton
                  pl={1}
                  pr={2}
                  as={Button}
                  background="transparent"
                  rightIcon={<ChevronDownIcon />}
                >
                  <Flex minWidth="25px" align="center" ml={3}>
                    <Image
                      boxSize="20px"
                      src={user?.photoURL ? user.photoURL : undefined}
                      width="20px"
                    />
                    <Flex
                      display={{ base: "none", lg: "flex" }}
                      height={26}
                      ml={1}
                      align="center"
                    >
                      <Text
                        pr={{ base: "12px", lg: "0px" }}
                        fontSize={{ base: "5px", md: "14px" }}
                        maxWidth="170px"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        {user.displayName}
                      </Text>
                    </Flex>
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
                    {t("header.logout")}
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
              bg={pathname === "/login" ? selectedColor : "transparent"}
              fontWeight={500}
              fontSize={{ md: "12px", lg: "md" }}
            >
              {t("header.login")}
            </Button>
          )}
          <Button
            p={0}
            borderRadius="full"
            onClick={toggleLanguage}
            bg="transparent"
            fontSize="xs"
            minW="32px"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </Button>
          <Button
            hidden
            p={0}
            borderRadius="full"
            onClick={toggleColorMode}
            bg="transparent"
          >
            {colorMode == "dark" ? (
              <MoonIcon boxSize="15px" />
            ) : (
              <SunIcon boxSize="15px" />
            )}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
