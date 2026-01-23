import styled, { css } from "styled-components";

const CardStyled = styled.div`
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 150ms;
  border: 1px solid #1e1b4b;
  height: ${({ $level }) => ($level === 2 ? "380px" : "100%")};

  ${({ $type }) => {
    if ($type !== "side") {
      return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `;
    }
    return css``;
  }}

  figure {
    margin: 0;

    &.bg-img {
      height: 360px;
      overflow: hidden;
      position: relative;
      padding: 18px;

      &.side-by-side {
        height: ${({ $level }) => ($level === 2 ? "340px" : "240px")};
      }

      .img-thumbnail-project-item {
        width: 100%;
        height: 100%;
        transition: all 150ms;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }

  .btn-view-project {
    border-top: 1px solid #1e1b4b;
    padding: 21px;
    text-align: center;
    display: block;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-sizing: border-box;
    box-shadow: 8px 8px 0px 0px #1e1b4b;
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
`;

export default CardStyled;
