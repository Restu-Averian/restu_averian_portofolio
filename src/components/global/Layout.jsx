import {
  Col as ColGrid,
  Container as ContainerGrid,
} from "styled-bootstrap-grid";
import { FlexStyled, RowStyled } from "../../styled/global/Layout.styled";

/**
 *
 * @param {import('styled-bootstrap-grid').ColProps} props
 * @returns
 */
export const SBGCol = ({ ...props }) => {
  return <ColGrid {...props} />;
};

/**
 *
 * @param {import('styled-bootstrap-grid').RowProps & {
 * gap?:import("react").CSSProperties['gap']
 * } } props
 * @returns
 */
export const SBGRow = ({ gap, ...props }) => {
  return <RowStyled {...props} $gap={gap} />;
};

/**
 *
 * @param {import('styled-bootstrap-grid').ContainerProps} props
 * @returns
 */
export const SBGContainer = ({ ...props }) => {
  return <ContainerGrid {...props} />;
};

/**
 *
 * @param {object} props
 * @param {import("react").CSSProperties['justifyContent']} props.justifyContent
 * @param {import("react").CSSProperties['alignItems']} props.alignItems
 * @param {import("react").CSSProperties['gap']} [props.gap]
 * @param {import("react").CSSProperties} [props.style]
 * @returns
 */
export const Flex = ({
  justifyContent,
  alignItems,
  gap = 8,
  style,
  children,
}) => {
  return (
    <FlexStyled
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      style={style}
    >
      {children}
    </FlexStyled>
  );
};
