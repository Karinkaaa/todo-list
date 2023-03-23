import { List, ListItem } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { useAppSelector } from "../redux/hooks";
import { ITodo } from "../types";
import { Todo } from "./Todo";
import { TodoPagination } from "./TodoPagination";

interface TodoListProps {
  todos: ITodo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const { page, limit } = useAppSelector((state) => state.todos);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * limit - todos.length) : 0;

  return (
    <List>
      {todos.slice(page * limit, page * limit + limit).map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {emptyRows > 0 && (
        <ListItem key={uuid()} sx={{ height: emptyRows * 86 }}></ListItem>
      )}
      <TodoPagination page={page} limit={limit} count={todos.length} />
    </List>
  );
};
