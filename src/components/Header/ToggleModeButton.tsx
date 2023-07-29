import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ToggleModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      isRound={true}
      variant="solid"
      size="xs"
      colorScheme="gray"
      aria-label={colorMode === "light" ? "dark mode" : "light mode"}
      fontSize="0.8rem"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleModeButton;
