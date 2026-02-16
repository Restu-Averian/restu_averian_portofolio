import styled, { css, keyframes } from "styled-components";
import { SBGContainer } from "../../components/global/Layout";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const tsItemIdle1 = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0)
   }
  33% { transform: translateY(-12px) translateX(-10px) }
  66% { transform: translateY(-8px) translateX(-6px) }
`;
const tsItemIdle2 = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0)
   }
  33% { transform: translateY(-8px) translateX(2px) }
  66% { transform: translateY(-1px) translateX(8px) }
`;
const tsItemIdle3 = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0)
   }
  33% { transform: translateY(9px) translateX(-5px) }
  66% { transform: translateY(-2px) translateX(6px) }
`;

const TechStackStyled = styled(SBGContainer)`
  .hm__ts {
    margin-top: 384px;
    position: relative;

    ${MEDIA_QUERY_CSS?.xs(css`
      margin-top: 80px;
    `)}

    &-title-section {
      font-family: "Caveat", cursive;
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

      &-icon-left {
        transform: rotate(-32deg);
        position: relative;
        top: 24px;

        ${MEDIA_QUERY_CSS?.xs(css`
          width: 32px;
          transform: rotate(-110deg);
        `)}
      }

      &-icon-right {
        transform: rotate(0deg);
        position: relative;
        top: 42px;

        ${MEDIA_QUERY_CSS?.xs(css`
          width: 32px;
        `)}
      }
    }

    &-main-icon {
      justify-content: center;

      &-item {
        color: var(--icon-color);

        ${MEDIA_QUERY_CSS.xs(css`
          width: 240px;
        `)}
      }
    }

    &-item-icon {
      color: var(--icon-color);
    }

    &-my-contacts {
      -webkit-tap-highlight-color: transparent;
      position: absolute;
      bottom: 80px;
      transform: rotate(-5deg);
      right: calc(50% - 28em);
      display: flex;
      align-items: center;
      gap: 18px;
      cursor: pointer;
      width: max-content;

      ${MEDIA_QUERY_CSS?.xs(css`
        left: calc(50% - 2em);
        gap: 12px;
      `)}

      &-text {
        font-family: "Mali", cursive;
        font-weight: 600;
        font-size: 24px;

        ${MEDIA_QUERY_CSS.xs(css`
          font-size: 20px;
        `)}
      }

      &-icon {
        width: 36px;

        ${MEDIA_QUERY_CSS.xs(css`
          width: 32px;
        `)}
      }
    }
  }
`;

export const TechStackItemStyled = styled.div`
  --float-y: ${({ $index = 0 }) => `${-8 - $index * 5}px`};
  --float-x: ${({ $index = 0 }) => `${-10 - $index * 5}px`};

  position: absolute;

  ${({ $style }) => $style}

  border:3px solid var(--bg-secondary-color);
  border-radius: 100%;
  padding: 16px;
  ${({ $index }) => {
    const index = $index;

    const animateName = {
      0: tsItemIdle1,
      1: tsItemIdle2,
      2: tsItemIdle3,
    };

    return css`
      animation: ${animateName?.[index]} 3s normal infinite;
      animation-timing-function: steps(12, end);
    `;
  }}

  ${MEDIA_QUERY_CSS?.xs(css`
    padding: 12px;
  `)}
`;

export default TechStackStyled;
