import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/global/Button";
import { Flex, SBGContainer } from "../components/global/Layout";
import FilterTechStacks from "../styled/all-projects/FilterTechStacks.styled";
import TitleSection from "../components/global/TitleSection";
import { DUMMY_PROJECTS_ALL_PROJECTS } from "../constants";
import Card from "../components/global/card";

const ProjectDetail_ = () => {
  //   const { id } = useParams();
  const navigate = useNavigate();

  return (
    <SBGContainer>
      <Button
        variant="outline"
        renderAs="button"
        onClick={() => {
          navigate("/project");
        }}
        style={{
          margin: "24px 0px",
        }}
        size="small"
      >
        Back to All Projects
      </Button>

      <Flex justifyContent="space-between" alignItems="center" gap={36}>
        <img
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          style={{
            width: 240,
            flex: 1,
          }}
        />

        <Flex flexDirection="column" flex={1} gap={24}>
          <div aria-labelledby="title">
            <h1>Project 1</h1>

            <FilterTechStacks>
              <li className="selected">All</li>
              <li>React</li>
              <li>Ant Design</li>
            </FilterTechStacks>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            minima recusandae temporibus? Adipisci dolor mollitia illo maxime
            repellat harum molestias quibusdam et doloremque omnis, non
            architecto recusandae dolores, facere perferendis.
          </p>

          <div aria-labelledby="challenge">
            <TitleSection
              title="Challenge / Problem"
              description="Challenge faced when create this feature/app"
              size="medium"
              descriptionStyle={{
                paddingBottom: 12,
              }}
              style={{
                marginBottom: 12,
              }}
            />
          </div>

          <ul>
            <li>Optimizing data manipulation up to 500k+ data</li>
          </ul>

          <div aria-labelledby="solution">
            <TitleSection
              title="Solution"
              description="Solution that i use to solve the case"
              size="medium"
              descriptionStyle={{
                paddingBottom: 12,
              }}
              style={{
                marginBottom: 12,
              }}
            />
            <ul>
              <li>Combining map() and set()</li>
              <li>Using useRef and useState()</li>
              <li>Codebase is proprietary/private</li>
            </ul>
          </div>

          <Button
            icon="external-link"
            shape="round"
            size="small"
            variant="primary"
            style={{
              marginTop: 24,
            }}
          >
            Try It
          </Button>
        </Flex>
      </Flex>

      <TitleSection
        title="Another of My Project"
        description="Lorem ipsum dolor sir amet something word should put in here"
        descriptionStyle={{
          marginBottom: 24,
        }}
        size="medium"
        style={{
          marginTop: 63,
        }}
      />

      <Flex gap={24} alignItems="center">
        {DUMMY_PROJECTS_ALL_PROJECTS?.filter((item) => item?.level !== 1)
          ?.slice(0, 4)
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
                onClickCard={() => {
                  navigate(`/project/${item?.id}`);
                }}
              />
            );
          })}
      </Flex>

      <Button
        variant="outline"
        style={{
          margin: "48px auto 0",
        }}
        icon="arrow-right"
        renderAs="button"
        size="medium"
        onClick={() => {
          navigate("/project");
        }}
      >
        VIEW ALL PROJECTS
      </Button>
    </SBGContainer>
  );
};

const ProjectDetail = memo(ProjectDetail_);
export default ProjectDetail;
