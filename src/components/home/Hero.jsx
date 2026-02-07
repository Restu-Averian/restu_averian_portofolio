import { memo } from "react";
import VectorHero from "../../assets/home/VectorHero";
import Button from "../global/Button";
import Icons from "../global/Icons";
import HeroStyled from "../../styled/home/Hero.styled";

const Hero_ = ({ selectedWorksRef }) => {
  return (
    <HeroStyled>
      <section className="wrapper-hero">
        <Icons
          type="cat-lay-down"
          style={{
            marginTop: 176,
            color: "#839496",
          }}
        />

        <Icons
          type="yarn-ball"
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
          }}
        />
        {/* 
        <VectorHero
          style={{
            position: "absolute",
            top: 512,
            right: "6%",
          }}
        /> */}

        <div className="wrapper-intro">
          <h3 className="hello-text">Hello,</h3>
          <h2 className="name">I'm Restu Averian!</h2>
          <h3 className="role">a Frontend Engineer</h3>
          <p className="desc-self">
            Building high performance frontend interfaces
          </p>

          <Button type="primary" className="btn-hero-explore">
            Explore
          </Button>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
          }}
        >
          <Icons
            type="cat-foot-print"
            style={{
              color: "#839496",
              transform: "rotate(-36deg)",
            }}
          />
          <Icons
            type="cat-foot-print"
            style={{
              color: "#839496",
              transform: "rotate(-36deg)",
            }}
          />
        </div>
      </section>
    </HeroStyled>
  );
};

const Hero = memo(Hero_);
export default Hero;
