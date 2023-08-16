import {
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useAppSelector, useTodos } from "../../redux/hooks";
import { MobileTodoFilters } from "../filters/MobileTodoFilters";
import { TodoFilters } from "../filters/TodoFilters";
import { AddTodoForm } from "../form/AddTodoForm";
import { AddTodoModal } from "../modal/AddTodoModal";
import { TodoList } from "./TodoList";

export const TodoContainer: React.FC = () => {
  const filters = useAppSelector((state) => state.todos.filters);
  const todos = useTodos(filters);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container  
      maxWidth="md"
      sx={{
        mb: 5,
        mt: isMobile ? 3 : 6,
      }}
    >
      <Toolbar />
      {isMobile ? (
        <>
          <AddTodoModal />
          <MobileTodoFilters filters={filters} />
        </>
      ) : (
        <>
          <AddTodoForm />
          <TodoFilters filters={filters} />
        </>
      )}
      {todos.length ? (
        <TodoList todos={todos} />
      ) : (
        <Typography sx={{ mt: 3, ml: 2 }}>No todos...</Typography>
      )}
    </Container>
  );
};
