import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import RecipeReviewCard from "./components/Card";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>App de Citas y Amistad</h1>
        <RecipeReviewCard />
        <p className="read-the-docs">
          Esta App sirve para conocer personas afines a tus intereses
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
