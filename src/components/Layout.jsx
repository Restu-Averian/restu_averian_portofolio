import { Container, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Stack className="container">
      <Container maxW="1200px" height="100%">
        <GridItem
          p="0px 2px"
          area={"header"}
          position="sticky"
          top={0}
          zIndex={99}
          bg="#121212"
        >
          <Navbar />
        </GridItem>
        <GridItem p="50px 2px" area={"main"}>
          {children}
        </GridItem>
      </Container>
    </Stack>
  );
};

export default Layout;
