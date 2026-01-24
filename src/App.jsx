import { useRef } from "react";
import Hero from "./pages/home/Hero";
import SelectedWorks from "./pages/home/SelectedWorks";
import Footer from "./pages/home/Footer";

function App() {
  const selectedWorksRef = useRef(null);
  return (
    <>
      <Hero selectedWorksRef={selectedWorksRef} />
      <SelectedWorks ref={selectedWorksRef} />
      <Footer />
    </>
  );
}

export default App;
