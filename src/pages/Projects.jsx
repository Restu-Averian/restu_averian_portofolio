import { Box, SimpleGrid } from "@chakra-ui/react";
import Content from "../components/Content";
import CardData from "../components/CardData";
import projects from "../constants/projects";

const Projects = () => {
  return (
    <Content title="Projects">
      <SimpleGrid columns={3} spacing={10}>
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
