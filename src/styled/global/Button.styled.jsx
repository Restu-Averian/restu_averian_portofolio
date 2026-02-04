import styled from "styled-components";

const ButtonStyled = styled.button`
  position: relative;
  background: transparent;
  color: #0f2c36;
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  padding: 12px 24px;
  cursor: pointer;
  border: 3px solid #0f2c36;
  border-radius: 2px 4px 2px 3px;
  transform: rotate(3.14deg);
  transition: all 0.2s ease;
  z-index: 1;
  font-weight: bold;

  ${({ $style }) => $style}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid rgba(7, 54, 66, 0.5);
    border-radius: 3px 2px 4px 2px;
    transform: rotate(5deg) scale(1.02);
    z-index: -1;
    transition: transform 0.2s ease;
    transition-delay: 0.1s;
  }

  &:hover {
    transform: rotate(0deg) scale(1.05);

    &::before {
      transform: rotate(0) scale(1.05);
    }
  }
`;

export default ButtonStyled;
