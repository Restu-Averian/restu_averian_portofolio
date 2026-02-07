import styled, { keyframes } from "styled-components";

const initSelectedNavItem = keyframes`
    0%{
        transform: scale(0);

    }
80%{
    transform: scale(1.05);

}
    100%{
        transform: scale(1);
    }

`;

const NavbarStyled = styled.nav`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 50px;
  background-color: #fff8e1;
  border: 3px solid #3e2723;
  font-family: "Patrick Hand", sans-serif;
  z-index: 99;

  .wrapper-list-nav {
    display: flex;
    gap: 24px;
    text-align: center;
    align-items: center;

    .nav-item {
      color: #8d6e63;
      width: 52px;
      height: 53px;

      &.active {
        background-color: #8d6e63;
        color: #fdf6e3;
        padding: 12px 18px;
        border-radius: 20px;
        animation: ${initSelectedNavItem} 150ms ease-in-out;
      }
    }
  }
`;

export default NavbarStyled;
