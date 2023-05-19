import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../src/theme";
import AppRoute from "./Routes/AppRoute";
const App = () => {
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoute />
      </ThemeProvider>
    </div>
  );
};

export default App;
