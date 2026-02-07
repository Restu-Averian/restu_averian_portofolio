import styled, { css } from "styled-components";

const CardStyled = styled.div`
  background-color: #fff8e1;
  border: 3px solid #3e2723;
  border-radius: 4px 12px 8px 18px;

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

  figure.thumbnail {
    width: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;

    img {
      object-fit: cover;
      width: 100%;
      border-radius: 4px 12px 6px 14px;
    }
  }

  .info-project {
    padding: 12px 63px 12px 18px;

    h3.title-project {
      font-size: 24px;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;
    }
    p.subtitle {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;
      font-family: "Patrick Hand", sans-serif;
      font-weight: normal;
      line-height: 22px;
    }
  }

  .wrapper-btn-demo {
    width: 100%;
    display: flex;
    justify-content: right;

    .btn-demo {
      button {
        font-size: 14px;
        /* margin: 12px 24px 38px; */
        margin-left: 0;
      }
    }
  }
`;

export const TitleProject = styled.h3`
  font-family: "Playfair Display", serif;
  margin: 0;
  font-size: ${({ $level }) => {
    switch ($level) {
      case 1:
        return "28px";
      case 2:
        return "22px";
      default:
        return "20px";
    }
  }};
`;

export const TechStackStyled = styled.ul`
  font-family: "JetBrains Mono", monospace;
  display: flex;
  gap: 8px;
  padding: 0px 18px;

  li {
    list-style: none;
  }
`;

export const DescriptionStyled = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  padding: 0 18px;
  margin-top: 24px;
`;

export default CardStyled;
