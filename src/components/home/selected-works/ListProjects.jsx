import { memo, useMemo } from "react";
import { Flex, SBGContainer } from "../../global/Layout";
import Card from "../../global/card";
import { DUMMY_PROJECTS_SELECTED_WORKS } from "../../../constants";

const ListProjects_ = () => {
  const highlightProjects = useMemo(
    () => DUMMY_PROJECTS_SELECTED_WORKS?.find((item) => item?.level === 1),
    [],
  );

  return (
    <SBGContainer fluid>
      <Flex justifyContent="space-between" gap={24}>
        <div
          style={{
            flex: 1.1,
          }}
        >
          <Card
            thumbnailConfig={{
              src: highlightProjects?.thumbnail,
              alt: highlightProjects?.title,
            }}
            projectConfig={{
              title: highlightProjects?.title,
              description: highlightProjects?.description,
            }}
            level={highlightProjects?.level}
          />
        </div>

        <div
          style={{
            flex: 1,
          }}
        >
          <Flex gap={24} alignItems="center" flexDirection="column">
            {DUMMY_PROJECTS_SELECTED_WORKS?.filter(
              (item) => item?.level !== 1,
            )?.map((item) => {
              return (
                <Card
                  thumbnailConfig={{
                    src: item?.thumbnail,
                    alt: item?.title,
                  }}
                  projectConfig={{
                    title: item?.title,
                    description: item?.description,
                  }}
                  type="side"
                  level={item?.level}
                />
              );
            })}
          </Flex>
        </div>
      </Flex>
    </SBGContainer>
  );
};

const ListProjects = memo(ListProjects_);
export default ListProjects;
