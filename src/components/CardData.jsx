import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import Image from "./Image";
import "../style/button.css";

const CardData = ({ srcImg, title, path }) => {
  return (
    <Card
      variant="filled"
      size="sm"
      bg="#282828"
      color="#F9F9F9"
      borderRadius="2xl"
      p={2}
      maxWidth={360}
    >
      <CardBody>
        <Stack spacing={5}>
          <Box>
            <Image src={srcImg} height="180px" />
          </Box>
          <Box>
            <Tooltip {...(title?.length > 35 && { label: title })}>
              <Heading as="h3" size="lg" noOfLines={2} textAlign="center">
                {title}
              </Heading>
            </Tooltip>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter display="flex" justifyContent="center">
        <Button
          className="button-pj"
          onClick={() => window.open(path, "_blank")}
        >
          Open
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardData;
