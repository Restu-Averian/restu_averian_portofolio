import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
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
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
