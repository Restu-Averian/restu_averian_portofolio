import { Box, Heading, Stack } from "@chakra-ui/react";
import Helmet from "./Helmet";

const Content = ({ title, children }) => {
  return (
    <Helmet title={title}>
      <Stack direction="column" spacing={10}>
        <Heading as="h2">{title}</Heading>
        <Box>{children}</Box>
      </Stack>
    </Helmet>
  );
};
export default Content;
