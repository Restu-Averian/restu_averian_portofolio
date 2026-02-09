import { Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";

export const FlexStyled = styled.div`
  display: flex;
  ${(props) => {
    return css`
      justify-content: ${props.$justifyContent};
      align-items: ${props.$alignItems};
      flex-direction: ${props.$flexDirection};
      gap: ${props.$gap};
      flex: ${props?.$flex};
      flex-wrap: ${props?.$flexWrap};
      align-self: ${props?.$alignSelf};
    `;
  }}
`;

export const RowStyled = styled(Row)`
  && {
    margin-right: 0;
    margin-left: 0;

    ${({ $gap }) => {
      return css`
        gap: ${$gap}px;
      `;
    }}
  }
`;
