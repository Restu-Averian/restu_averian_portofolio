import { useCallback } from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import navbar from "../constants/navbar";
import { useNavigate } from "react-router-dom";
import sortArrObj from "../helpers/sortArrObj";
import Icon from "./Icon";
import "../style/navbar_mobile.css";

const NavbarMobile = () => {
  const navigate = useNavigate();

  const isActive = useCallback((navbarData) => {
    return window.location.pathname === navbarData?.path;
  }, []);

  return (
    <Container centerContent>
      <HStack
        pos="fixed"
        zIndex={99}
        bg="#3f3f3f"
        p={"0.5rem"}
        w={320}
        spacing={4}
        borderRadius={10}
        bottom={5}
      >
        {sortArrObj({ arr: navbar, key: "orderMobile" })?.map((n, idx) => (
          <Box
            key={idx}
            onClick={() => navigate(n?.path)}
            {...(isActive(n) && {
              className: "active_navbar",
            })}
            width={120}
            py={"0.5rem"}
          >
            <Icon name={n?.name} width={30} />
          </Box>
        ))}
      </HStack>
    </Container>
  );
};
export default NavbarMobile;
