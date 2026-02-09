import { memo } from "react";
import { CREDITS, INSPIRED_BY } from "../../constants";
import { Flex } from "../global/Layout";
import Icons from "../global/Icons";
import { InspiredCreditsStyled } from "../../styled/layout/Footer.styled";
import useBreakpoint from "../../hooks/useBreakpoint";

const InspiredCredits_ = () => {
  const { xs } = useBreakpoint();

  return (
    <InspiredCreditsStyled>
      <Flex flexDirection="column" justifyContent="flex-end">
        <span className="title-group">Credits</span>

        {CREDITS?.map((item, idx) => {
          return (
            <p
              key={idx}
              className="lbl-item-inspired-credits"
              onClick={() => {
                window.open(item?.link, "_blank");
              }}
            >
              {item?.author}
            </p>
          );
        })}
      </Flex>

      <Icons type="cat-lay-one-back" className="illustrate-inspired-credits" />

      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        {...(xs && {
          alignSelf: "flex-end",
        })}
      >
        <span className="title-group">Inspired By</span>

        {INSPIRED_BY?.map((item, idx) => {
          return (
            <p
              key={idx}
              className="lbl-item-inspired-credits"
              onClick={() => {
                window.open(item?.link, "_blank");
              }}
            >
              {item?.author}
            </p>
          );
        })}
      </Flex>
    </InspiredCreditsStyled>
  );
};

const InspiredCredits = memo(InspiredCredits_);
export default InspiredCredits;
