import { memo } from "react";
import CatTechStack from "../../assets/home/cat-tech-stack.webp";
import TechStackStyled from "../../styled/home/TechStack.styled";
import CatFootPrint from "../../assets/CatFootPrint";

const TechStack_ = () => {
  return (
    <TechStackStyled
      style={{
        paddingTop: 384,
      }}
    >
      <section
        style={{
          position: "relative",
        }}
      >
        <h2 className="title-section">
          <CatFootPrint
            style={{
              transform: "rotate(-32deg)",
              position: "relative",
              top: 24,
            }}
          />
          Tech Stack!
          <CatFootPrint
            style={{
              transform: "rotate(90deg)",
              position: "relative",
              top: 42,
            }}
          />
        </h2>

        <figure
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <img src={CatTechStack} width={576} />
        </figure>
      </section>
    </TechStackStyled>
  );
};

const TechStack = memo(TechStack_);
export default TechStack;
