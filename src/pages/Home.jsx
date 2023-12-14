import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Icon from "../components/Icon";
import contacts from "../constants/contacts";
import Helmet from "../components/Helmet";

const Home = () => {
  return (
    <Helmet title="Home">
      <Stack spacing={50}>
        <Box>
          <Heading fontSize="100px" as="h3">
            Restu Averian Putra
          </Heading>
        </Box>
        <Box>
          <Text fontSize="32px">
            Aspiring to become a proficient Front-End Developer
          </Text>
        </Box>
        <HStack justifyContent="center" spacing={100}>
          {contacts?.map((c, idx) => (
            <Box
              key={idx}
              onClick={() => window.open(c?.path, "_blank")}
              cursor="pointer"
            >
              <Icon name={c?.iconName} />
            </Box>
          ))}
        </HStack>
      </Stack>
    </Helmet>
  );
};
export default Home;
