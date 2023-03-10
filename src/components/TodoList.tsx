import { List, ListItem } from "@mui/material";
import React from "react";
import { useTodos } from "../redux/hooks";

export const TodoList: React.FC = () => {
  const todos = useTodos();

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>{todo.name}</ListItem>
      ))}
    </List>
  );
};
