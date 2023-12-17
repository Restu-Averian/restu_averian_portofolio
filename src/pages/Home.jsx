import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Icon from "../components/Icon";
import contacts from "../constants/contacts";
import Helmet from "../components/Helmet";
import useResponsive from "../hooks/useResponsive";

const Home = () => {
  const { sm } = useResponsive();
  return (
    <Helmet title="Home">
      <Stack spacing={50}>
        <Box>
          <Heading fontSize={sm ? "50px" : "100px"} as="h3">
            Restu Averian Putra
          </Heading>
        </Box>
        <Box>
          <Text fontSize={sm ? "24px" : "32px"}>
            Aspiring to become a proficient Front-End Developer
          </Text>
        </Box>
        <SimpleGrid
          columns={sm ? 2 : 4}
          justifyContent="center"
          margin="auto"
          spacing={sm ? 50 : 100}
        >
          {contacts?.map((c, idx) => (
            <Box
              key={idx}
              onClick={() => window.open(c?.path, "_blank")}
              cursor="pointer"
            >
              <Icon name={c?.iconName} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Helmet>
  );
};
export default Home;
