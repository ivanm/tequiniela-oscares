import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Quicksand,${chakraTheme.fonts.body}`,
    heading: `Quicksand,${chakraTheme.fonts.heading}`,
  },
});

export default theme;
