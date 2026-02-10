import styled, { css } from "styled-components";
import maskBtn from "../../assets/mask-btn.svg";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

export const ButtonSecondaryStyled = styled.button`
  position: relative;
  background: transparent;
  color: #8d6e63;
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  padding: 12px 24px;
  cursor: pointer;
  border: 3px solid #8d6e63;
  border-radius: 2px 4px 2px 3px;
  transform: rotate(3.14deg);
  transition: all 0.2s ease;
  z-index: 1;
  font-weight: bold;

  ${({ $style }) => $style}

  ${MEDIA_QUERY_CSS.xs(css`
    border: 1px solid #8d6e63;
    width: 100%;
    transform: rotate(0deg);
  `)}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid rgb(141, 110, 99, 0.5);
    border-radius: 3px 2px 4px 2px;
    transform: rotate(5deg) scale(1.02);
    z-index: -1;
    transition: transform 0.2s ease;
    transition-delay: 0.1s;

    ${MEDIA_QUERY_CSS.xs(css`
      border: 1px solid rgb(141, 110, 99, 0.5);
      transform: rotate(0deg) scale(1.02);
    `)}
  }

  &:hover {
    transform: rotate(0deg) scale(1.05);

    &::before {
      transform: rotate(0) scale(1.05);
    }
  }
`;

export const ButtonPrimaryStyled = styled.button`
  --fill: #8d6e63;
  --text: #fdf6e3;

  border: 0;
  padding: 14px 34px;
  background: var(--fill);
  color: var(--text);
  font-family: "Caveat", cursive;
  font-size: 40px;
  cursor: pointer;
  display: inline-block;
  -webkit-mask-image: url("${maskBtn}");
  mask-image: url("${maskBtn}");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition: all 0.15s ease-in-out;
  font-weight: bold;

  ${({ $style }) => $style}

  &:hover {
    transform: scale(1.05) rotate(0deg) !important;
  }

  &:active {
    transform: scale(1.08) !important;
  }
`;
