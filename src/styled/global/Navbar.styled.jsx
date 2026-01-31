import styled, { keyframes } from "styled-components";

const showInitDot = keyframes`
    0%{
        transform: scale(0);
    }
    80%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }

`;

const NavbarStyled = styled.nav`
  position: fixed;
  top: 25px;
  left: 25px;
  border: 1px solid rgba(var(--primary-color-code));
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 36px 0px;
  box-shadow:
    0px 8px 0px 0px rgba(var(--primary-color-code)),
    0px 20px 40px rgba(124, 58, 237, 0.15);
  backdrop-filter: blur(15px);
  z-index: 99;
  transition: all 300ms;
  width: 63px;
  a {
    text-align: center;
  }

  .active {
    color: #7c3aed;
    &::after {
      content: "•";
      font-size: 18px;
      animation: ${showInitDot} 300ms ease-in-out;
    }
  }
`;

export default NavbarStyled;
