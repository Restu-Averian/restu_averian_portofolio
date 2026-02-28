import styled, { css } from "styled-components";
import { Container } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const AllProjectsStyled = styled(Container)`
  ${({ $style }) => $style}

  .ap {
    &__title-section {
      font-family: "Caveat", cursive;
      font-size: 72px;
      font-weight: normal;
      color: var(--text-color);
      transform: rotate(-8deg);
      width: max-content;
      position: relative;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 36px;
        transform: rotate(0deg);
        margin: auto;
      `)}

      &-icon {
        width: 48px;
        height: 47px;
        position: absolute;
        bottom: 0;
        color: var(--icon-color);

        ${MEDIA_QUERY_CSS?.xs(css`
          width: 32px;
          top: 12px;
          transform: rotate(24deg);
          bottom: unset;
        `)}
      }
    }
  }
`;

export default AllProjectsStyled;
