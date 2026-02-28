import styled, { css } from "styled-components";
import { Container } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const FooterStyled = styled(Container)`
  .ftr__social-media {
    padding: 240px 0px;

    ${MEDIA_QUERY_CSS?.xs(css`
      padding-top: unset;
      padding-bottom: 80px;
    `)}

    &-copyright {
      font-size: 40px;
      text-align: center;
      font-family: "Patrick Hand", sans-serif;
      margin-bottom: 80px;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 18px;
        margin-bottom: 48px;
      `)}
    }

    &-list {
      display: flex;
      justify-content: center;
      gap: 128px;
      flex-wrap: wrap;
      position: relative;

      ${MEDIA_QUERY_CSS?.xs(css`
        gap: 32px;
        padding-bottom: 48px;
      `)}

      &-item {
        text-align: center;
        width: 240px;

        ${MEDIA_QUERY_CSS.xs(css`
          width: 120px;
          padding: 18px 8px;
          border: 1.5px solid var(--bg-secondary-color);
        `)}

        &-icon {
          width: 210px;
          color: var(--icon-color);

          ${MEDIA_QUERY_CSS.xs(css`
            width: 80px;
          `)}
        }

        &-text {
          font-size: 32px;
          text-align: center;
          font-family: "Mali", cursive;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          ${MEDIA_QUERY_CSS?.xs(css`
            font-size: 12px;
            width: 120px;
          `)}
        }
      }
    }

    &-cwm {
      align-items: center;
      justify-content: center;
      gap: 48px;
      margin-top: 67px;
      flex-wrap: wrap;

      ${MEDIA_QUERY_CSS?.xs(css`
        gap: 16px;
        flex-wrap: nowrap;
        margin-top: unset;
      `)}

      &-text {
        text-align: center;
        font-family: "Caveat", cursive;
        font-size: 96px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 38px;
        `)}
      }

      &-icon {
        transform: rotate(-12deg);
        color: var(--icon-color);
      }
    }
  }

  .ftr__inspired-credits {
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 0px 24px 180px;

    ${MEDIA_QUERY_CSS?.xs(css`
      flex-direction: column;
      padding-bottom: 96px;

      .illustrate-inspired-credits {
        width: 240px;
        height: 229px;
        margin: auto;
      }
    `)}

    &-group {
      flex-direction: column;
      justify-content: flex-end;

      &-title {
        font-family: "Quicksand", sans-serif;
        font-size: 40px;
        color: var(--text-color);
        padding-right: 18px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 18px;
        `)}
      }

      &-item {
        -webkit-tap-highlight-color: transparent;
        font-family: "Patrick Hand", sans-serif;
        font-size: 52px;
        cursor: pointer;
        color: var(--text-color);
        padding-right: 18px;
        transition: all 300ms;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 280px;
        overflow: hidden;

        &::after {
          content: "";
          display: block;
          border-bottom: 3px solid var(--text-color);
          width: 0px;
          transition: all 300ms;
          transition-timing-function: steps(24, end);

          ${MEDIA_QUERY_CSS.xs(css`
            width: calc(100% - 52px);
            border-bottom: 1.5px solid var(--text-color);
          `)}
        }

        &:hover {
          transform: scale(1.05);

          &::after {
            width: calc(100% - 52px);
          }
        }

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 28px;
        `)};
      }
    }
  }
`;

export const CardConectionStyled = styled.div`
  border: 3px solid var(--bg-secondary-color);
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
    border: 3px solid rgba(var(--bg-secondary-color-code), 0.8);
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

  ${({ $style }) => $style}
`;

export default FooterStyled;
