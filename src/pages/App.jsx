import { useState, useEffect } from "react";
import UserCard from "../components/Card.jsx";
import { Box } from "@chakra-ui/react";
//import { userMock } from "../mocks/usermock.js";
import "../global.css";

export default function App() {
  const [cardCounter, setCardCounter] = useState(0);
  const [appUsers, setAppUsers] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const datos = await fetch(
        "https://dating-app-back.onrender.com/api/users"
      );
      const json = await datos.json();
      setAppUsers(json.users);
    };

    dataFetch();
  }, []);

  return (
    <Box
      margin="20px 0"
      display="flex"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <UserCard
        userName={
          appUsers && appUsers.length > cardCounter
            ? appUsers[cardCounter].name
            : ""
        }
        imageUrl={
          appUsers && appUsers.length > cardCounter
            ? appUsers[cardCounter].image
            : ""
        }
        setCardCounter={setCardCounter}
        cardCounter={cardCounter}
      />
    </Box>
  );
}
