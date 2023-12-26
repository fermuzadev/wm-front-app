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
} from "@chakra-ui/react";
import { preguntasPersonalidad } from "../mocks/preguntasPersonalidad";

export default function Personality() {
  const [answers, setAnswers] = useState({});
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState();

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    alert("Gracias por realizar las preguntas de Personalidad");
    console.log(answers);
  };

  return (
    <Center mt="5%">
      <Card maxW={["90%", "400px"]} textAlign="center" bg="#59c9a5">
        <Heading>Test de Personalidad</Heading>
        <Text>Por favor, responde las siguientes preguntas:</Text>

        <Box>
          <Text>{preguntasPersonalidad[counter].pregunta}</Text>
          <RadioGroup value={value} onChange={(e) => setValue(parseInt(e))}>
            <Stack direction="column">
              <Radio value={1}>
                {preguntasPersonalidad[counter].opciones[0]}
              </Radio>
              <Radio value={2}>
                {preguntasPersonalidad[counter].opciones[1]}
              </Radio>
              <Radio value={3}>
                {preguntasPersonalidad[counter].opciones[2]}
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        {counter === 2 ? (
          <Button onClick={handleSubmit} bg="#63B31D">
            Enviar
          </Button>
        ) : (
          <Button onClick={() => setCounter(counter + 1)} bg="#d5395e">
            Siguiente
          </Button>
        )}
      </Card>
    </Center>
  );
}
