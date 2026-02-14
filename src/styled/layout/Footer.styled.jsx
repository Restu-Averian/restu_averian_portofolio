import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const FooterStyled = styled(SBGContainer)`
  padding: 384px 240px 240px;

  ${MEDIA_QUERY_CSS?.xs(css`
    padding-top: 0px;
    padding-bottom: 80px;
  `)}

  .copyright {
    font-size: 40px;
    text-align: center;
    font-family: "Patrick Hand", sans-serif;
    margin-bottom: 80px;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 24px;
      margin-bottom: 48px;
    `)}
  }

  .wrapper-list-connection {
    display: flex;
    justify-content: center;
    gap: 128px;
    flex-wrap: wrap;
    position: relative;

    ${MEDIA_QUERY_CSS?.xs(css`
      gap: 32px;
      padding-bottom: 48px;
    `)}
  }

  .connect-with-me {
    text-align: center;
    font-family: "Caveat", cursive;
    font-size: 96px;
    color: #073642;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 38px;
    `)}
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
  -webkit-tap-highlight-color: transparent;

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

  .lbl-connection {
    font-size: 32px;
    text-align: center;
    font-family: "Mali", cursive;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 14px;
      width: 128px;
    `)}
  }

  ${({ $style }) => $style}
`;

export const InspiredCreditsStyled = styled.section`
  margin-top: 240px;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 0px 24px;

  ${MEDIA_QUERY_CSS?.xs(css`
    flex-direction: column;
    margin-top: 128px;

    .illustrate-inspired-credits {
      width: 240px;
      height: 229px;
      margin: auto;
    }
  `)}

  .title-group {
    font-family: "Quicksand", sans-serif;
    font-size: 40px;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 24px;
    `)}
  }

  .lbl-item-inspired-credits {
    font-family: "Patrick Hand", sans-serif;
    font-size: 60px;
    cursor: pointer;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 32px;
    `)}
  }
`;

export default FooterStyled;
