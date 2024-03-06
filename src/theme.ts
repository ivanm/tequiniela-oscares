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
