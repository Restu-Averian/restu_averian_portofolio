import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const AllProjectsStyled = styled(SBGContainer)`
  ${({ $style }) => $style}

  .title-section {
    font-family: "Caveat", cursive;
    font-size: 72px;
    font-weight: normal;
    color: #073642;
    transform: rotate(-8deg);
    width: max-content;
    position: relative;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 36px;
      transform: rotate(0deg);
      margin: auto;
    `)}
  }
`;

export default AllProjectsStyled;
