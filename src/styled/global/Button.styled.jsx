import styled, { css } from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  text-align: center;
  width: max-content;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  button {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
    outline: revert;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ${({ $size }) => {
    const sizeButtons = ["small", "medium", "large"];

    if (sizeButtons?.includes($size)) {
      switch ($size) {
        case "small":
          return css`
            font-size: 14px;
            padding: 10px 20px;
          `;
        case "medium":
          return css`
            font-size: 18px;
            padding: 14px 24px;
          `;
        case "large":
          return css`
            font-size: 22px;
            padding: 18px 28px;
          `;
        default:
          return null;
      }
    } else if (typeof $size === "number") {
      return css`
        font-size: ${$size}px;
      `;
    }
    return null;
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: rgba(var(--primary-color-code));
          color: #ffff;
        `;
      case "outline":
        return css`
          border: 2px solid rgba(var(--primary-color-code));
          transition: all 150ms;
          color: rgba(var(--primary-color-code));
          font-weight: 600;

          &:hover {
            transform: translate(-2px, -2px);
            box-shadow: var(--btn-outline-hover);
          }

          &:active {
            box-shadow: none;
            transform: unset;
          }
        `;
      case "text":
        return css``;
      default:
        return null;
    }
  }}

  ${({ $shape }) => {
    switch ($shape) {
      case "round":
        return css`
          border-radius: 12px;
        `;
      case "circle":
        return css`
          border-radius: 50px;
        `;
      default:
        return null;
    }
  }}
`;

export default ButtonStyled;
