import { Box, Button, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button
        onClick={() => {
          toggleColorMode();
        }}
        bg={`primary`}
      >
        {colorMode === `dark` ? `Dark` : `Light`}
      </Button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
    </Box>
  );
};

export default Footer;
