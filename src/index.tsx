import { ThemeProvider } from "@mui/material";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/app/App";
import "./index.css";
import { store } from "./redux/store";
import { theme } from "./theme";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
