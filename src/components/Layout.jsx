import { Container, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import useResponsive from "../hooks/useResponsive";
import NavbarMobile from "./NavbarMobile";

const Layout = ({ children }) => {
  const { xs } = useResponsive();
  return (
    <Stack className="container">
      <Container maxW="1200px" height="100%">
        {!xs && (
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

        <GridItem p={xs ? "0px 2px 150px" : "14px 2px"}>{children}</GridItem>
        {xs && <NavbarMobile />}
      </Container>
    </Stack>
  );
};

export default Layout;
