import {
  Card,
  Heading,
  Button,
  Text,
  Box,
  Center,
  Image,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Center mt="5%">
      <Card maxW={["90%", "400px"]} textAlign="center" bg="#59c9a5">
        <Heading m="0.2em">Ingresa con tu Cuenta</Heading>
        <Image
          _hover={{ transform: "scale(1.2)" }}
          transition="transform .2s"
          src="./dating-app.png"
          alt="dating app logo"
          width="120px"
          margin="5% auto"
        />
        <Box m="5%">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" />
            <FormHelperText>Nunca vamos a divulgar tu email</FormHelperText>
          </FormControl>
          <Text>Si tienes cuenta y quieres ingresar</Text>
          <Button bg="#63B31D">Ingresar con tu Cuenta</Button>
        </Box>
        <Link href="..">Volver atras</Link>
      </Card>
    </Center>
  );
}
