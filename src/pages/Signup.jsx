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

import { useState } from "react";

export default function Signup() {
  const [input, setInput] = useState(["", ""]);

  const handleEmailChange = (e) => setInput([e.target.value, ...input]);
  const handlePasswordChange = (e) => setInput([...input, e.target.value]);

  const handleSubmit = () => {
    // const data = { email: input[0], password: input[1] };
    // return writeJson(data);
  };

  return (
    <Center mt="5%">
      <Card maxW={["90%", "400px"]} textAlign="center" bg="#59c9a5">
        <Heading m="0.2em">Crea una Cuenta</Heading>
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
            <Input id="email" type="email" onChange={handleEmailChange} />
            <FormLabel>Contraseña</FormLabel>
            <Input
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
            <FormHelperText>Nunca vamos a divulgar tu email</FormHelperText>
          </FormControl>
          <Text>Si no tienes cuenta y deseas comenzar al crearte una</Text>
          <Button bg="#d5395e" onClick={handleSubmit}>
            Crear tu Cuenta
          </Button>
        </Box>
      </Card>
    </Center>
  );
}
