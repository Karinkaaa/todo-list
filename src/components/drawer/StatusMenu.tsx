import { CheckBoxOutlineBlank, DoneAll } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { SelectorType, TODO_STATUS } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
  active: number;
  completed: number;
  selector?: SelectorType;
  onClick: (value: SelectorType) => void;
}

export const StatusMenu: React.FC<Props> = ({
  isOpen,
  active,
  completed,
  selector,
  onClick,
}) => {
  return (
    <>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>Status</ListSubheader>
      <TodoMenuItem
        isOpen={isOpen}
        text={`${TODO_STATUS.ACTIVE} (${active})`}
        icon={<CheckBoxOutlineBlank />}
        isSelected={selector === TODO_STATUS.ACTIVE}
        onClick={() => onClick(TODO_STATUS.ACTIVE)}
      />
      <TodoMenuItem
        isOpen={isOpen}
        text={`${TODO_STATUS.COMPLETED} (${completed})`}
        icon={<DoneAll />}
        isSelected={selector === TODO_STATUS.COMPLETED}
        onClick={() => onClick(TODO_STATUS.COMPLETED)}
      />
    </>
  );
};
