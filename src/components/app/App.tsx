import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { TodoDrawer } from "../drawer/TodoDrawer";
import { TodoContainer } from "../todos/TodoContainer";
import { TodoAppBar } from "../toolbar/TodoAppBar";

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TodoAppBar isOpen={isOpen} onOpen={handleOpen} />
      <TodoDrawer isOpen={isOpen} onClose={handleClose} />
      <TodoContainer />
    </Box>
  );
};
