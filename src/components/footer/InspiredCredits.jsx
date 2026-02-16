import { memo } from "react";
import { CREDITS, INSPIRED_BY } from "../../constants";
import { Flex } from "../global/Layout";
import Icons from "../global/Icons";

const InspiredCredits_ = () => {
  return (
    <section className="ftr__inspired-credits">
      <Flex className="ftr__inspired-credits-group">
        <span className="ftr__inspired-credits-group-title">Credits</span>

        {CREDITS?.map((item, idx) => {
          return (
            <p
              key={idx}
              className="ftr__inspired-credits-group-item"
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

      <Flex className="ftr__inspired-credits-group">
        <span className="ftr__inspired-credits-group-title">Inspired By</span>

        {INSPIRED_BY?.map((item, idx) => {
          return (
            <p
              key={idx}
              className="ftr__inspired-credits-group-item"
              onClick={() => {
                window.open(item?.link, "_blank");
              }}
            >
              {item?.author}
            </p>
          );
        })}
      </Flex>
    </section>
  );
};

const InspiredCredits = memo(InspiredCredits_);
export default InspiredCredits;
