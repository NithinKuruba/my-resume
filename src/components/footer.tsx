import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button onClick={toggleColorMode} color={`primary`}>
        {colorMode === `dark` ? `Dark` : `Light`}
      </Button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {colorMode === `dark` ? (
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
            alt="LekoArts Logo"
          />
        ) : (
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2_w30.png"
            alt="LekoArts Logo"
          />
        )}
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
