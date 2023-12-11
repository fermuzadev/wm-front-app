import { useState } from "react";
import UserCard from "../components/Card.jsx";
import { Box, Image, Text } from "@chakra-ui/react";
//import { fetchData } from "./api.tsx";
import { userMock } from "../mocks/usermock.js";
import "../global.css";

export default function App() {
  const [cardCounter, setCardCounter] = useState(0);
  const [appUsers, setAppUsers] = useState(userMock.users);

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     try {
  //       const fetchedData = await fetchData();
  //       setAppUsers(fetchedData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchDataAsync();
  //   console.log(appUsers);
  // }, []);

  return (
    <Box
      margin="20px 0"
      display="flex"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Image src="./dating-app.png" alt="dating app logo" width="90px" />
      <Box color="white" fontSize="30px" as="h1" p="0.3em">
        App de Citas y Amistad
      </Box>
      <UserCard
        userName={appUsers[cardCounter].name}
        imageUrl={appUsers[cardCounter].image}
        setCardCounter={setCardCounter}
        cardCounter={cardCounter}
      />
      <Text color="white" className="read-the-docs" pt="10px">
        Esta App sirve para conocer personas afines a tus intereses
      </Text>
    </Box>
  );
}
