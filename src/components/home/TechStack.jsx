import { memo } from "react";
import TechStackStyled from "../../styled/home/TechStack.styled";
import { Icon } from "@iconify/react";
import Icons from "../global/Icons";
import { Flex } from "../global/Layout";

const TechStack_ = () => {
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
            }}
          />
          Tech Stack!
          <Icons
            type="cat-foot-print"
            style={{
              transform: "rotate(0deg)",
              position: "relative",
              top: 42,
            }}
          />
        </h2>

        <Flex justifyContent="center">
          <Icons
            type="cat-tech-stack"
            style={{
              color: "#839496",
            }}
          />
        </Flex>

        <div
          className="wrapper-tech-stack-item"
          style={{
            bottom: 288,
            left: "calc(50% - 480px)",
          }}
        >
          <Icon icon="mdi:react" width={150} color="#839496" />
        </div>
      </section>
    </TechStackStyled>
  );
};

const TechStack = memo(TechStack_);
export default TechStack;
