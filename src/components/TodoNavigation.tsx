import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { TODO_TYPE } from "../enums";
import { useAppDispatch, useAppSelector, useTodosCount } from "../redux/hooks";
import { setSelector } from "../redux/todoSlice";
import { SelectorType } from "../types";
import { NavigationButton } from "./NavigationButton";

export const TodoNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.todos.selector);
  const { all, active, completed } = useTodosCount();

  const handleChangeSelector = (value: SelectorType) => {
    dispatch(setSelector(value));
  };

  return (
    <>
      <AppBar
        sx={{ boxShadow: "0 0 7px 2px rebeccapurple", bgcolor: "primary.dark" }}
      >
        <Toolbar>
          <img style={{ width: "35px" }} src="/logo.png" alt="logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, ml: 2 }}
          >
            Todo List
          </Typography>
          <NavigationButton
            label={`All (${all})`}
            handleClickButton={() => handleChangeSelector(TODO_TYPE.ALL)}
            sx={{
              borderBottom: selector === TODO_TYPE.ALL ? "outset" : "none",
            }}
          />
          <NavigationButton
            label={`Active (${active})`}
            sx={{
              ml: 3,
              mr: 3,
              borderBottom: selector === TODO_TYPE.ACTIVE ? "outset" : "none",
            }}
            handleClickButton={() => handleChangeSelector(TODO_TYPE.ACTIVE)}
          />
          <NavigationButton
            label={`Completed (${completed})`}
            handleClickButton={() => handleChangeSelector(TODO_TYPE.COMPLETED)}
            sx={{
              borderBottom:
                selector === TODO_TYPE.COMPLETED ? "outset" : "none",
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
