import { Box, Flex } from "@chakra-ui/react";
import Content from "../components/Content";
import CardData from "../components/CardData";
import projects from "../constants/projects";
import useResponsive from "../hooks/useResponsive";

const Projects = () => {
  const { xs } = useResponsive();
  return (
    <Content title="Projects">
      <Flex
        flexDirection={xs ? "column" : "row"}
        gap={5}
        flexWrap="wrap"
        justifyContent="center"
      >
        {projects?.map((p, idx) => (
          <Box
            key={idx}
            {...(xs && {
              margin: "auto",
            })}
          >
            <CardData {...p} />
          </Box>
        ))}
      </Flex>
    </Content>
  );
};
export default Projects;
