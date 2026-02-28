import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import CardSP from "../../global/card/CardSP";
import SelectedWorksFootprint from "./SelectedWorksFootprint";
import Button from "../../global/Button";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

const SelectedWorksContentMobile_ = () => {
  const navigate = useNavigate();

  const TRANSFORM_CARD = {
    1: {
      rotate: -10,
      x: -50,
      y: 20,
    },
    2: {
      rotate: -18,
      x: -5,
      y: 36,
    },
    3: {
      rotate: 10,
      x: 50,
      y: 0,
    },
  };

  return (
    <section className="hm__sw">
      <div className="hm__sw-title-section">
        <h2 className="hm__sw-title-section-text">Selected Project</h2>

        <Icons
          type="selected-projects-cat"
          className="hm__sw-title-section-icon"
        />
      </div>

      <Flex className="hm__sw-list-projects">
        {Array.from({ length: 3 })?.map((_, idx) => {
          const transform = TRANSFORM_CARD?.[idx + 1];

          const rotate = transform?.rotate;
          const y = transform?.y;
          const x = transform?.x;
          return (
            <CardSP
              key={idx}
              title="Project 1 - Destroyer The World"
              subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
              style={{
                transform: `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px) `,
                position: "absolute",
              }}
              extraBtn={
                <Button
                  type="text"
                  className="hm__sw-list-projects-btn-explore"
                  onClick={() => navigate(`/project/${idx + 1}`)}
                >
                  Explore
                </Button>
              }
            />
          );
        })}
      </Flex>

      <SelectedWorksFootprint />

      <Flex
        alignItems="center"
        className="hm__sw-explore-more"
        onClick={() => {
          navigate("/project");
        }}
      >
        <button className="hm__sw-explore-more-btn">Explore More</button>

        <Icons className="hm__sw-explore-more-icon" type="back-icon-cat" />
      </Flex>
    </section>
  );
};

const SelectedWorksContentMobile = memo(SelectedWorksContentMobile_);
export default SelectedWorksContentMobile;
