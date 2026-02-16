import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const HeroStyled = styled(SBGContainer)`
  .hm__hero {
    display: flex;
    position: relative;
    margin-bottom: 63px;
    justify-content: center;

    ${MEDIA_QUERY_CSS?.xs(css`
      flex-direction: column;
    `)}

    &-intro {
      margin-top: 80px;
      margin-left: -48px;
      position: relative;

      ${MEDIA_QUERY_CSS?.xs(css`
        margin-left: 68px;
      `)}

      &-hello-text {
        font-family: "Quicksand", sans-serif;
        font-weight: 200;
        font-size: 35px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 22px;
        `)}
      }

      &-name {
        font-size: 80px;
        font-weight: 500;
        font-family: "Quicksand", sans-serif;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 30px;
        `)};
      }

      &-role {
        font-family: "Caveat", cursive;
        font-style: italic;
        font-size: 48px;
        font-weight: 200;
        margin-bottom: 12px;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 28px;
        `)}
      }

      &-desc-self {
        font-family: "Patrick Hand", sans-serif;
        font-size: 28px;
        width: 360px;

        ${MEDIA_QUERY_CSS?.xs(css`
          width: unset;
          font-size: 16px;
        `)}
      }
    }

    &-icon-catlaydown {
      margin-top: 176px;
      color: var(--icon-color);

      ${MEDIA_QUERY_CSS.xs(css`
        width: 200px;
        height: 213px;
        transform: rotate(-10deg);
        margin-top: -32px;
      `)}
    }

    &-icon-yarnball {
      position: absolute;
      bottom: 24px;
      left: 50%;
      color: var(--icon-color);

      ${MEDIA_QUERY_CSS.xs(css`
        bottom: 0px;
        left: calc(50% + 32px);
        width: 84px;
        height: 84px;
      `)}
    }

    &-icon-catfootprint {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;

      ${MEDIA_QUERY_CSS.xs(css`
        top: calc(50% + 3em);
        left: calc(50% + 3em);
        bottom: unset;
        transform: rotate(180deg);
      `)}

      &-item {
        color: var(--icon-color);
        transform: rotate(-36deg);

        ${MEDIA_QUERY_CSS.xs(css`
          width: 36px;
          height: 35px;
        `)}
      }
    }

    .btn-hero-explore {
      position: absolute;
      right: 72px;
      transform: rotate(-5deg);
      -webkit-tap-highlight-color: transparent;
      transition: all 150ms;

      &:hover {
        transform: rotate(0deg);
      }

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 32px;
        bottom: -120px;
      `)}
    }
  }
`;

export default HeroStyled;
