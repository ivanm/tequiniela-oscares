import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    cards: {
      selected: "#EEEEEE",
      won: "#239A0C",
      lost: "#C11A1A",
    },
    gray: {
      100: "#F8F3F5",
      200: "#e2e2e2",
      300: "#c4c4c4",
      400: "#2f2f2f",
      700: "#202020",
      800: "#272727",
      900: "#1d1d1d"
    },
  },
  fonts: {
    body: `Quicksand,${chakraTheme.fonts.body}`,
    heading: `Quicksand,${chakraTheme.fonts.heading}`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
