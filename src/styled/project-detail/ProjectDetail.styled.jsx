import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import bgImg from "../../assets/bg-img.webp";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const ProjectDetailStyled = styled(SBGContainer)`
  .fgr-thumbnail {
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

  .title-project {
    font-family: "Patrick Hand", sans-serif;
    font-size: 63px;

    ${MEDIA_QUERY_CSS.xs(css`
      font-size: 32px;
    `)}
  }

  .wrapper-list-tech-stack {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin: 24px 0px;

    .tech-stack-item {
      display: flex;
      align-items: center;

      .lbl-tech-stack {
        font-size: 32px;
        font-family: "Caveat", cursive;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 24px;
        `)}
      }
    }
  }

  .desc {
    font-family: "Patrick Hand", sans-serif;
    font-size: 22px;

    ${MEDIA_QUERY_CSS.xs(css`
      font-size: 18px;
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
`;

export default ProjectDetailStyled;
