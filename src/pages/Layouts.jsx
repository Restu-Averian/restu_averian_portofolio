import { memo } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Footer from "../components/home/Footer";

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

      <ScrollRestoration />
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
