import styled, { css } from "styled-components";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const CardStyled = styled.div`
  background-color: #fff8e1;
  border: 3px solid #3e2723;
  border-radius: 4px 12px 8px 18px;
  position: relative;

  ${({ $rotate, $translateX = 0, $translateY = 0, $width }) => {
    const rotate = $rotate;
    const translateX = $translateX;
    const translateY = $translateY;
    const width = $width;

    return css`
      transform: rotate(${rotate}deg)
        translate(${translateX}px, ${translateY}px);
      width: ${width}px;

      &:hover {
        transform: rotate(0deg) scale(1.05)
          translate(${translateX}px, ${translateY}px);
      }
    `;
  }}

  transition: all 300ms;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  figure.thumbnail {
    width: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;

    img {
      object-fit: cover;
      width: 100%;
      border-radius: 4px 12px 6px 14px;

      ${MEDIA_QUERY_CSS?.xs(css`
        height: 100px;
      `)}
    }
  }

  .info-project {
    display: flex;
    flex-direction: column;
    padding: 18px;
    padding-bottom: 12px;

    ${MEDIA_QUERY_CSS?.xs(css`
      padding: 8px;
      padding-bottom: 12px;
    `)}

    h3.title-project {
      font-size: 24px;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 14px;
        overflow: hidden;
        width: 128px;
        white-space: nowrap;
        text-overflow: ellipsis;
      `)}
    }

    p.subtitle {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;
      line-height: 22px;
      margin-bottom: 32px;

      ${MEDIA_QUERY_CSS?.xs(css`
        font-size: 10px;
        line-height: unset;
        margin-bottom: 12px;
      `)}
    }
  }

  .wrapper-btn-demo {
    text-align: right;
  }

  .btn-demo {
    font-size: 24px;
    padding: 12px 24px;

    ${MEDIA_QUERY_CSS?.xs(css`
      font-size: 18px;
      padding: 8px;
      width: 100%;
      text-align: center;
    `)}
  }
`;

export default CardStyled;
