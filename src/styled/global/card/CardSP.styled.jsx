import styled, { css } from "styled-components";
import { MEDIA_QUERY_CSS } from "../../../hooks/useBreakpoint";

const CardSPStyled = styled.div`
  background-color: var(--bg-color);
  border: 2px solid var(--bg-secondary-color);
  border-radius: 4px 12px 8px 18px;
  position: relative;
  transition: all 300ms;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 280px;

  &:hover {
    transform: rotate(0deg) translateY(-24px);
    z-index: 1;
    transition-delay: 150ms;
  }

  ${MEDIA_QUERY_CSS.xs(css`
    width: 180px;
  `)}

  ${({ $style }) => $style}

  .crdsp {
    &__fgr-img {
      width: 100%;
      overflow: hidden;
      position: relative;
      text-align: center;

      img {
        object-fit: cover;
        width: 100%;
        border-radius: 4px 12px 6px 14px;
        height: 140px;

        ${MEDIA_QUERY_CSS?.xs(css`
          height: 100px;
        `)}
      }
    }

    &__info-project {
      display: flex;
      flex-direction: column;
      padding: 18px;
      padding-bottom: 12px;

      ${MEDIA_QUERY_CSS?.xs(css`
        padding: 8px;
        padding-bottom: 12px;
      `)}

      &-title {
        font-size: 18px;
        font-family: "Patrick Hand", sans-serif;
        font-weight: normal;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 12px;
          overflow: hidden;
          width: 128px;
          white-space: nowrap;
          text-overflow: ellipsis;
        `)}
      }

      &-subtitle {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        font-family: "Patrick Hand", sans-serif;
        font-weight: normal;
        line-height: 18px;
        margin-bottom: 12px;
        font-size: 12px;

        ${MEDIA_QUERY_CSS?.xs(css`
          font-size: 8px;
          line-height: unset;
        `)}
      }

      &-btns {
        display: flex;
        gap: 12px;
        justify-content: center;

        button {
          font-size: 8px;
          padding: 8px 12px;
        }
      }
    }
  }
`;

export default CardSPStyled;
