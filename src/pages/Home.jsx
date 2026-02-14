import { memo, useRef } from "react";
import Hero from "../components/home/Hero";
import SelectedWorks from "../components/home/selected-works";
import TechStack from "../components/home/tech-stack";

const Home_ = () => {
  const selectedWorksRef = useRef(null);
  const techStackRef = useRef(null);

  return (
    <>
      <Hero selectedWorksRef={selectedWorksRef} />

      <SelectedWorks ref={selectedWorksRef} techStackRef={techStackRef} />

      <TechStack ref={techStackRef} />
    </>
  );
};

const Home = memo(Home_);
export default Home;
