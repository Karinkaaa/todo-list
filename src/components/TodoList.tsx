import { List } from "@mui/material";
import React from "react";
import { ITodo } from "../types";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: ITodo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};
