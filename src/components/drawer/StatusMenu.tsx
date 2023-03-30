import { CheckBoxOutlineBlank, DoneAll } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { TODO_STATUS } from "../../enums";
import { SelectorType } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  open: boolean;
  active: number;
  completed: number;
  selector?: SelectorType;
  handleSelect: (value: SelectorType) => void;
}

export const StatusMenu: React.FC<Props> = ({
  open,
  active,
  completed,
  selector,
  handleSelect,
}) => {
  return (
    <>
      <ListSubheader sx={{ backgroundColor: "primary.light" }}>
        Status
      </ListSubheader>
      <TodoMenuItem
        open={open}
        text={`${TODO_STATUS.ACTIVE} (${active})`}
        icon={<CheckBoxOutlineBlank />}
        isSelected={selector === TODO_STATUS.ACTIVE}
        onClick={() => handleSelect(TODO_STATUS.ACTIVE)}
      />
      <TodoMenuItem
        open={open}
        text={`${TODO_STATUS.COMPLETED} (${completed})`}
        icon={<DoneAll />}
        isSelected={selector === TODO_STATUS.COMPLETED}
        onClick={() => handleSelect(TODO_STATUS.COMPLETED)}
      />
    </>
  );
};
