import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",
      dark: "#6311df",
      light: "#bfd5ffb5",
    },
    secondary: {
      main: "#11b981",
      dark: "#056042",
      light: "#ddf3f0d6",
    },
  },
});

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
