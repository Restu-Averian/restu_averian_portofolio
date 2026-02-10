import styled, { css } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const AllProjectsStyled = styled(SBGContainer)`
  .title-section {
    font-family: "Caveat", cursive;
    font-size: 72px;
    font-weight: normal;
    color: #073642;
    transform: rotate(-8deg);
    width: max-content;
    position: relative;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 52px;
      transform: rotate(2deg);
      margin: auto;
    `)}
  }

  .wrapper-all-projects {
    display: flex;
    gap: 128px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;

    ${MEDIA_QUERY_CSS?.xs(css`
      gap: 24px;
      margin-top: 63px;
    `)}
  }
`;

export default AllProjectsStyled;
