import { Box, Container, HStack } from "@chakra-ui/react";
import navbar from "../constants/navbar";
import { useNavigate } from "react-router-dom";
import sortArrObj from "../helpers/sortArrObj";
import Icon from "./Icon";
import "../style/navbar_mobile.css";

const NavbarMobile = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent>
      <HStack
        justifyContent="space-between"
        pos="fixed"
        zIndex={99}
        bg="#3f3f3f"
        p={"10px 20px"}
        w={320}
        spacing={4}
        borderRadius={10}
        bottom={10}
      >
        {sortArrObj({ arr: navbar, key: "orderMobile" })?.map((n, idx) => (
          <Box
            key={idx}
            onClick={() => navigate(n?.path)}
            {...(window.location.pathname === n?.path && {
              className: "active_navbar",
            })}
          >
            <Icon
              name={n?.name}
              width={30}
              {...(window.location.pathname === n?.path && {
                color: "#3f3f3f",
              })}
            />
          </Box>
        ))}
      </HStack>
    </Container>
  );
};
export default NavbarMobile;
