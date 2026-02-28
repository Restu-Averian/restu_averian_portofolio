import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactLenis from "lenis/react";
import GlobalStyled from "./styled/global/Global.styled.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routing.jsx";

const lenisOptions = {
  lerp: 0.3,
  smoothWheel: true,
  wheelMultiplier: 1.5,
  touchMultiplier: 2,
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root options={lenisOptions} />
    <GlobalStyled />

    <RouterProvider router={router} />
  </StrictMode>,
);
