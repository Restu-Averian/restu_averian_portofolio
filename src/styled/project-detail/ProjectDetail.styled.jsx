import styled from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import bgImg from "../../assets/bg-img.webp";

const ProjectDetailStyled = styled(SBGContainer)`
  .fgr-thumbnail {
    text-align: center;
    background-image: url("${bgImg}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90% 100%;

    img {
      width: calc(100% - 240px);
      border-radius: 30px;
      padding: 20px;
    }
  }

  .title-project {
    font-family: "Patrick Hand", sans-serif;
    font-size: 63px;
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
      }
    }

    .desc {
      font-family: "Patrick Hand", sans-serif;
      font-size: 22px;
    }
  }

  .wrapper-btn-try-demo {
    width: max-content;
    text-align: right;
    margin-top: 48px;
    margin-left: auto;
    margin-right: 160px;
  }
`;

export default ProjectDetailStyled;
