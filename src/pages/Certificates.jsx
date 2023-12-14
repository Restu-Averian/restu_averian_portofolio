import { Box, SimpleGrid } from "@chakra-ui/react";
import CardData from "../components/CardData";
import Content from "../components/Content";
import certificates from "../constants/certificates";

const Certificates = () => {
  return (
    <Content title="Certificates">
      <SimpleGrid columns={3} spacing={10}>
        {certificates?.map((c, idx) => (
          <Box key={idx}>
            <CardData {...c} />
          </Box>
        ))}
      </SimpleGrid>
    </Content>
  );
};
export default Certificates;
