import styled, { css } from "styled-components";
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

    .ftr__ {
      &my-contacts {
        position: absolute;
        bottom: calc(50% - 10em);
        transform: rotate(-5deg);
        right: calc(50% - 28em);
        display: flex;
        align-items: center;
        gap: 18px;
        cursor: pointer;

        &-text {
          font-family: "Mali", cursive;
          font-weight: 600;
          font-size: 24px;
        }
      }
    }
  }
`;

export const TechStackItemStyled = styled.div`
  position: absolute;

  ${({ $style }) => $style}

  border:3px solid #8D6E63;
  border-radius: 100%;
  padding: 16px;

  ${MEDIA_QUERY_CSS?.xs(css`
    padding: 12px;
  `)}
`;

export default TechStackStyled;
