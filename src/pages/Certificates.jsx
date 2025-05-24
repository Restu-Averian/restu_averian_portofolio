import { Box, Flex } from "@chakra-ui/react";
import CardData from "../components/CardData";
import Content from "../components/Content";
import certificates from "../constants/certificates";
import useResponsive from "../hooks/useResponsive";

const Certificates = () => {
  const { xs } = useResponsive();

  return (
    <Content title="Certificates">
      <Flex
        flexDirection={xs ? "column" : "row"}
        gap={5}
        flexWrap="wrap"
        justifyContent="center"
      >
        {certificates?.map((c, idx) => (
          <Box
            key={idx}
            {...(xs && {
              margin: "auto",
            })}
          >
            <CardData {...c} />
          </Box>
        ))}
      </Flex>
    </Content>
  );
};
export default Certificates;
