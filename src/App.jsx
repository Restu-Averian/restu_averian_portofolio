import { useRef } from "react";
import Hero from "./pages/home/Hero";
import SelectedWorks from "./pages/home/SelectedWorks";

function App() {
  const selectedWorksRef = useRef(null);
  return (
    <>
      <Hero selectedWorksRef={selectedWorksRef} />
      <SelectedWorks ref={selectedWorksRef} />
    </>
  );
}

export default App;
