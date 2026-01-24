import ButtonStyled from "../../styled/global/Button.styled";
import Icons from "./Icons";

/**
 * @typedef TBase
 * @property {"primary" | "outline" | "text"} variant
 * @property {import("./Icons").TIcons['type']} icon
 *
 * @typedef {TBase & React.ButtonHTMLAttributes<HTMLButtonElement> & {renderAs? : "button"}} TButton
 * @typedef {TBase &  React.AnchorHTMLAttributes<HTMLAnchorElement> & {renderAs : "a"}} TAnchor
 *
 * @param {TButton | TAnchor} props
 * @param {import("react").CSSProperties} [props.style]
 * @returns
 */
const Button = ({ variant, icon, renderAs, children, style, ...props }) => {
  const Component = renderAs || "button";

  return (
    <ButtonStyled $variant={variant} onClick={props.onClick} style={style}>
      <Component {...props}>{children}</Component>
      {icon ? <Icons type={icon} /> : null}
    </ButtonStyled>
  );
};

export default Button;
