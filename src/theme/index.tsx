import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      html: {
        fontSize: "20px",
      },
    },
  },
  colors: {
    black: "#333",
    white: "#FFF",
    gray: {
      100: "#fafafa",
      200: "#f7f7f7",
      300: "#e7e7e7",
      400: "#aeaeae",
      500: "#838383",
      600: "#3a3a3a",
    },
    lightBackground: "#FFF",
    darkPurple: "#504256",
  },
  // I'm just adding one more fontSize than the default ones
  fontSizes: {
    xxs: "0.625rem",
  },
  // I'm creating a new space tokens since the default is represented with numbers
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
});

// https://dev.to/carlosrafael22/what-i-ve-learned-with-chakra-ui-so-far-4f5e
