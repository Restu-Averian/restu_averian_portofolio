import styled, { css, keyframes } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import bgImg from "../../assets/bg-img.webp";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const hoverAnimate = keyframes`
    0%{
        transform: scale(1);
    }
    80%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1.08);
    }
`;

const ProjectDetailStyled = styled(SBGContainer)`
  .pd {
    &__breadcrumb {
      align-items: center;
      gap: 36px;
      margin-bottom: 36px;
      flex-wrap: nowrap;

      ${MEDIA_QUERY_CSS.xs(css`
        gap: 18px;
      `)}

      &-iconback {
        color: var(--icon-color);
        cursor: pointer;
      }

      &-list {
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        ${MEDIA_QUERY_CSS.xs(css`
          flex-wrap: nowrap;
        `)}

        &-item {
          font-family: "Patrick Hand", sans-serif;
          cursor: pointer;
          font-size: 20px;

          &-separator {
            color: var(--icon-color);
          }
        }
      }
    }

    .img-loading {
      &-icon {
        width: 160px !important;
        height: 192px !important;

        ${MEDIA_QUERY_CSS.xs(css`
          width: 80px !important;
          height: 96px !important;
        `)}
      }

      &-text {
        font-size: 28px !important;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 18px !important;
        `)}
      }
    }

    &__thumbnail {
      text-align: center;
      background-image: url("${bgImg}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      ${MEDIA_QUERY_CSS.xs(css`
        background-size: 100% 90%;
      `)}

      img {
        width: calc(100% - 63px);
        border-radius: 30px;
        padding: 20px;
        object-fit: cover;
        height: 480px;

        ${MEDIA_QUERY_CSS.xs(css`
          width: calc(100% - 32px);
          height: 240px;
        `)}
      }
    }

    &__content {
      margin-top: 32px;

      &-title-project {
        font-family: "Patrick Hand", sans-serif;
        font-size: 63px;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 32px;
        `)}
      }

      &-list-tech-stack {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        margin: 24px 0px;

        &-item {
          display: flex;
          align-items: center;

          &-icon {
            font-size: 36px;

            ${MEDIA_QUERY_CSS.xs(css`
              font-size: 24px;
            `)}
          }

          &-text {
            font-size: 32px;
            font-family: "Caveat", cursive;

            ${MEDIA_QUERY_CSS.xs(css`
              font-size: 24px;
            `)}
          }
        }
      }

      &-desc {
        font-family: "Patrick Hand", sans-serif;
        font-size: 22px;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 18px;
        `)}
      }

      &-btn-try-demo {
        width: max-content;
        text-align: right;
        margin-top: 48px;
        margin-left: auto;
        margin-right: 160px;

        ${MEDIA_QUERY_CSS.xs(css`
          margin-right: 32px;
        `)}
      }
    }

    &__more-projects {
      flex: auto;
      position: sticky;
      top: 10px;
      height: 480px;

      ${MEDIA_QUERY_CSS.xs(css`
        height: auto;
        position: static;
      `)}

      &-title {
        font-family: "Caveat", cursive;
        color: var(--text-color);
        text-align: center;
        font-size: 36px;
        font-weight: normal;
      }

      &-contents {
        overflow: hidden;
        height: 630px;
        position: relative;
        padding: 24px 12px;

        ${MEDIA_QUERY_CSS.xs(css`
          height: auto;
          width: 280px;
          margin: auto;
        `)}

        &-list {
          flex-wrap: nowrap;
          flex-direction: column;
          touch-action: pan-y pinch-zoom;
          height: 100%;
          gap: 12px;

          ${MEDIA_QUERY_CSS.xs(css`
            touch-action: pan-x pinch-zoom;
            flex-direction: row;
          `)}

          &-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-bottom: 12px;
            user-select: none;
          }
        }

        &-btnprev {
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        &-btnnext {
          cursor: pointer;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
      }

      &-wrapper {
        flex-wrap: nowrap;
        justify-content: center;

        ${MEDIA_QUERY_CSS.xs(css`
          flex-direction: column;
        `)}
      }

      &-btnoperator {
        flex-wrap: nowrap;
        flex-direction: column;

        ${MEDIA_QUERY_CSS.xs(css`
          flex-direction: row;
        `)}

        &-item,
        &-item-disabled {
          user-select: none;
          color: var(--bg-secondary-color);
          cursor: pointer;
          transform-origin: bottom center;
          border-radius: 50%;
          transition: all 200ms ease-in-out;
          padding: 8px;
          -webkit-tap-highlight-color: transparent;

          &:hover {
            animation: ${hoverAnimate} 180ms ease-in-out;
            border: 1px dashed var(--bg-secondary-color);
            transform: scale(1.08);
          }
          &:active {
            transform: scale(1);
          }
        }

        &-item-disabled {
          color: var(--icon-color-inactive);
          cursor: not-allowed;

          &:hover {
            animation: unset;
            border: unset;
            transform: scale(1);
          }
        }
      }
    }
  }
`;

export default ProjectDetailStyled;
