import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: `#f6ad55`,
    secondary: `#5a67d8`,
    text: `#e2e8f0`,
    heading: `#ffffff`,
    background: `#141821`,
    divider: `#2d3748`,
    textMuted: `#a0aec0`,
    icon_brightest: `#ffffff`,
    icon_darker: `#4a5568`,
    icon_darkest: `#2d3748`,
    icon_red: `#e53e3e`,
    icon_blue: `#3182ce`,
    icon_orange: `#ed8936`,
    icon_yellow: `#ecc94b`,
    icon_pink: `#ed64a6`,
    icon_purple: `#9f7aea`,
    icon_green: `#48bb78`,
    modes: {
      light: {
        text: `#2d3748`,
        heading: `#000`,
        primary: `#c05621`,
        background: `#f7fafc`,
        divider: `#edf2f7`,
        textMuted: `#718096`,
        icon_brightest: `#edf2f7`,
        icon_darker: `#cbd5e0`,
        icon_darkest: `#718096`,
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  styles: {
    global: {
      "html, body": {
        width: "100vw",
        background: "background",
        margin: 0,
        padding: 0,
        boxSizing: `border-box`,
        textRendering: `optimizeLegibility`,
        WebkitFontSmoothing: `antialiased`,
        MozOsxFontSmoothing: `grayscale`,
        color: `text`,
      },
      "*": {
        boxSizing: `inherit`,
        "&:before": {
          boxSizing: `inherit`,
        },
        "&:after": {
          boxSizing: `inherit`,
        },
      },
      html: {
        fontSize: `18px`,
        WebkitTextSizeAdjust: `100%`,
      },
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `1em`,
      },
      "[hidden]": {
        display: `none`,
      },
      "::selection": {
        backgroundColor: `primary`,
        color: `background`,
      },
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
      p: {
        fontSize: [1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
        color: `text`,
      },
      blockquote: {
        marginLeft: 0,
        p: {
          fontSize: [2, 3],
          fontWeight: `medium`,
          color: `heading`,
        },
      },
      h1: {
        fontSize: 8,
        mt: 2,
        mb: 3,
        textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
        letterSpacing: `wide`,
        color: `heading`,
      },
      h2: {
        fontSize: [4, 5, 6],
        mt: 2,
        mb: 2,
        color: `heading`,
      },
      h3: {
        fontSize: [3, 4, 5],
        mt: 3,
        color: `heading`,
      },
      h4: {
        fontSize: [2, 3, 4],
        color: `heading`,
      },
      h5: {
        fontSize: [1, 2, 3],
        color: `heading`,
      },
      h6: {
        fontSize: 1,
        mb: 2,
        color: `heading`,
      },
    },
    layout: {
      container: {
        maxWidth: `5xl`,
      },
    },
    buttons: {
      toggle: {
        color: `background`,
        border: `none`,
        backgroundColor: `text`,
        cursor: `pointer`,
        alignSelf: `center`,
        px: 3,
        py: 2,
        ml: 3,
      },
    },
    texts: {
      bigger: {
        p: {
          fontSize: [2, 3, 4],
        },
      },
    },
  },
});
