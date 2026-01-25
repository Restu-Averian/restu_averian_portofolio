import { memo, useRef } from "react";
import Hero from "./Hero";
import SelectedWorks from "./SelectedWorks";
import Footer from "./Footer";

const Home_ = () => {
  const selectedWorksRef = useRef(null);

  return (
    <>
      <Hero selectedWorksRef={selectedWorksRef} />
      <SelectedWorks ref={selectedWorksRef} />
      <Footer />
    </>
  );
};

const Home = memo(Home_);
export default Home;
