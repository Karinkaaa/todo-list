import { AppBar } from "@mui/material";
import React from "react";
import { TodoToolbar } from "./TodoToolbar";

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
      <TodoToolbar />
    </AppBar>
  );
};
