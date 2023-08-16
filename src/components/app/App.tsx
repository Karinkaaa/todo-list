import { Box, CssBaseline } from "@mui/material";
import { TodoContainer } from "../todos/TodoContainer";
import { TodoAppBar } from "../toolbar/TodoAppBar";

export const App: React.FC = () => {
  return (
    <Box display="flex">
      <CssBaseline />
      <TodoAppBar />
      <TodoContainer />
    </Box>
  );
};
