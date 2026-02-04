import { memo } from "react";
import kucingx1 from "../../assets/home/kucingx1.webp";
import kucingx2 from "../../assets/home/kucingx2.webp";
import yarnballx1 from "../../assets/home/yarnballx1.webp";
import yarnballx2 from "../../assets/home/yarnballx2.webp";
import VectorHero from "../../assets/home/VectorHero";
import { SBGContainer } from "../global/Layout";
import Button from "../global/Button";

const Hero_ = ({ selectedWorksRef }) => {
  return (
    <SBGContainer>
      <section
        style={{
          display: "flex",
          position: "relative",
          marginBottom: 63,
        }}
      >
        <img
          src={kucingx1}
          srcSet={`${kucingx1} 1x, ${kucingx2} 2x`}
          style={{
            marginTop: 48,
          }}
        />

        <img
          src={yarnballx1}
          srcSet={`${yarnballx1} 1x, ${yarnballx2} 2x`}
          style={{
            position: "absolute",
            bottom: 24,
            left: 576,
          }}
        />

        <VectorHero
          style={{
            position: "absolute",
            top: 512,
            right: 208,
          }}
        />

        <div
          style={{
            marginTop: 128,
            marginLeft: "-48px",
            position: "relative",
          }}
        >
          <h3
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 200,
              fontSize: 35,
            }}
          >
            Hello,
          </h3>
          <h2
            style={{
              fontSize: 80,
              fontWeight: 200,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            I'm Restu Averian!
          </h2>
          <h3
            style={{
              fontFamily: "'Caveat', cursive",
              fontStyle: "italic",
              fontSize: 36,
              fontWeight: 200,
              marginBottom: 12,
            }}
          >
            a Frontend Engineer
          </h3>
          <p
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              fontSize: 28,
              width: 360,
            }}
          >
            Building high performance frontend interfaces
          </p>

          <Button
            style={{
              position: "absolute",
              right: 72,
              top: 240,
            }}
          >
            Explore
          </Button>
        </div>
      </section>
    </SBGContainer>
  );
};

const Hero = memo(Hero_);
export default Hero;
