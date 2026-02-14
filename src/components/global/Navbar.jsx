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

  const { xs } = useBreakpoint();

  const checkActive = (pathnameKey) => {
    const currPathname = location?.pathname;

    if (currPathname === "/") {
      return pathnameKey === "home";
    }

    return currPathname?.includes(pathnameKey);
  };

  const WrapperNavbar = useMemo(() => {
    if (xs) {
      return NavbarMobileStyled;
    }
    return NavbarRegularStyled;
  }, [xs]);

  return (
    <WrapperNavbar>
      <ul className="wrapper-list-nav">
        <li>
          <Link to="/" className="nav-link">
            <Icons
              type="cat-home"
              className={`nav-item${checkActive("home") ? " active" : ""}`}
            />

            {xs && <p className="nav-item-text">Home</p>}
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-link">
            <Icons
              type="cat-projects"
              className={`nav-item${checkActive("project") ? " active" : ""}`}
            />

            {xs && <p className="nav-item-text">Projects</p>}
          </Link>
        </li>
      </ul>
    </WrapperNavbar>
  );
};

const Navbar = memo(Navbar_);
export default Navbar;
