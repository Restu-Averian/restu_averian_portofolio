import styled from "styled-components";
import { SBGContainer } from "../../components/global/Layout";

const HeroStyled = styled(SBGContainer)`
  .wrapper-hero {
    display: flex;
    position: relative;
    margin-bottom: 63px;
    justify-content: center;

    .wrapper-intro {
      margin-top: 80px;
      margin-left: -48px;
      position: relative;

      .hello-text {
        font-family: "Quicksand", sans-serif;
        font-weight: 200;
        font-size: 35px;
      }
      .name {
        font-size: 80px;
        font-weight: 200;
        font-family: "Quicksand", sans-serif;
      }

      .role {
        font-family: "Caveat", cursive;
        font-style: italic;
        font-size: 36px;
        font-weight: 200;
        margin-bottom: 12px;
      }

      .desc-self {
        font-family: "Patrick Hand", sans-serif;
        font-size: 28px;
        width: 360px;
      }

      .btn-hero-explore {
        position: absolute;
        right: 72px;
        transform: rotate(-5deg);
      }
    }
  }
`;

export default HeroStyled;
