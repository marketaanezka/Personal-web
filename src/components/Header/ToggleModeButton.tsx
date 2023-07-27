import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ToggleModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      isRound={true}
      variant="solid"
      size="sm"
      colorScheme="gray"
      aria-label={colorMode === "light" ? "dark mode" : "light mode"}
      fontSize="20px"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleModeButton;
