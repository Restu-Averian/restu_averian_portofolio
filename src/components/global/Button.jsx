import { memo } from "react";
import {
  ButtonPrimaryStyled,
  ButtonSecondaryStyled,
} from "../../styled/global/Button.styled";

/**
 *
 * @param {Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
 * className?:string;
 * styleContainer?:import("react").CSSProperties;
 * type?:'primary'|'secondary';
 * containerAttrs?: import("react").HTMLAttributes<HTMLDivElement>
 * }} props
 * @returns
 */
const Button_ = ({
  children,
  style,
  containerAttrs = {},
  type = "primary",
  ...props
}) => {
  const WrapperStyled =
    type === "primary" ? ButtonPrimaryStyled : ButtonSecondaryStyled;

  return (
    <div {...(containerAttrs || {})}>
      <WrapperStyled {...props} $style={style}>
        {children}
      </WrapperStyled>
    </div>
  );
};

const Button = memo(Button_);
export default Button;
