import { forwardRef, memo } from "react";
import { Icon } from "@iconify/react";
import useBreakpoint from "../../../hooks/useBreakpoint";
import TechStackStyled, {
  TechStackItemStyled,
} from "../../../styled/home/TechStack.styled";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import { TECH_STACK_ITEM } from "../../../constants";
import MyContactstText from "./TechStackMyContactstText";

const TechStack_ = (_, ref) => {
  const { xs } = useBreakpoint();

  return (
    <TechStackStyled ref={ref}>
      <section className="hm__ts">
        <h2 className="hm__ts-title-section">
          <Icons
            type="cat-foot-print"
            className="hm__ts-title-section-icon-left"
          />
          Tech Stack!
          <Icons
            type="cat-foot-print"
            className="hm__ts-title-section-icon-right"
          />
        </h2>

        <Flex className="hm__ts-main-icon">
          <Icons type="cat-tech-stack" className="hm__ts-main-icon-item" />
        </Flex>

        {TECH_STACK_ITEM?.map((item, idx) => {
          const width = item?.width;
          const position = item?.position;

          return (
            <TechStackItemStyled
              key={idx}
              $index={idx}
              $style={{
                ...(xs
                  ? {
                      ...(position?.xs || {}),
                    }
                  : {
                      ...(position?.default || {}),
                    }),
              }}
            >
              <Icon
                className="hm__ts-item-icon"
                icon={item?.icon}
                width={xs ? width?.xs : width?.default}
              />
            </TechStackItemStyled>
          );
        })}

        <MyContactstText />
      </section>
    </TechStackStyled>
  );
};

const TechStack = memo(forwardRef(TechStack_));
export default TechStack;
