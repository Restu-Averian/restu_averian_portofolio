import styled, { css } from "styled-components";
import bgSelectedProjects from "../../assets/home/bg-selected-projects.webp";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const SelectedWorksStyled = styled.div`
  .hm__sw {
    background-image: url("${bgSelectedProjects}");
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 80px;
    background-size: 100% 100%;
    min-height: 400px;
    padding: 96px 112px 192px 80px;
    position: relative;

    ${MEDIA_QUERY_CSS?.xs(css`
      padding: 80px 35px 192px 35px;
      margin-top: 200px;
    `)}

    &-title-section {
      display: flex;
      gap: 48px;
      align-items: center;
      margin-bottom: 118px;
      margin-top: 18px;
      margin-left: 84px;

      ${MEDIA_QUERY_CSS?.xs(css`
        margin-left: unset;
        margin-bottom: 48px;
        gap: 18px;
        justify-content: center;
        margin-left: 0px;
      `)}

      &-text {
        font-family: "Caveat", cursive;
        color: rgba(253, 246, 227);
        font-size: 80px;
        font-weight: normal;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 32px;
        `)}
      }

      &-icon {
        transform: rotate(3deg);
        color: var(--bg-color);

        ${MEDIA_QUERY_CSS?.xs(css`
          width: 80px;
          height: 78px;
        `)}
      }
    }

    &-list-projects {
      gap: 36px;
      justify-content: center;
      flex-wrap: nowrap;

      ${MEDIA_QUERY_CSS?.xs(css`
        flex-wrap: wrap;
      `)}
    }

    &-cat-footprint {
      &-1 {
        position: absolute;
        top: 210px;
        left: 48px;
        color: var(--bg-color);

        &-item {
          &-1 {
            transform: rotate(90deg);
          }
          &-2 {
            transform: rotate(-12deg);
            margin-top: 36px;
          }
        }
      }

      &-2 {
        position: absolute;
        top: 82px;
        right: 120px;
        color: var(--bg-color);
        gap: 24px;

        &-item {
          &-1 {
            transform: rotate(10deg);
            margin-top: 24px;
          }
          &-2 {
            transform: rotate(-90deg);
          }
        }
      }
    }

    &-ask-txt-persuasive {
      position: absolute;
      bottom: 126px;
      left: calc(50% - 210px);
      transform: rotate(-6deg);
      color: #fdf6e3;
      font-family: "Caveat", cursive;
      font-size: 38px;
      font-weight: bold;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      ${MEDIA_QUERY_CSS?.xs(css`
        left: unset;
        font-size: 28px;
      `)}
    }

    &-explore-more {
      position: absolute;
      bottom: 56px;
      right: 120px;
      transform: rotate(-2deg);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      padding: 8px 16px;

      ${MEDIA_QUERY_CSS?.xs(css`
        right: 32px;
      `)}

      &:hover {
        transform: rotate(0deg);
        transition: all 150ms ease-in-out;

        .hm__sw-explore-more-btn {
          &::after {
            width: calc(100% - 24px);
          }
        }
      }

      &-btn {
        font-family: "Quicksand", sans-serif;
        font-weight: bold;
        color: #fdf6e3;
        font-size: 28px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 20px;
        `)}

        &::after {
          content: "";
          border-bottom: 3px solid #fdf6e3;
          width: 0px;
          transition: width 240ms;
          transition-timing-function: steps(24, end);
          will-change: width;
        }
      }

      &-icon {
        transform: scale(-1, 1);
        color: var(--bg-color);
      }
    }
  }
`;

export default SelectedWorksStyled;
