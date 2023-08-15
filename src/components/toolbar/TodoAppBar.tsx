import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { TodoHeader } from "./TodoHeader";

export const TodoAppBar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 1,
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Toolbar>
        <TodoHeader />
      </Toolbar>
    </AppBar>
  );
};
