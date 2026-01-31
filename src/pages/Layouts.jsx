import { memo } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";

const Layouts_ = () => {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "1rem",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
