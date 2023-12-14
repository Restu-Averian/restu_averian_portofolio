import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import navbar from "../constants/navbar";
import { useCallback } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const isActive = useCallback((nActive = "") => {
    return nActive?.toLowerCase() === window.location.pathname?.toLowerCase();
  }, []);

  return (
    <Flex justifyContent="space-between" py="30px">
      <Box>R</Box>
      <Box>
        <HStack spacing="50px">
          {navbar?.map((n, idx) => (
            <Button
              key={idx}
              {...(!isActive(n?.path) && {
                color: "white",
              })}
              onClick={() => navigate(n?.path)}
              variant={isActive(n?.path) ? "solid" : "ghost"}
            >
              {n?.title}
            </Button>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};
export default Navbar;
