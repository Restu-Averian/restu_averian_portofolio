import { forwardRef, memo } from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";
import TechStackStyled, {
  TechStackItemStyled,
} from "../../../styled/home/TechStack.styled";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import { TECH_STACK_ITEM } from "../../../constants";
import { Icon } from "@iconify/react";
import MyContactstText from "./MyContactstText";

const TechStack_ = (_, ref) => {
  const { xs } = useBreakpoint();

  return (
    <TechStackStyled ref={ref}>
      <section
        style={{
          position: "relative",
        }}
      >
        <h2 className="title-section">
          <Icons
            type="cat-foot-print"
            style={{
              transform: "rotate(-32deg)",
              position: "relative",
              top: 24,
              ...(xs && {
                width: 32,
                transform: "rotate(-110deg)",
              }),
            }}
          />
          Tech Stack!
          <Icons
            type="cat-foot-print"
            style={{
              transform: "rotate(0deg)",
              position: "relative",
              top: 42,
              ...(xs && {
                width: 32,
              }),
            }}
          />
        </h2>

        <Flex justifyContent="center">
          <Icons
            type="cat-tech-stack"
            style={{
              color: "#839496",
              ...(xs && {
                width: 240,
              }),
            }}
          />
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
                icon={item?.icon}
                width={xs ? width?.xs : width?.default}
                color="#839496"
              />
            </TechStackItemStyled>
          );
        })}

        {xs ? (
          <div
            style={{
              position: "absolute",
              bottom: "50%",
              left: "calc(50% - 19em)",
            }}
          >
            <MyContactstText />
          </div>
        ) : (
          <MyContactstText />
        )}
      </section>
    </TechStackStyled>
  );
};

const TechStack = memo(forwardRef(TechStack_));
export default TechStack;
