import { memo } from "react";
import ButtonStyled from "../../styled/global/Button.styled";

/**
 *
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
 * className?:string;
 * styleContainer?:import("react").CSSProperties;
 * }} props
 * @returns
 */
const Button_ = ({
  children,
  style,
  styleContainer = {},
  className,
  ...props
}) => {
  return (
    <div style={styleContainer} className={className}>
      <ButtonStyled {...props} $style={style}>
        {children}
      </ButtonStyled>
    </div>
  );
};

const Button = memo(Button_);
export default Button;
