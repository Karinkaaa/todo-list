import { Menu } from "@mui/icons-material";
import { IconButton, Toolbar } from "@mui/material";
import React from "react";
import { TodoHeader } from "./TodoHeader";

interface Props {
  open: boolean;
  handleClick: () => void;
}

export const TodoToolbar: React.FC<Props> = ({ open, handleClick }) => {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        sx={{
          mr: 2,
          color: "white",
          ...(open && { display: "none" }),
        }}
        onClick={handleClick}
      >
        <Menu />
      </IconButton>
      {!open && <TodoHeader />}
    </Toolbar>
  );
};
