import {
  Col as ColGrid,
  Container as ContainerGrid,
} from "styled-bootstrap-grid";
import { FlexStyled, RowStyled } from "../../styled/global/Layout.styled";
import { useMemo } from "react";

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
 * @param {import("react").CSSProperties['flexDirection']} props.flexDirection
 * @param {import("react").CSSProperties['gap']} [props.gap]
 * @param {import("react").CSSProperties['flex']} [props.flex]
 * @param {import("react").CSSProperties['flexWrap']} [props.flexWrap]
 * @param {import("react").CSSProperties['alignSelf']} [props.alignSelf]
 * @param {string} [props.className]
 * @param {import("react").CSSProperties} [props.style]
 * @param {import("react").HTMLAttributes<HTMLDivElement>['onClick']} [props.onClick]
 * @returns
 */
export const Flex = ({
  justifyContent,
  alignItems,
  flexDirection,
  gap = 8,
  flex,
  flexWrap = "wrap",
  alignSelf = "flex-start",
  style,
  className,
  onClick,
  children,
}) => {
  const fmtGap = useMemo(
    () => (typeof gap === "number" ? `${gap}px` : gap),
    [gap],
  );

  return (
    <FlexStyled
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
      $gap={fmtGap}
      style={style}
      $flex={flex}
      $flexWrap={flexWrap}
      $alignSelf={alignSelf}
      className={className}
      onClick={onClick}
    >
      {children}
    </FlexStyled>
  );
};
