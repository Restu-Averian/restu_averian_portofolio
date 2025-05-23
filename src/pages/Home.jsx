import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Icon from "../components/Icon";
import contacts from "../constants/contacts";
import Helmet from "../components/Helmet";
import useResponsive from "../hooks/useResponsive";

const Home = () => {
  const { xs } = useResponsive();

  return (
    <Helmet title="Home">
      <Stack
        spacing={50}
        position="relative"
        pt="6.5rem"
        {...(xs && {
          className: "fade-in-animate",
        })}
      >
        <Stack>
          {xs && (
            <Box>
              <Image
                src="logo.png"
                width={"5rem"}
                transition="all 300ms"
                margin="0 auto 1.5rem"
              />
            </Box>
          )}
          <Box>
            <Heading
              fontSize={xs ? "2.2rem" : "3.5rem"}
              as="h1"
              textAlign="center"
            >
              Restu Averian Putra
            </Heading>
          </Box>
          <Box>
            <Text fontSize={xs ? "1rem" : "1.6rem"} textAlign="center">
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
    </Helmet>
  );
};
export default Home;
