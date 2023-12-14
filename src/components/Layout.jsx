import { Container, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import useResponsive from "../hooks/useResponsive";
import NavbarMobile from "./NavbarMobile";

const Layout = ({ children }) => {
  const { sm } = useResponsive();
  return (
    <Stack className="container">
      <Container maxW="1200px" height="100%">
        {!sm && (
          <GridItem
            p="0px 2px"
            position="sticky"
            top={0}
            zIndex={99}
            bg="#121212"
          >
            <Navbar />
          </GridItem>
        )}

        <GridItem p={sm ? "50px 2px 150px" : "50px 2px"}>{children}</GridItem>
        {sm && <NavbarMobile />}
      </Container>
    </Stack>
  );
};

export default Layout;
