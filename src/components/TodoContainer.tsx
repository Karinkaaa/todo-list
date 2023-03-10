import { Container } from "@mui/material";
import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoContainer: React.FC = () => {
  return (
    <Container sx={{ mt: 6, width: "50%" }}>
      <TodoInput />
      <TodoList />
    </Container>
  );
};
