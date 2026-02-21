import styled, { css } from "styled-components";
import maskBtn from "../../assets/mask-btn.svg";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

export const ButtonSecondaryStyled = styled.button`
  position: relative;
  background: transparent;
  color: var(--bg-secondary-color);
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  padding: 12px 24px;
  cursor: pointer;
  border: 1.5px solid var(--bg-secondary-color);
  border-radius: 2px 4px 2px 3px;
  transform: rotate(3.14deg);
  transition: all 0.2s ease;
  z-index: 1;
  font-weight: bold;

  ${({ $style }) => $style}

  ${MEDIA_QUERY_CSS.xs(css`
    border: 1px solid var(--bg-secondary-color);
    width: 100%;
    transform: rotate(0deg);
  `)}


  &:hover {
    transform: rotate(0deg) scale(1.05);
  }
`;

export const ButtonPrimaryStyled = styled.button`
  border: 0;
  padding: 14px 34px;
  background: var(--bg-secondary-color);
  color: var(--bg-color);
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

export const ButtonTextStyled = styled.button`
  border: 0;
  padding: 14px 34px;
  color: var(--bg-secondary-color);
  font-family: "Caveat", cursive;
  font-size: 40px;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  transition: all 0.15s ease-in-out;

  ${({ $style }) => $style}
`;
