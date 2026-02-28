import { Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

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

export const ContainerStyled = styled.div`
  ${MEDIA_QUERY_CSS.xs(css`
    max-width: 100%;
  `)}
  ${MEDIA_QUERY_CSS.sm(css`
    max-width: 600px;
  `)}
    ${MEDIA_QUERY_CSS.md(css`
    max-width: 960px;
  `)}
    ${MEDIA_QUERY_CSS.lg(css`
    max-width: 1200px;
  `)}
    ${MEDIA_QUERY_CSS.xl(css`
    max-width: 1440px;
  `)}
`;
