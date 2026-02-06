import { memo, useRef } from "react";
import Hero from "../components/home/Hero";
import SelectedWorks from "../components/home/SelectedWorks";
import TechStack from "../components/home/TechStack";
const Home_ = () => {
  const selectedWorksRef = useRef(null);

  return (
    <>
      <Hero />

      <SelectedWorks />

      <TechStack />
      {/* <Hero selectedWorksRef={selectedWorksRef} />
      <SelectedWorks ref={selectedWorksRef} /> */}
    </>
  );
};

const Home = memo(Home_);
export default Home;
