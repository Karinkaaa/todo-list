import { Container, Typography } from "@mui/material";
import React from "react";
import { ITodo } from "../types";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

interface TodoContainerProps {
  todos: ITodo[];
}

export const TodoContainer: React.FC<TodoContainerProps> = ({ todos }) => {
  return (
    <Container sx={{ mt: 6, mb: 5, width: "50%" }}>
      <TodoInput />
      {todos.length ? (
        <TodoList todos={todos} />
      ) : (
        <Typography sx={{ ml: 1 }}>No todos yet...</Typography>
      )}
    </Container>
  );
};
