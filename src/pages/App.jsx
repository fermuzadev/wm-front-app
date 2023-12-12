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
      <UserCard
        userName={appUsers[cardCounter].name}
        imageUrl={appUsers[cardCounter].image}
        setCardCounter={setCardCounter}
        cardCounter={cardCounter}
      />
    </Box>
  );
}
