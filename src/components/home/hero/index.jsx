import { memo } from "react";
import Button from "../../global/Button";
import useBreakpoint from "../../../hooks/useBreakpoint";
import HeroStyled from "../../../styled/home/Hero.styled";
import HeroCatYarnball from "./HeroCatYarnball";
import HeroCatFootprint from "./HeroCatFootprint";
import { onScrollTarget } from "../../../helpers";

const Hero_ = ({ selectedWorksRef }) => {
  const { xs } = useBreakpoint();

  const onClickExplore = () => {
    if (selectedWorksRef?.current) {
      onScrollTarget(selectedWorksRef?.current);
    }
  };
  return (
    <HeroStyled>
      <section className="hm__hero">
        {!xs && <HeroCatYarnball />}

        <div className="hm__hero-intro">
          <h3 className="hm__hero-intro-hello-text">Hello,</h3>
          <h2 className="hm__hero-intro-name">I'm Restu Averian!</h2>
          <h3 className="hm__hero-intro-role">a Frontend Engineer</h3>
          <p className="hm__hero-intro-desc-self">
            Building high performance frontend interfaces
          </p>

          {!xs && (
            <Button
              type="primary"
              className="btn-hero-explore"
              onClick={() => {
                onClickExplore();
              }}
            >
              Explore
            </Button>
          )}
        </div>

        {xs && <HeroCatYarnball />}

        <HeroCatFootprint />

        {xs && (
          <Button
            type="primary"
            className="btn-hero-explore"
            containerAttrs={{
              style: {
                textAlign: "center",
              },
            }}
            onClick={() => {
              onClickExplore();
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
