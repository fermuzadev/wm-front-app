import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function UserCard({
  userName,
  imageUrl,
  setCardCounter,
  cardCounter,
}) {
  const [noMatches, setNoMatches] = useState(false);
  const handleUnmatch = () => {
    cardCounter < 9 ? setCardCounter(cardCounter + 1) : setNoMatches(true);
  };

  return !noMatches ? (
    <Card maxW="300px" bg="#59c9a5">
      <CardHeader p="0.5em">
        <Heading size="md">{userName}</Heading>
      </CardHeader>
      <CardBody p="0.5em" overflow="hidden">
        <Image src={imageUrl} alt="avatar picture" borderRadius="20px" />
      </CardBody>

      <Box as="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
        deleniti aut? Voluptatem error odio molestiae aliquam.
      </Box>

      <CardFooter>
        <Flex justifyContent="space-around" width="100%">
          <Center
            bg="rgba(255, 0, 0, 0.5)"
            boxSize="40px"
            borderRadius="100%"
            _hover={{ bg: "lightblue" }}
          >
            <CloseIcon aria-label="close" />
          </Center>
          <Center
            boxSize="40px"
            borderRadius="100%"
            bg="rgba(0, 255, 100, 0.5)"
            onClick={handleUnmatch}
            _hover={{ bg: "lightblue" }}
          >
            <CheckIcon />
          </Center>
        </Flex>
      </CardFooter>
    </Card>
  ) : (
    <Center h="100vh">
      <Box as="h2" color="red">
        No hay más personas de momento
      </Box>
    </Center>
  );
}
