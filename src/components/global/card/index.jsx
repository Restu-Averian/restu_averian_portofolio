import { memo } from "react";
import SideBySideCard from "./SideBySideCard";
import RegularCard from "./RegularCard";
import CardCtxProvider from "../../../context/CardCtxProvider";
import CardStyled from "../../../styled/global/Card.styled";

/**
 *
 * @param {import("../../../context/CardCtx").TCardProps & {type?: "side" | "regular"}} props
 * @returns
 */
const Card_ = ({ type, level = 3, ...props }) => {
  return (
    <CardCtxProvider {...props}>
      <CardStyled
        $type={type}
        $level={level}
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
