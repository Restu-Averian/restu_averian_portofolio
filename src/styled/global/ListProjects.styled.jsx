import styled, { css } from "styled-components";
import { MEDIA_QUERY_CSS } from "../../hooks/useBreakpoint";

const ListProjectsStyled = styled.section`
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;

  ${MEDIA_QUERY_CSS?.xs(css`
    gap: 24px;
    margin-top: 63px;
  `)}
`;

export default ListProjectsStyled;
