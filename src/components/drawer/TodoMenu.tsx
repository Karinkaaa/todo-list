import { List as ListIcon } from "@mui/icons-material";
import { List, ListSubheader } from "@mui/material";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
  useTodosCount,
} from "../../redux/hooks";
import { setSelector } from "../../redux/slice";
import { PriorityType, StatusType } from "../../types";
import { PriorityMenu } from "./PriorityMenu";
import { StatusMenu } from "./StatusMenu";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
}

export const TodoMenu: React.FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const { all, active, completed, high, medium, low } = useTodosCount();
  const selector = useAppSelector((state) => state.todos.selector);

  const handleSelect = (value?: StatusType | PriorityType) => {
    dispatch(setSelector(value));
  };

  return (
    <List>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>All</ListSubheader>
      <TodoMenuItem
        isOpen={isOpen}
        text={`All (${all})`}
        icon={<ListIcon />}
        isSelected={!selector}
        onClick={() => handleSelect(void 0)}
      />
      <StatusMenu
        isOpen={isOpen}
        active={active}
        completed={completed}
        selector={selector}
        onClick={handleSelect}
      />
      <PriorityMenu
        isOpen={isOpen}
        high={high}
        medium={medium}
        low={low}
        selector={selector}
        onClick={handleSelect}
      />
    </List>
  );
};
