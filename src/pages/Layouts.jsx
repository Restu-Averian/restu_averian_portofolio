import { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/global/Navbar";

const Layouts_ = () => {
  return (
    <>
      <main
        style={{
          padding: "1rem",
        }}
      >
        <Outlet />
      </main>

      <Navbar />

      <Footer />
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
