import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import logo from "../../../src/assets/logo.png";
import { TODO_TYPE } from "../../enums";
import { useAppDispatch, useAppSelector, useTodosCount } from "../../redux/hooks";
import { setSelector } from "../../redux/todoSlice";
import { SelectorType } from "../../types";
import { NavigationButton } from "./NavigationButton";
import { TodoTypeSelect } from "./TodoTypeSelect";

export const TodoNavigation: React.FC = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
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
          <img style={{ width: "35px" }} src={logo} alt="logo" />
          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              ml: 2,
              fontSize: sm ? "18px" : "20px",
            }}
          >
            Todo List
          </Typography>
          {sm ? (
            <TodoTypeSelect />
          ) : (
            <>
              <NavigationButton
                label={`${TODO_TYPE.ALL} (${all})`}
                handleClickButton={() => handleChangeSelector(TODO_TYPE.ALL)}
                sx={{
                  borderBottom: selector === TODO_TYPE.ALL ? "outset" : "none",
                }}
              />
              <NavigationButton
                label={`${TODO_TYPE.ACTIVE} (${active})`}
                sx={{
                  ml: 3,
                  mr: 3,
                  borderBottom:
                    selector === TODO_TYPE.ACTIVE ? "outset" : "none",
                }}
                handleClickButton={() => handleChangeSelector(TODO_TYPE.ACTIVE)}
              />
              <NavigationButton
                label={`${TODO_TYPE.COMPLETED} (${completed})`}
                handleClickButton={() =>
                  handleChangeSelector(TODO_TYPE.COMPLETED)
                }
                sx={{
                  borderBottom:
                    selector === TODO_TYPE.COMPLETED ? "outset" : "none",
                }}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
