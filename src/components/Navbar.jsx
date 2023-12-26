import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import navbar from "../constants/navbar";
import isActive from "../helpers/isActive";
import "../style/button.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="space-between" py="30px">
      <Box onClick={() => navigate("/")} cursor="pointer">
        <Image src="logo.png" width={12} />
      </Box>
      <Box>
        <HStack spacing="50px">
          {navbar?.map((n, idx) => (
            <Button
              key={idx}
              {...(!isActive(n?.path)
                ? {
                    color: "white",
                  }
                : {
                    className: "button-pj",
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
