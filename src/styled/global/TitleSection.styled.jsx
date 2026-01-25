import styled from "styled-components";

const TitleSectionStyled = styled.div`
  .title-section {
    font-size: ${({ $titleSize }) => $titleSize}px;
    margin: 0;

    ${({ $titleStyle }) => $titleStyle}
  }

  .description-section {
    font-size: ${({ $descriptionSize }) => $descriptionSize}px;
    margin: 0;
    border-bottom: 1.5px solid rgba(30, 27, 75, 0.6);
    padding-bottom: 24px;

    ${({ $descriptionStyle }) => $descriptionStyle}
  }

  ${({ $style }) => $style}
`;

export default TitleSectionStyled;
