import { memo } from "react";
import SideBySideCard from "./SideBySideCard";
import RegularCard from "./RegularCard";
import CardCtxProvider from "../../../context/CardCtxProvider";
import CardStyled from "../../../styled/global/Card.styled";

/**
 *
 * @param {import("../../../context/CardCtx").TCardProps & {
 * type?: "side" | "regular",
 * style?:import("react").CSSProperties
 * }} props
 * @returns
 */
const Card_ = ({ type, level = 3, style, ...props }) => {
  return (
    <CardCtxProvider level={level} {...props}>
      <CardStyled
        $type={type}
        $level={level}
        $style={style}
        onClick={(e) => {
          if (typeof props?.onClickCard === "function") {
            props?.onClickCard(e);
          }
        }}
      >
        {type === "side" ? <SideBySideCard /> : <RegularCard />}
      </CardStyled>
    </CardCtxProvider>
  );
};

const Card = memo(Card_);
export default Card;
