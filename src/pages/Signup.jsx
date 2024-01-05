import { useNavigate } from "react-router-dom";

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
  Alert,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [tyc, setTyc] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isTycValid, setIsTycValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validatePassword = () => {
    // Define your password requirements
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    // Check if all requirements are met
    const isValid =
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar;

    return isValid;
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const emailOk = emailRegex.test(email);
    const passOk = validatePassword();

    if (emailOk && passOk) {
      if (tyc) {
        fetchPost();
        setLoading(true);
        setTimeout(() => navigate("/login"), 3000);
        console.log("todo bien, redireccionando a Login");
      } else {
        setIsTycValid(false);
        console.log("TyC Malo");
      }
    } else {
      if (!emailOk) {
        setIsEmailValid(false);
        console.log("email malo");
      }
      if (!passOk) {
        setIsPasswordValid(false);
        console.log("pass malo");
      }
    }
  };

  const fetchPost = async () => {
    fetch(import.meta.env.VITE_FETCH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password, tyc: true }),
    }).then((response) => console.log(response.status));
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
        {loading && (
          <Spinner position="absolute" top="50%" size="xl" alignSelf="center" />
        )}
        <Box m="5%">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input id="email" type="email" onChange={handleEmailChange} />
            {!isEmailValid && (
              <Alert
                color="red"
                p={1}
                status="error"
                backgroundColor="transparent"
              >
                El email es inválido, por favor ingrese otro
              </Alert>
            )}
            <FormLabel>Contraseña</FormLabel>
            <Input
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
            {!isPasswordValid && (
              <Alert p={1} status="error" backgroundColor="transparent">
                <Text color="red" fontSize="13px">
                  El password es inválido, por favor ingrese uno que contenga 8
                  caracteres como mínimo, con mayúsculas, minúsculas, símbolos y
                  letras.
                </Text>
              </Alert>
            )}
            <Checkbox
              p="0.2em"
              onChange={() => {
                const change = !tyc;
                setTyc(change);
                change && setIsTycValid(true);
              }}
            >
              <Text color={!isTycValid && "red"} fontSize="13px" p="0.5em">
                Acepto los términos y condiciones
              </Text>
            </Checkbox>
            <FormHelperText>Nunca vamos a divulgar tu email</FormHelperText>
          </FormControl>
          <Button bg="#d5395e" onClick={handleSubmit} m="1em">
            Crear tu Cuenta
          </Button>
        </Box>
      </Card>
    </Center>
  );
}
