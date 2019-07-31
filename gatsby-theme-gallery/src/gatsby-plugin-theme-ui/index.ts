export default {
  initialColorMode: "dark",
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
    heading: '"Avenir Next", system-ui, sans-serif',
    moonospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#639",
    modes: {
      dark: {
        text: "#fff",
        background: "#151515",
        primary: "#A5F",
      },
    },
  },
  styles: {
    Layout: {
      fontFamily: "body",
      padding: "0 1rem",
    },
    Header: {
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    Footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "0 1.5rem",
      backgroundColor: "background",
      fontSize: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    h1: {
      color: "text",
      fontWeight: 400,
      lineHeight: "1.2",
      fontSize: [3, 4, 5],
    },
    a: {
      color: "text",
      marginLeft: "1rem",
      fontSize: 1,
      "&:hover": {
        opacity: 0.75,
      },
    },
  },
};
