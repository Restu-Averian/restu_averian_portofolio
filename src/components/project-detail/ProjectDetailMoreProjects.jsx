import { Fragment, memo, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";
import Card from "../global/card/Card";
import useBreakpoint from "../../hooks/useBreakpoint";
import { Flex } from "../global/Layout";
import "swiper/css";
import "swiper/css/pagination";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProjectDetailMoreProjects_ = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const swiperRef = useRef(null);

  const { xs } = useBreakpoint();

  const WrapperIcon = useMemo(() => (xs ? Fragment : Flex), [xs]);

  return (
    <div className="pd__more-projects">
      <h3 className="pd__more-projects-title">More Projects</h3>

      <Flex className="pd__more-projects-wrapper">
        <div className="pd__more-projects-contents">
          <Flex className="pd__more-projects-contents-list">
            <Swiper
              ref={swiperRef}
              className="mySwiper"
              slidesPerView={1}
              loop
              direction={xs ? "horizontal" : "vertical"}
              modules={[Pagination]}
            >
              {SLIDES?.filter((item) => item !== Number(id)).map(
                (item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="pd__more-projects-contents-list-item">
                        <Card
                          key={idx}
                          title={`Project ${item}`}
                          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, cupiditate. Distinctio ullam blanditiis illum ipsum odit laudantium harum amet exercitationem repellendus"
                          onClick={() => {
                            navigate(`/project/${item?.id || idx}`);
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  );
                },
              )}
            </Swiper>
          </Flex>
        </div>

        <WrapperIcon
          {...(!xs && {
            flexDirection: "column",
          })}
        >
          <Icon
            icon={`raphael:arrow${xs ? "left" : "up"}`}
            className="pd__more-projects-btnoperator-item prev"
            onClick={() => {
              const swiper = swiperRef?.current.swiper;
              swiper?.slidePrev();
            }}
            width={36}
          />

          <Icon
            icon={`raphael:arrow${xs ? "right" : "down"}`}
            className="pd__more-projects-btnoperator-item next"
            onClick={() => {
              const swiper = swiperRef?.current.swiper;

              swiper?.slideNext();
            }}
            width={36}
          />
        </WrapperIcon>
      </Flex>
    </div>
  );
};

const ProjectDetailMoreProjects = memo(ProjectDetailMoreProjects_);
export default ProjectDetailMoreProjects;
