import { Toolbar } from "@mui/material";
import React from "react";
import { SearchTodo } from "./SearchTodo";
import { TodoHeader } from "./TodoHeader";

export const TodoToolbar: React.FC = () => {
  return (
    <Toolbar>
      <TodoHeader />
      <SearchTodo />
    </Toolbar>
  );
};
