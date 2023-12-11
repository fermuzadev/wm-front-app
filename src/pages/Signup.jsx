import {
  Card,
  Heading,
  Button,
  Text,
  Box,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";

export default function Signup() {
  return (
    <Center mt="5%">
      <Card maxW="400px" textAlign="center" bg="#59c9a5">
        <Heading>Bienvenidos a la App de Citas y Amistad</Heading>
        <Image
          _hover={{ transform: "scale(1.2)" }}
          transition="transform .2s"
          src="./dating-app.png"
          alt="dating app logo"
          width="120px"
          margin="5% auto"
        />
        <Box m="5%">
          <Text>Si no tienes cuenta y deseas comenzar al crearte una</Text>
          <Button bg="#d5395e">Crear tu Cuenta</Button>
        </Box>
      </Card>
    </Center>
  );
}
