import { AppBar } from "@mui/material";
import React from "react";
import { drawerWidth } from "../drawer/TodoDrawer";
import { TodoToolbar } from "./TodoToolbar";

interface Props {
  open: boolean;
  onOpen: () => void;
}

export const TodoAppBar: React.FC<Props> = ({ open, onOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        boxShadow: 1,
        bgcolor: "primary.dark",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      })}
    >
      <TodoToolbar open={open} handleClick={onOpen} />
    </AppBar>
  );
};
