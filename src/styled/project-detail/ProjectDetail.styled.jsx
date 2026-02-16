import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import bgImg from "../../assets/bg-img.webp";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

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

      &-breadcrumb-list {
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        ${MEDIA_QUERY_CSS.xs(css`
          flex-wrap: nowrap;
        `)}

        &-item {
          font-family: "Patrick Hand", sans-serif;
          cursor: pointer;
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
    }

    &__btn-try-demo {
      transform: rotate(5deg);
      font-size: 36px;

      ${MEDIA_QUERY_CSS.xs(css`
        font-size: 28px;
      `)}
    }

    .wrapper-btn-try-demo {
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
`;

export default ProjectDetailStyled;
