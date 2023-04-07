import { Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useAppSelector, useTodos } from "../../redux/hooks";
import { AddTodoForm } from "../form/AddTodoForm";
import { TodoList } from "./TodoList";

export const TodoContainer: React.FC = () => {
  const filters = useAppSelector((state) => state.todos.filters);
  const todos = useTodos(filters);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 5 }}>
      <Toolbar />
      <AddTodoForm />
      {todos.length ? (
        <TodoList todos={todos} />
      ) : (
        <Typography sx={{ ml: 1 }}>No todos yet...</Typography>
      )}
    </Container>
  );
};
