import { memo } from "react";
import TitleSection from "../../components/global/TitleSection";
import { DUMMY_PROJECTS_ALL_PROJECTS } from "../../constants";
import Card from "../../components/global/card";
import { Flex } from "../../components/global/Layout";
import FilterTechStacks from "../../styled/all-projects/FilterTechStacks.styled";

const AllProjects_ = () => {
  return (
    <section
      style={{
        padding: "0px 14px",
      }}
    >
      <TitleSection
        title="All Projects"
        description="Lorem ipsum dolor sir amet something word should put in here"
      />

      <FilterTechStacks>
        <li className="selected">All</li>
        <li>React</li>
        <li>Ant Design</li>
      </FilterTechStacks>

      <Flex gap={24} alignItems="center" justifyContent="center">
        {DUMMY_PROJECTS_ALL_PROJECTS?.filter((item) => item?.level !== 1)
          ?.slice(4, DUMMY_PROJECTS_ALL_PROJECTS?.length)
          ?.map((item, idx) => {
            return (
              <Card
                style={{
                  width: 360,
                }}
                key={idx}
                thumbnailConfig={{
                  src: item?.thumbnail,
                  alt: item?.title,
                }}
                projectConfig={{
                  title: item?.title,
                  description: item?.description,
                }}
                level={item?.level}
              />
            );
          })}
      </Flex>
    </section>
  );
};

const AllProjects = memo(AllProjects_);
export default AllProjects;
