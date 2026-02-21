import { Fragment, memo, useMemo } from "react";
import {
  ButtonPrimaryStyled,
  ButtonSecondaryStyled,
  ButtonTextStyled,
} from "../../styled/global/Button.styled";

/**
 *
 * @param {Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
 * className?:string;
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
  const WrapperStyled = useMemo(() => {
    switch (type) {
      case "primary":
        return ButtonPrimaryStyled;
      case "secondary":
        return ButtonSecondaryStyled;
      case "text":
        return ButtonTextStyled;
      default:
        return Fragment;
    }
  }, [type]);

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
