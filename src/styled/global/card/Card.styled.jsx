import styled, { css, keyframes } from "styled-components";
import bgImg from "../../../assets/bg-img.webp";
import { MEDIA_QUERY_CSS } from "../../../hooks/useBreakpoint";

const hoverAnimate = keyframes`
    0%{
        transform: scale(1);
    }
    80%{
        transform: scale(1.08);
    }
    100%{
        transform: scale(1.05);
    }
`;

const CardStyled = styled.div`
  position: relative;
  width: 18em;
  padding: 8px 16px 12px;
  cursor: pointer;
  transform-origin: center;
  transition: transform 200ms ease-in-out;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    border: 1.5px dashed var(--bg-secondary-color);
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: transform 200ms ease-in-out;
    pointer-events: none;
  }

  &:hover {
    animation: ${hoverAnimate} 180ms ease-in-out;
    transform: scale(1.05);

    &::before {
      transform: scaleY(1);
    }
  }

  .crd__ {
    &fgr-img {
      background-image: url("${bgImg}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 95% 90%;

      ${MEDIA_QUERY_CSS.xs(css`
        background-size: 100% 90%;
      `)}

      img {
        border-radius: 30px;
        padding: 20px 0px;
        object-fit: cover;
        height: 192px;
        width: calc(100% - 32px);
      }
    }

    &title-project {
      font-size: 24px;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 24px;
        overflow: hidden;
        width: calc(100% - 28px);
        white-space: nowrap;
        text-overflow: ellipsis;
      `)}
    }

    &desc-project {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;
      line-height: 22px;
      margin-bottom: 12px;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 10px;
        line-height: unset;
        margin-bottom: 12px;
      `)}
    }

    &ftr {
      display: flex;
      justify-content: space-between;

      ${MEDIA_QUERY_CSS.xs(css`
        flex-direction: column;
      `)}

      &-lst-tech-stack {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      &-btn-try-demo {
        font-size: 20px;
        padding: 12px 18px;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 14px;
        `)}
      }
    }
  }
`;

export default CardStyled;
