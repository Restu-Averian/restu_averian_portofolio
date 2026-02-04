import { memo } from "react";
import ButtonStyled from "../../styled/global/Button.styled";

/**
 *
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
 * rotate?:number;
 * className?:string;
 * }} props
 * @returns
 */
const Button_ = ({ children, style, rotate, className, ...props }) => {
  return (
    <div
      {...(rotate && {
        style: {
          transform: `rotate(${rotate}deg)`,
        },
      })}
      className={className}
    >
      <ButtonStyled {...props} $style={style}>
        {children}
      </ButtonStyled>
    </div>
  );
};

const Button = memo(Button_);
export default Button;
