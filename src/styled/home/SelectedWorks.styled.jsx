import styled, { css } from "styled-components";
import bgSelectedProjects from "../../assets/home/bg-selected-projects.webp";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const SelectedWorksStyled = styled.section`
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

  .wrapper-title-section {
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

    .title-section {
      font-family: "Caveat", cursive;
      color: rgba(253, 246, 227);
      font-size: 80px;
      font-weight: normal;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 32px;
      `)}
    }
  }

  .ask-txt-persuasive {
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

  .wrapper-explore-more {
    position: absolute;
    bottom: 56px;
    right: 120px;
    transform: rotate(-2deg);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    .btn-explore-more {
      font-family: "Quicksand", sans-serif;
      font-weight: bold;
      color: #fdf6e3;
      font-size: 28px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      &::after {
        content: "";
        width: calc(100% - 2px);
        border-bottom: 3px solid #fdf6e3;
        width: 0px;
        transition: width 300ms;
        transition-timing-function: steps(24, end);
        will-change: width;
      }

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 20px;
      `)}
    }

    &:hover {
      .btn-explore-more {
        &::after {
          width: 100%;
        }
      }
    }

    ${MEDIA_QUERY_CSS?.xs(css`
      right: 32px;
    `)}
  }
`;

export default SelectedWorksStyled;
