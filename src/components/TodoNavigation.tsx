import { PlaylistAddCheck } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { TODO_TYPE } from "../enums";
import { useTodosCount } from "../redux/hooks";
import { SelectorType } from "../types";
import { NavigationButton } from "./NavigationButton";

interface TodoNavigationProps {
  setSelector: (selector: SelectorType) => void;
}

export const TodoNavigation: React.FC<TodoNavigationProps> = ({
  setSelector,
}) => {
  const { all, active, completed } = useTodosCount();

  return (
    <>
      <AppBar sx={{ boxShadow: "0 7px 10px -7px black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
          >
            <PlaylistAddCheck fontSize="large" sx={{ mr: 1 }} />
            Todo List
          </Typography>

          <NavigationButton
            label={`All (${all})`}
            handleClickButton={() => setSelector(TODO_TYPE.ALL)}
          />
          <NavigationButton
            label={`Active (${active})`}
            sx={{ ml: 3, mr: 3 }}
            handleClickButton={() => setSelector(TODO_TYPE.ACTIVE)}
          />
          <NavigationButton
            label={`Completed (${completed})`}
            handleClickButton={() => setSelector(TODO_TYPE.COMPLETED)}
          />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};
