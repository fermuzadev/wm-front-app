import { useState } from "react";
import {
  Box,
  Text,
  Center,
  Card,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { preguntasPersonalidad } from "../mocks/preguntasPersonalidad";

export default function Personality() {
  const [result, setResult] = useState(0);
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState();

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    const lastResutl = result + value;
    await setResult(lastResutl);
    await alert(
      `Gracias por realizar las preguntas de Personalidad, su personalidad es: ${
        lastResutl < 6
          ? "Introvertido"
          : lastResutl > 9
          ? "Extrovertido/a"
          : "Intermedio/a"
      }`
    );
  };

  return (
    <Center mt="5%">
      <Card
        maxW={["90%", "400px"]}
        minH="300px"
        textAlign="center"
        bg="#59c9a5"
        p="1em"
      >
        <Heading>Test de Personalidad</Heading>
        <Text>Por favor, responde las siguientes preguntas:</Text>

        <Box>
          <Text>{preguntasPersonalidad[counter].pregunta}</Text>
          <RadioGroup value={value} onChange={(e) => setValue(parseInt(e))}>
            <Stack direction="column">
              {preguntasPersonalidad[counter].opciones.map((op) => (
                <Radio
                  value={
                    preguntasPersonalidad[counter].opciones.indexOf(op) + 1
                  }
                  key={op}
                >
                  {op}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
        <Spacer />

        {counter === preguntasPersonalidad.length - 1 ? (
          <Button
            onClick={handleSubmit}
            colorScheme="purple"
            size="md"
            w="fit-content"
            alignSelf="center"
          >
            Enviar
          </Button>
        ) : (
          <Button
            onClick={() => {
              setCounter(counter + 1);
              setResult(result + value);
              setValue();
            }}
            colorScheme="facebook"
            size="md"
            w="fit-content"
            alignSelf="center"
          >
            Siguiente
          </Button>
        )}
      </Card>
    </Center>
  );
}
