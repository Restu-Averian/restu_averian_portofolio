import { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { getRandNum } from "../../../helpers";
import SelectedWorksFootprint from "./SelectedWorksFootprint";
import SelectedWorksStyled from "../../../styled/home/SelectedWorks.styled";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import Card from "../../global/Card";

const SelectedWorks_ = ({ techStackRef }, ref) => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  const onClickTechEverUsed = () => {
    if (techStackRef?.current) {
      techStackRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <SelectedWorksStyled ref={ref}>
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
            const translateData = {
              1: 63,
              2: -52,
              3: 0,
            };
            return (
              <Card
                width={480}
                key={idx}
                title="Project 1 - Destroyer The World"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
      accusantium soluta adipisci tenetur. Repellendus tempore delectus eum
      consectetur laborum, ducimus aperiam quisquam animi modi exercitationem
      itaque velit deleniti numquam deserunt?"
                rotateBtn={getRandNum(-6, -3)}
                configCard={{
                  rotate: getRandNum(6, -6),
                  ...(xs === false && {
                    translateY: translateData[idx + 1],
                  }),
                }}
                onClick={() => {
                  navigate(`/project/${idx + 1}`);
                }}
              />
            );
          })}
        </Flex>

        <SelectedWorksFootprint />

        <p
          className="hm__sw-ask-txt-persuasive"
          onClick={() => {
            onClickTechEverUsed();
          }}
        >
          Tech that i ever used?
        </p>

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
    </SelectedWorksStyled>
  );
};

const SelectedWorks = memo(forwardRef(SelectedWorks_));
export default SelectedWorks;
