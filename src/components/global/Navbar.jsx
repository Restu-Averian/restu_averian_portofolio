import { memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from "./Icons";
import useBreakpoint from "../../hooks/useBreakpoint";
import {
  NavbarMobileStyled,
  NavbarRegularStyled,
} from "../../styled/global/Navbar.styled";

const Navbar_ = () => {
  const location = useLocation();

  const checkActive = (pathnameKey) => {
    const currPathname = location?.pathname;

    if (currPathname === "/") {
      return pathnameKey === "home";
    }

    return currPathname?.includes(pathnameKey);
  };

  const screen = useBreakpoint();

  const WrapperNavbar = useMemo(() => {
    if (screen?.xs) {
      return NavbarMobileStyled;
    }
    return NavbarRegularStyled;
  }, [screen]);

  return (
    <WrapperNavbar>
      <ul className="wrapper-list-nav">
        <li>
          <Link to="/">
            <Icons
              type="cat-home"
              className={`nav-item${checkActive("home") ? " active" : ""}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/project">
            <Icons
              type="cat-projects"
              className={`nav-item${checkActive("project") ? " active" : ""}`}
            />
          </Link>
        </li>
      </ul>
    </WrapperNavbar>
  );
};

const Navbar = memo(Navbar_);
export default Navbar;
