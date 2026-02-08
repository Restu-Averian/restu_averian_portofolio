import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const HeroStyled = styled(SBGContainer)`
  .wrapper-hero {
    display: flex;
    position: relative;
    margin-bottom: 63px;
    justify-content: center;

    ${MEDIA_QUERY_CSS?.xs(css`
      flex-direction: column;
    `)}

    .wrapper-intro {
      margin-top: 80px;
      margin-left: -48px;
      position: relative;

      ${MEDIA_QUERY_CSS?.xs(css`
        margin-left: 68px;
      `)}

      .hello-text {
        font-family: "Quicksand", sans-serif;
        font-weight: 200;
        font-size: 35px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 22px;
        `)}
      }
      .name {
        font-size: 80px;
        font-weight: 600;
        font-family: "Quicksand", sans-serif;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 30px;
        `)}
      }

      .role {
        font-family: "Caveat", cursive;
        font-style: italic;
        font-size: 28px;
        font-weight: 200;
        margin-bottom: 12px;
      }

      .desc-self {
        font-family: "Patrick Hand", sans-serif;
        font-size: 28px;
        width: 360px;

        ${MEDIA_QUERY_CSS?.xs(css`
          width: unset;
          font-size: 16px;
        `)}
      }
    }

    .btn-hero-explore {
      position: absolute;
      right: 72px;
      transform: rotate(-5deg);
      -webkit-tap-highlight-color: transparent;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 32px;
        bottom: -120px;
      `)}
    }
  }
`;

export default HeroStyled;
