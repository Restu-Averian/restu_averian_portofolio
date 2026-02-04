import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";

const FooterStyled = styled(SBGContainer)`
  padding: 384px 240px 240px;

  .copyright {
    font-size: 40px;
    text-align: center;
    font-family: "Patrick Hand", sans-serif;
    margin-bottom: 80px;
  }

  .wrapper-list-connection {
    display: flex;
    justify-content: center;
    gap: 128px;
    flex-wrap: wrap;

    img {
      width: 240px;
    }

    p {
      font-size: 32px;
      text-align: center;
    }
  }

  .connect-with-me {
    text-align: center;
    font-family: "Caveat", cursive;
    font-size: 96px;
    margin-top: 67px;
  }
`;

export const CardConectionStyled = styled.div`
  border: 3px solid #8d6e63;
  padding: 18px;
  width: max-content;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 12px;
  transform: ${({ $rotate }) => {
    return css`
    rotate(${$rotate}deg)
    `;
  }};

  &::before {
    content: "";
    border: 3px solid rgba(141, 110, 99, 0.8);
    transform: rotate(3deg);
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: transform 0.2s ease;
    transition-delay: 0.1s;
    border-radius: 12px;
  }

  &:hover {
    transform: rotate(0deg) scale(1.05);

    &::before {
      transform: rotate(0) scale(1);
    }
  }

  img {
    width: 240;
  }
`;

export default FooterStyled;
