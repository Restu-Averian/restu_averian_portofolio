import { Box, Container, HStack } from "@chakra-ui/react";
import navbar from "../constants/navbar";
import { useNavigate } from "react-router-dom";
import sortArrObj from "../helpers/sortArrObj";
import Icon from "./Icon";

const NavbarMobile = () => {
  const navigate = useNavigate();
  return (
    <Container centerContent>
      <HStack
        justifyContent="space-between"
        pos="fixed"
        zIndex={99}
        bg="#3f3f3f"
        p={"20px 5px"}
        spacing={4}
        borderRadius={10}
        bottom={10}
      >
        {sortArrObj({ arr: navbar, key: "orderMobile" })?.map((n, idx) => (
          <Box key={idx} onClick={() => navigate(n?.path)}>
            <Icon name={n?.name} width={100} />
          </Box>
        ))}
      </HStack>
    </Container>
  );
};
export default NavbarMobile;
