import { Box, SimpleGrid } from "@chakra-ui/react";
import CardData from "../components/CardData";
import Content from "../components/Content";
import certificates from "../constants/certificates";
import useResponsive from "../hooks/useResponsive";

const Certificates = () => {
  const { sm } = useResponsive();
  return (
    <Content title="Certificates">
      <SimpleGrid columns={sm ? 1 : 3} spacing={10}>
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
