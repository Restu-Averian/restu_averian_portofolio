import ButtonStyled from "../../styled/global/Button.styled";
import Icons from "./Icons";

/**
 * @typedef TBase
 * @property {"primary" | "outline" | "text"} variant
 * @property {import("./Icons").TIcons['type']} icon
 * @property {import("react").CSSProperties} style
 * @property {"small" | "medium" | "large"} size
 * @property {"circle" | "round"} shape
 *
 * @typedef {TBase & React.ButtonHTMLAttributes<HTMLButtonElement> & {renderAs? : "button"}} TButton
 * @typedef {TBase &  React.AnchorHTMLAttributes<HTMLAnchorElement> & {renderAs : "a"}} TAnchor
 *
 * @param {TButton | TAnchor} props
 * @returns
 */
const Button = ({
  variant,
  icon,
  renderAs,
  children,
  size,
  style,
  shape = "circle",
  ...props
}) => {
  const Component = renderAs || "button";

  return (
    <ButtonStyled
      $variant={variant}
      onClick={props.onClick}
      style={style}
      $size={size}
      $shape={shape}
    >
      <Component {...props}>{children}</Component>
      {icon ? <Icons type={icon} /> : null}
    </ButtonStyled>
  );
};

export default Button;
