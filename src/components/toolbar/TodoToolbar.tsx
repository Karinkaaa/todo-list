import { Menu } from "@mui/icons-material";
import { IconButton, Toolbar } from "@mui/material";
import React from "react";
import { TodoHeader } from "./TodoHeader";

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

export const TodoToolbar: React.FC<Props> = ({ isOpen, handleClick }) => {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        sx={{
          mr: 2,
          color: "white",
          ...(isOpen && { display: "none" }),
        }}
        onClick={handleClick}
      >
        <Menu />
      </IconButton>
      {!isOpen && <TodoHeader />}
    </Toolbar>
  );
};
