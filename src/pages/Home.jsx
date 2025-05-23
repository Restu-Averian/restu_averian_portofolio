import {
  AbsoluteCenter,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Icon from "../components/Icon";
import contacts from "../constants/contacts";
import Helmet from "../components/Helmet";
import useResponsive from "../hooks/useResponsive";

const Home = () => {
  const { xs } = useResponsive();
  return (
    <Helmet title="Home">
      <Box position="relative" h="90vh">
        <AbsoluteCenter axis="both" w="100%" textAlign="center">
          <Stack spacing={50}>
            <Stack>
              <Box>
                <Heading fontSize={xs ? "50px" : "100px"} as="h1">
                  Restu Averian Putra
                </Heading>
              </Box>
              <Box>
                <Text fontSize={xs ? "24px" : "32px"}>
                  Aspiring to become a proficient Front-End Developer
                </Text>
              </Box>
            </Stack>

            <SimpleGrid
              columns={xs ? 2 : 4}
              justifyContent="center"
              margin="auto"
              spacing={xs ? 50 : 100}
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
        </AbsoluteCenter>
      </Box>
    </Helmet>
  );
};
export default Home;
