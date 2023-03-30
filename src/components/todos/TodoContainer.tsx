import { Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useAppSelector, useTodos } from "../../redux/hooks";
import { TodoInput } from "../input/TodoInput";
import { TodoList } from "./TodoList";

export const TodoContainer: React.FC = () => {
  const status = useAppSelector((state) => state.todos.selector);
  const todos = useTodos(status);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 5 }}>
      <Toolbar />
      <TodoInput />
      {todos.length ? (
        <TodoList todos={todos} />
      ) : (
        <Typography sx={{ ml: 1 }}>No todos yet...</Typography>
      )}
    </Container>
  );
};
