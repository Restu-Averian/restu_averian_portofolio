import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GridThemeProvider } from "styled-bootstrap-grid";

const gridTheme = {
  row: {
    padding: 0,
  },
  col: {
    padding: 0,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GridThemeProvider gridTheme={gridTheme}>
      <App />
    </GridThemeProvider>
  </StrictMode>,
);
