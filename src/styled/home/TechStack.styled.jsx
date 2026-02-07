import styled from "styled-components";
import borderTechStack from "../../assets/border-tech-stack.svg";
import { SBGContainer } from "../../components/global/Layout";

const TechStackStyled = styled(SBGContainer)`
  padding-top: 384px;
  position: relative;

  section {
    position: relative;

    .title-section {
      font-family: "Caveat", cursive;
      color: #073642;
      font-size: 96px;
      font-weight: normal;
      transform: rotate(15deg);
      width: max-content;
      position: absolute;
      right: 192px;
      bottom: 576px;
    }

    .wrapper-tech-stack-item {
      border: 45px solid transparent;
      border-image: url("${borderTechStack}") 45 round;
      position: absolute;
    }
  }
`;

export default TechStackStyled;
