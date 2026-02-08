import { memo } from "react";
import TechStackStyled, {
  TechStackItemStyled,
} from "../../styled/home/TechStack.styled";
import { Icon } from "@iconify/react";
import Icons from "../global/Icons";
import { Flex } from "../global/Layout";
import useBreakpoint from "../../hooks/useBreakpoint";

const TechStack_ = () => {
  const { xs } = useBreakpoint();

  return (
    <TechStackStyled>
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
                width: 48,
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
                width: 48,
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
                width: 300,
              }),
            }}
          />
        </Flex>

        <TechStackItemStyled
          $borderSlice={xs ? 46 : 45}
          $borderSize={xs ? 18 : 45}
          $style={{
            top: 96,
          }}
        >
          <Icon icon="mdi:react" width={xs ? 64 : 150} color="#839496" />
        </TechStackItemStyled>
      </section>
    </TechStackStyled>
  );
};

const TechStack = memo(TechStack_);
export default TechStack;
