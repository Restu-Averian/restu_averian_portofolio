import styled, { css } from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 24px;
  text-align: center;
  width: max-content;
  font-family: "Inter", sans-serif;
  font-size: 12px;

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

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css``;
      case "outline":
        return css`
          border: 2px solid rgba(var(--primary-color-code));
          border-radius: 50px;
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
`;

export default ButtonStyled;
