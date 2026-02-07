import { memo } from "react";
import { Link, Outlet } from "react-router-dom";
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

      <nav
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateY(-50%)",
          padding: "12px 24px",
          borderRadius: 50,
          backgroundColor: "#fff8e1",
          border: "3px solid #3e2723",
          fontFamily: "'Patrick Hand',sans-serif",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: 12,
            textAlign: "center",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
        </ul>
      </nav>

      <Footer />
    </>
  );
};

const Layouts = memo(Layouts_);
export default Layouts;
