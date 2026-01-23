import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

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
`;

export default ButtonStyled;
