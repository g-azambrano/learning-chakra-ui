import { extendTheme, theme as base } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Honey Bold Banner, ${base.fonts.heading}`,
    body: `Graphik, ${base.fonts.body}`,
  },
  fontSizes: {
    disclaimer: "13px",
  },
  components: {
    Heading: {
      variants: {
        eyebrow: {
          fontSize: "md",
          fontWeight: "light",
          fontFamily: "Intercom Brand",
          textTransform: "uppercase",
          letterSpacing: "wider",
        },
      },
    },
    Button: {
      variants: {
        primary: {
          borderRadius: "30px",
          bgColor: "black",
          fontWeight: "bold",
          color: "white",
          py: "6",
          px: "8",
          _hover: {
            textDecoration: "underline",
            outlineColor: "black",
            color: "black",
            bg: "white",
          },
        },
      },
    },
  },
});
