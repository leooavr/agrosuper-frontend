import { ThemeProvider } from "@mui/material/styles";

import { MiniDrawer } from "./components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer />
    </ThemeProvider>
  );
}

export default App;
