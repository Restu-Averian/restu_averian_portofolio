import styled from "styled-components";

const ImageStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;

  .img-loading {
    position: absolute;
    inset: 0;
    background-color: #e8dcc4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 12px 6px 14px;
    flex-direction: column;
    z-index: 9999;
    gap: 8px;

    &-icon {
      width: 24px;
      height: 32px;
      color: #8d6e63;
    }

    &-text {
      color: #8d6e63;
      font-size: 12px;
      font-family: "Mali", cursive;
      font-weight: 600;
    }
  }
`;

export default ImageStyled;
