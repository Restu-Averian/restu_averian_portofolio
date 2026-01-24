import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GridThemeProvider } from "styled-bootstrap-grid";
import ReactLenis from "lenis/react";
import App from "./App.jsx";
import GlobalStyled from "./styled/global/Global.styled.jsx";

const gridTheme = {
  row: {
    padding: 0,
  },
  col: {
    padding: 12,
  },
  container: {
    padding: 0,
    maxWidth: {
      xl: 1200,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

const lenisOptions = {
  lerp: 0.3,
  smoothWheel: true,
  wheelMultiplier: 1.5,
  touchMultiplier: 2,
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GridThemeProvider gridTheme={gridTheme}>
      <ReactLenis root options={lenisOptions} />
      <GlobalStyled />
      <App />
    </GridThemeProvider>
  </StrictMode>,
);
