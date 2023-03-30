import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { TodoDrawer } from "../drawer/TodoDrawer";
import { TodoContainer } from "../todos/TodoContainer";
import { TodoAppBar } from "../toolbar/TodoAppBar";

export const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TodoAppBar open={open} onOpen={handleOpen} />
      <TodoDrawer open={open} onClose={handleClose} />
      <TodoContainer />
    </Box>
  );
};

export default App;
