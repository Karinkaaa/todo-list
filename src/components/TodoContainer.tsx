import { Container, Typography } from "@mui/material";
import React from "react";
import { useAppSelector, useTodos } from "../redux/hooks";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoContainer: React.FC = () => {
  const selector = useAppSelector((state) => state.todos.selector);
  const todos = useTodos(selector);

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
