import { List } from "@mui/material";
import React from "react";
import { useTodos } from "../redux/hooks";
import { Todo } from "./Todo";

export const TodoList: React.FC = () => {
  const todos = useTodos();

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};
