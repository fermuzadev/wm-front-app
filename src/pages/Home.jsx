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

export default function Home() {
  return (
    <Center mt="5%">
      <Card maxW={["90%", "400px"]} textAlign="center" bg="#59c9a5">
        <Heading m="0.2em">Bienvenidos a la App de Citas y Amistad</Heading>
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
          <Link href="/signup">
            <Button bg="#dd5f7d">Crear tu Cuenta</Button>
          </Link>
        </Box>
        <Box m="5%">
          <Text>Si tienes cuenta y quieres ingresar</Text>
          <Link href="/login">
            <Button bg="#63B31D">Ingresar con tu Cuenta</Button>
          </Link>
        </Box>
      </Card>
    </Center>
  );
}
