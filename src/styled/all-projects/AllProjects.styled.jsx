import styled from "styled-components";
import { SBGContainer } from "../../components/global/Layout";

const AllProjectsStyled = styled(SBGContainer)`
  .title-section {
    font-family: "Caveat", cursive;
    font-size: 72px;
    font-weight: normal;
    color: #073642;
    transform: rotate(-8deg);
    width: max-content;
    position: relative;
  }

  .wrapper-all-projects {
    display: flex;
    gap: 128px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;
  }
`;

export default AllProjectsStyled;
