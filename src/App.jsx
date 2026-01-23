import Card from "./components/global/card";
import { SBGCol, SBGContainer, SBGRow } from "./components/global/Layout";
import { DUMMY_PROJECTS } from "./constants";

function App() {
  return (
    <SBGContainer fluid>
      <SBGRow>
        <SBGCol col lg={5}>
          {DUMMY_PROJECTS?.filter((item) => item?.level === 1)?.map((item) => {
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
                level={item?.level}
              />
            );
          })}
        </SBGCol>

        <SBGCol col lg={6}>
          <SBGRow gap={24}>
            {DUMMY_PROJECTS?.filter((item) => item?.level !== 1)?.map(
              (item) => {
                return (
                  <SBGCol col lg={12}>
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
                  </SBGCol>
                );
              },
            )}
          </SBGRow>
        </SBGCol>
      </SBGRow>
    </SBGContainer>
  );
}

export default App;
