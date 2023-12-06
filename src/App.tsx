import RecipeReviewCard from "./components/Card";
import { Box } from "@mui/material";

export default function App() {
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
      <RecipeReviewCard />
      <p className="read-the-docs">
        Esta App sirve para conocer personas afines a tus intereses
      </p>
    </Box>
  );
}
