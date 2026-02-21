import { memo } from "react";
import { Flex } from "../../global/Layout";
import CardSP from "../../global/card/CardSP";
import Icons from "../../global/Icons";
import { useNavigate } from "react-router-dom";
import SelectedWorksFootprint from "./SelectedWorksFootprint";

const SelectedWorksContentDesktop_ = () => {
  const navigate = useNavigate();

  const TRANSFORM_CARD = {
    1: {
      left: 0,
      top: 36,
      transform: "rotate(-10deg)",
    },
    2: {
      transform: "rotate(-15deg)",
      left: "50%",
      translate: "-50% 60px",
    },
    3: {
      transform: "rotate(10deg)",
      right: 0,
    },
  };

  return (
    <section className="hm__sw">
      <SelectedWorksFootprint />

      <div className="hm__sw-content">
        <Flex className="hm__sw-content-list-projects">
          {Array.from({ length: 3 })?.map((_, idx) => {
            const styleCard = TRANSFORM_CARD?.[idx + 1];

            return (
              <CardSP
                className="hm__sw-content-list-projects-item"
                key={idx}
                title="Project 1 - Destroyer The World"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
                style={{
                  position: "absolute",
                  ...(styleCard || {}),
                }}
                // onClick={() => {
                //   navigate(`/project/${idx + 1}`);
                // }}
              />
            );
          })}
        </Flex>

        <div className="hm__sw-content-texts">
          <div className="hm__sw-content-texts-title-section">
            <h2 className="hm__sw-content-texts-title-section-text">
              Selected Project
            </h2>

            <Icons
              type="selected-projects-cat"
              className="hm__sw-content-texts-title-section-icon"
            />
          </div>

          <Flex
            alignItems="center"
            className="hm__sw-content-texts-btn"
            onClick={() => {
              navigate("/project");
            }}
          >
            <button className="hm__sw-content-texts-btn-text">
              Explore More
            </button>

            <Icons
              className="hm__sw-content-texts-btn-icon"
              type="back-icon-cat"
            />
          </Flex>
        </div>

        <p className="hm__sw-content-ask-tech">Tech that i ever used?</p>
      </div>
    </section>
  );
};

const SelectedWorksContentDesktop = memo(SelectedWorksContentDesktop_);
export default SelectedWorksContentDesktop;
