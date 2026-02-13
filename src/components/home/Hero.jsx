import { memo } from "react";
import VectorHero from "../../assets/home/VectorHero";
import Button from "../global/Button";
import Icons from "../global/Icons";
import HeroStyled from "../../styled/home/Hero.styled";
import useBreakpoint from "../../hooks/useBreakpoint";

const Hero_ = ({ selectedWorksRef }) => {
  const { xs } = useBreakpoint();
  return (
    <HeroStyled>
      <section className="wrapper-hero">
        {!xs && (
          <>
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
          </>
        )}

        <div className="wrapper-intro">
          <h3 className="hello-text">Hello,</h3>
          <h2 className="name">I'm Restu Averian!</h2>
          <h3 className="role">a Frontend Engineer</h3>
          <p className="desc-self">
            Building high performance frontend interfaces
          </p>

          {!xs && (
            <Button
              type="primary"
              className="btn-hero-explore"
              onClick={() => {
                if (selectedWorksRef?.current) {
                  selectedWorksRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }
              }}
            >
              Explore
            </Button>
          )}
        </div>

        {xs && (
          <>
            <Icons
              type="cat-lay-down"
              style={{
                color: "#839496",
                width: 200,
                height: 213,
                transform: "rotate(-10deg)",
                marginTop: -32,
              }}
            />

            <Icons
              type="yarn-ball"
              style={{
                position: "absolute",
                bottom: 0,
                left: "calc(50% + 32px)",
                width: 84,
                height: 84,
              }}
            />
          </>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            ...(xs && {
              top: "calc(50% + 3em)",
              left: "calc(50% + 3em)",
              bottom: "unset",
              transform: "rotate(180deg)",
            }),
          }}
        >
          <Icons
            type="cat-foot-print"
            style={{
              color: "#839496",
              transform: "rotate(-36deg)",
              ...(xs && {
                width: 48,
                height: 47,
              }),
            }}
          />
          <Icons
            type="cat-foot-print"
            style={{
              color: "#839496",
              transform: "rotate(-36deg)",
              ...(xs && {
                width: 48,
                height: 47,
              }),
            }}
          />
        </div>

        {xs && (
          <Button
            type="primary"
            className="btn-hero-explore"
            containerAttrs={{
              style: {
                textAlign: "center",
              },
            }}
          >
            Explore
          </Button>
        )}
      </section>
    </HeroStyled>
  );
};

const Hero = memo(Hero_);
export default Hero;
