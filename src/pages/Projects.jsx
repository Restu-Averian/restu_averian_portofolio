import { Box, SimpleGrid } from "@chakra-ui/react";
import Content from "../components/Content";
import CardData from "../components/CardData";
import projects from "../constants/projects";
import useResponsive from "../hooks/useResponsive";

const Projects = () => {
  const { sm } = useResponsive();
  return (
    <Content title="Projects">
      <SimpleGrid columns={sm ? 1 : 3} spacing={10}>
        {projects?.map((p, idx) => (
          <Box key={idx}>
            <CardData {...p} />
          </Box>
        ))}
      </SimpleGrid>
    </Content>
  );
};
export default Projects;
