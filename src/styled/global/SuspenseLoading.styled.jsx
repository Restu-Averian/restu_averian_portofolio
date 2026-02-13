import styled, { keyframes } from "styled-components";

const animateRotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

const ellipsis = keyframes`
  to { width: 1.2em; } /* lebar untuk nampilin 3 titik */
`;
const SuspenseLoadingStyled = styled.div`
  text-align: center;
  height: calc(100vh - 3em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  svg {
    animation: ${animateRotate} 1500ms steps(18, end) infinite;
  }

  .loading::after {
    content: "...";
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
    width: 0;
    animation: ${ellipsis} 1500ms steps(4, end) infinite;
  }
`;
export default SuspenseLoadingStyled;
