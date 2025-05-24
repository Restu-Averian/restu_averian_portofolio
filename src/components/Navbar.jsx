import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import navbar from "../constants/navbar";
import isActive from "../helpers/isActive";
import Image from "./Image";
import "../style/button.css";

const Navbar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <Flex justifyContent="space-between" py="30px">
      {!isHome && (
        <Box
          onClick={() => navigate("/")}
          cursor="pointer"
          position="relative"
          transition="all 300ms"
          left={10}
          // {...(isHome
          //   ? {
          //       top: "3rem",
          //       left: "50%",
          //       transform: "translateX(-50%)",
          //     }
          //   : {
          //       top: 0,
          //       left: 10,
          //     })}
        >
          <Image
            src="logo.png"
            width={isHome ? 120 : 12}
            transition="all 300ms"
          />
        </Box>
      )}

      {!isHome && (
        <Box
          position="relative"
          right={isHome ? "34%" : 0}
          transition="all 300ms"
        >
          <HStack spacing="50px">
            {navbar
              ?.filter((data) => data?.name !== "home")
              ?.map((n, idx) => (
                <Button
                  key={idx}
                  {...(!isActive(n?.path)
                    ? {
                        className: "button-pj-inactive",
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
      )}
    </Flex>
  );
};
export default Navbar;
