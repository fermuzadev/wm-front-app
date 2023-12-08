import { useEffect, useState } from "react";
import UserCard from "./components/Card";
import { Box } from "@mui/material";
import { fetchData } from "./api.tsx";
import { userMock } from "./mocks/usermock.ts";

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
      sx={{
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <img src="./dating-app.png" alt="dating app logo" width="90px" />
      <h1>App de Citas y Amistad</h1>
      <UserCard
        userName={appUsers[cardCounter].name}
        imageUrl={appUsers[cardCounter].image}
        setCardCounter={setCardCounter}
        cardCounter={cardCounter}
      />
      <p className="read-the-docs">
        Esta App sirve para conocer personas afines a tus intereses
      </p>
    </Box>
  );
}
