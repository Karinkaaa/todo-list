import { CheckBoxOutlineBlank, DoneAll } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { IFilters, TODO_STATUS } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
  active: number;
  completed: number;
  filter?: keyof IFilters;
  onClick: (value: IFilters) => void;
}

export const StatusMenu: React.FC<Props> = ({
  isOpen,
  active,
  completed,
  filter,
  onClick,
}) => {
  return (
    <>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>Status</ListSubheader>
      <TodoMenuItem
        text={`${TODO_STATUS.ACTIVE} (${active})`}
        icon={<CheckBoxOutlineBlank />}
        isOpen={isOpen}
        isSelected={filter === TODO_STATUS.ACTIVE}
        onClick={() => onClick({ status: TODO_STATUS.ACTIVE })}
      />
      <TodoMenuItem
        text={`${TODO_STATUS.COMPLETED} (${completed})`}
        icon={<DoneAll />}
        isOpen={isOpen}
        isSelected={filter === TODO_STATUS.COMPLETED}
        onClick={() => onClick({ status: TODO_STATUS.COMPLETED })}
      />
    </>
  );
};
