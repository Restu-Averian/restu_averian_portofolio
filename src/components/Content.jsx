import { Box, Heading, Stack } from "@chakra-ui/react";
import Helmet from "./Helmet";
import useResponsive from "../hooks/useResponsive";

const Content = ({ title, children }) => {
  const { xs } = useResponsive();

  return (
    <Helmet title={title}>
      <Stack
        direction="column"
        spacing={10}
        className="fade-in-animate"
        {...(xs && {
          pt: "5rem",
        })}
      >
        <Heading
          as="h2"
          textAlign="center"
          {...(xs && {
            fontSize: "2rem",
          })}
        >
          {title}
        </Heading>
        <Box>{children}</Box>
      </Stack>
    </Helmet>
  );
};
export default Content;
