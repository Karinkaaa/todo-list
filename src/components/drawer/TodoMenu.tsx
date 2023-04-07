import { List as ListIcon } from "@mui/icons-material";
import { List, ListSubheader } from "@mui/material";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
  useTodosCount,
} from "../../redux/hooks";
import { setFilters } from "../../redux/slice";
import { IFilters } from "../../types";
import { PriorityMenu } from "./PriorityMenu";
import { StatusMenu } from "./StatusMenu";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
}

export const TodoMenu: React.FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const { all, active, completed, high, medium, low } = useTodosCount();
  const filters = useAppSelector((state) => state.todos.filters);

  const handleSelect = (value?: IFilters) => {
    dispatch(setFilters(value ? { ...filters, ...value } : {}));
  };

  return (
    <List>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>All</ListSubheader>
      <TodoMenuItem
        text={`All (${all})`}
        icon={<ListIcon />}
        isOpen={isOpen}
        isSelected={!filters}
        onClick={() => handleSelect()}
      />
      <StatusMenu
        isOpen={isOpen}
        active={active}
        completed={completed}
        filter={filters?.status}
        onClick={handleSelect}
      />
      <PriorityMenu
        isOpen={isOpen}
        high={high}
        medium={medium}
        low={low}
        filter={filters?.priority}
        onClick={handleSelect}
      />
    </List>
  );
};
