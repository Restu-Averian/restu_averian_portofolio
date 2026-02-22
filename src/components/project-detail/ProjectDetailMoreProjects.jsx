import useEmblaCarousel from "embla-carousel-react";
import { memo, useEffect, useEffectEvent, useState } from "react";
import Card from "../global/card/Card";
import { Icon } from "@iconify/react";
import { Flex } from "../global/Layout";
import { useParams } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoint";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProjectDetailMoreProjects_ = () => {
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  const { xs } = useBreakpoint();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: xs ? "x" : "y",
    dragFree: false,
    slidesToScroll: 1,
    loop: false,
  });

  const { id } = useParams();

  const goToPrev = () => emblaApi?.scrollPrev();

  const goToNext = () => emblaApi?.scrollNext();

  const onCheckDisabled = useEffectEvent((emblaApi) => {
    setDisabledPrev(emblaApi?.canScrollPrev() === false);
    setDisabledNext(emblaApi?.canScrollNext() === false);
  });

  useEffect(() => {
    if (!emblaApi) return;

    onCheckDisabled(emblaApi);
    emblaApi
      .on("reinit", () => onCheckDisabled(emblaApi))
      .on("select", () => onCheckDisabled(emblaApi));
  }, [emblaApi]);

  return (
    <div className="pd__more-projects">
      <h3 className="pd__more-projects-title">More Projects</h3>

      <Flex className="pd__more-projects-wrapper">
        <div className="pd__more-projects-contents" ref={emblaRef}>
          <Flex className="pd__more-projects-contents-list">
            {SLIDES?.filter((item) => item !== Number(id)).map((item, idx) => {
              return (
                <div className="pd__more-projects-contents-list-item" key={idx}>
                  <Card
                    key={idx}
                    title={`Project ${item}`}
                    subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, cupiditate. Distinctio ullam blanditiis illum ipsum odit laudantium harum amet exercitationem repellendus"
                  />
                </div>
              );
            })}
          </Flex>
        </div>

        <Flex className="pd__more-projects-btnoperator">
          <Icon
            icon={xs ? "raphael:arrowleft" : "raphael:arrowup"}
            className={`pd__more-projects-btnoperator-item${disabledPrev ? "-disabled" : ""}`}
            onClick={() => goToPrev()}
            width={36}
          />

          <Icon
            icon={xs ? "raphael:arrowright" : "raphael:arrowdown"}
            className={`pd__more-projects-btnoperator-item${disabledNext ? "-disabled" : ""}`}
            onClick={() => {
              goToNext();
            }}
            width={36}
          />
        </Flex>
      </Flex>
    </div>
  );
};

const ProjectDetailMoreProjects = memo(ProjectDetailMoreProjects_);
export default ProjectDetailMoreProjects;
