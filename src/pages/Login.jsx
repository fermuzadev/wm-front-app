import {
  Card,
  Heading,
  Button,
  Text,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Center mt="5%">
      <Card maxW="400px" textAlign="center" bg="#59c9a5">
        <Heading>App de Citas y Amistad</Heading>
        <Image
          _hover={{ transform: "scale(1.2)" }}
          transition="transform .2s"
          src="./dating-app.png"
          alt="dating app logo"
          width="120px"
          margin="5% auto"
        />
        <Box m="5%">
          <Text>Si tienes cuenta y quieres ingresar</Text>
          <Button bg="#63B31D">Ingresar con tu Cuenta</Button>
        </Box>
        <Link href="..">Volver atras</Link>
      </Card>
    </Center>
  );
}
