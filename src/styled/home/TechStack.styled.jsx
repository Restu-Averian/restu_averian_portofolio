import styled, { css } from "styled-components";
import borderTechStack from "../../assets/border-tech-stack.svg";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const TechStackStyled = styled(SBGContainer)`
  padding-top: 384px;
  position: relative;

  ${MEDIA_QUERY_CSS?.xs(css`
    padding-top: 80px;
  `)}

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

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 58px;
        right: 0;
        bottom: unset;
        top: 0;
      `)}
    }
  }
`;

export const TechStackItemStyled = styled.div`
  position: absolute;

  ${({ $style }) => $style}

  ${({ $borderSlice, $borderSize }) => {
    return css`
      border: ${$borderSize}px solid transparent;
      border-image: url("${borderTechStack}") ${$borderSlice} round;
    `;
  }}
`;

export default TechStackStyled;
