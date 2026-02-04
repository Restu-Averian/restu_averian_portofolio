import { memo } from "react";
import { Outlet } from "react-router-dom";
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

      <Footer />
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
