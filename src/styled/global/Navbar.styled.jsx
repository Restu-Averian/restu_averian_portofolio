import styled, { keyframes } from "styled-components";

const initSelectedNavItem = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }

`;

export const NavbarRegularStyled = styled.nav`
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
      color: #93a1a1;
      width: 52px;
      height: 53px;
      padding: 12px 18px;

      &.active {
        /* background-color: #8d6e63; */
        color: #8d6e63;
        border-radius: 20px;
        animation: ${initSelectedNavItem} 150ms ease-in-out;
      }
    }
  }
`;

export const NavbarMobileStyled = styled.nav`
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: #fff8e1;
  z-index: 99999;

  .wrapper-list-nav {
    display: flex;
    justify-content: space-between;
    padding: 8px 80px;

    .nav-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      .nav-item {
        color: #93a1a1;
        width: 36px;
        height: 37px;

        &.active {
          color: #8d6e63;
          animation: ${initSelectedNavItem} 150ms ease-in-out;
        }

        &-text {
          font-family: "Mali", cursive;
          font-size: 14px;
        }
      }
    }
  }
`;
