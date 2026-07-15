import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { TranslationProvider } from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranslationProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </TranslationProvider>
  </React.StrictMode>,
);
