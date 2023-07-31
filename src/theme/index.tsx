import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.100", "gray.800")(props),
      },
      html: {
        fontSize: "20px",
      },
    }),
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
    lila: {
      100: "#e9e4ff",
      200: "#cec4ff",
      300: "#b3a4ff",
      400: "#9e8bff",
      500: "#7c6bd7",
      600: "#604bce",
      700: "#6B3AC5",
      800: "#554994",
    },
    lightBackground: "#FFF",
    darkPurple: "#504256",
    lightPurple: "#b990ca",
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
