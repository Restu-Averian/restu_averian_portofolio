import { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarStyled from "../../styled/global/Navbar.styled";
import Icons from "./Icons";

const Navbar_ = () => {
  const location = useLocation();
  const activeClassName = useCallback(
    (routeKey) => {
      if (routeKey === "home") {
        return location?.pathname === "/" ? "active" : "";
      }

      return location?.pathname?.includes(routeKey) ? "active" : "";
    },
    [location],
  );

  return (
    <NavbarStyled>
      <Link to="/" className={`${activeClassName("home")}`}>
        <Icons type="home" />
      </Link>
      <Link to="/project" className={`${activeClassName("project")}`}>
        <Icons type="folder" />
      </Link>
    </NavbarStyled>
  );
};

const Navbar = memo(Navbar_);
export default Navbar;
