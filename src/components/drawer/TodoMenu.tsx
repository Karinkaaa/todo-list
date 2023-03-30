import { List as ListIcon } from "@mui/icons-material";
import { List, ListSubheader } from "@mui/material";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
  useTodosCount,
} from "../../redux/hooks";
import { setSelector } from "../../redux/todoSlice";
import { PriorityType, StatusType } from "../../types";
import { PriorityMenu } from "./PriorityMenu";
import { StatusMenu } from "./StatusMenu";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  open: boolean;
}

export const TodoMenu: React.FC<Props> = ({ open }) => {
  const dispatch = useAppDispatch();
  const { all, active, completed, high, medium, low } = useTodosCount();
  const selector = useAppSelector((state) => state.todos.selector);

  const handleSelect = (value?: StatusType | PriorityType) => {
    dispatch(setSelector(value));
  };

  return (
    <List>
      <ListSubheader sx={{ backgroundColor: "primary.light" }}>
        All
      </ListSubheader>
      <TodoMenuItem
        open={open}
        text={`All (${all})`}
        icon={<ListIcon />}
        isSelected={!selector}
        onClick={() => handleSelect()}
      />
      <StatusMenu
        open={open}
        active={active}
        completed={completed}
        selector={selector}
        handleSelect={handleSelect}
      />
      <PriorityMenu
        open={open}
        high={high}
        medium={medium}
        low={low}
        selector={selector}
        handleSelect={handleSelect}
      />
    </List>
  );
};
