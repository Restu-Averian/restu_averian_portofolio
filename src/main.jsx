import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GridThemeProvider } from "styled-bootstrap-grid";
import ReactLenis from "lenis/react";
import GlobalStyled from "./styled/global/Global.styled.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routing.jsx";

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

      <RouterProvider router={router} />
    </GridThemeProvider>
  </StrictMode>,
);
