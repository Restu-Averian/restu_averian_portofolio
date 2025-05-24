import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Icon from "../components/Icon";
import contacts from "../constants/contacts";
import Helmet from "../components/Helmet";
import useResponsive from "../hooks/useResponsive";
import navbar from "../constants/navbar";
import isActive from "../helpers/isActive";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { xs } = useResponsive();

  const navigate = useNavigate();

  const dataNavbar = navbar?.filter((data) => data?.name !== "home");

  return (
    <Helmet title="Home">
      <Stack
        spacing="2.5rem"
        position="relative"
        pt={xs ? "5rem" : "8rem"}
        className="fade-in-animate"
      >
        <Stack>
          <Box>
            <Image
              src="logo.png"
              width={xs ? "5rem" : "7rem"}
              transition="all 300ms"
              margin="0 auto 1.5rem"
            />
          </Box>
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
            <Text fontSize={xs ? "1rem" : "1.6rem"} textAlign="center" as="h2">
              Aspiring to become a proficient Front-End Developer
            </Text>
          </Box>
        </Stack>

        <Flex justifyContent="center" gap={xs ? 50 : 75} flexWrap="wrap">
          {contacts?.map((c, idx) => (
            <Tooltip key={idx} label={c?.label}>
              <Box
                key={idx}
                onClick={() => window.open(c?.path, "_blank")}
                cursor="pointer"
              >
                <Icon name={c?.iconName} />
              </Box>
            </Tooltip>
          ))}
        </Flex>

        {!xs && (
          <HStack spacing="50px" margin="auto">
            {dataNavbar?.map((n, idx) => (
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
                size="lg"
              >
                {n?.title}
              </Button>
            ))}
          </HStack>
        )}
      </Stack>
    </Helmet>
  );
};
export default Home;
