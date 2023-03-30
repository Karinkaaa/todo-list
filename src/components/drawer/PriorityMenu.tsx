import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../enums";
import { SelectorType } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  open: boolean;
  high: number;
  medium: number;
  low: number;
  selector?: SelectorType;
  handleSelect: (value: SelectorType) => void;
}

export const PriorityMenu: React.FC<Props> = ({
  open,
  high,
  medium,
  low,
  selector,
  handleSelect,
}) => {
  return (
    <>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>
        Priority
      </ListSubheader>
      <TodoMenuItem
        open={open}
        text={`${TODO_PRIORITY.HIGH} (${high})`}
        icon={<Star />}
        isSelected={selector === TODO_PRIORITY.HIGH}
        onClick={() => handleSelect(TODO_PRIORITY.HIGH)}
      />
      <TodoMenuItem
        open={open}
        text={`${TODO_PRIORITY.MEDIUM} (${medium})`}
        icon={<StarHalf />}
        isSelected={selector === TODO_PRIORITY.MEDIUM}
        onClick={() => handleSelect(TODO_PRIORITY.MEDIUM)}
      />
      <TodoMenuItem
        open={open}
        text={`${TODO_PRIORITY.LOW} (${low})`}
        icon={<StarOutline />}
        isSelected={selector === TODO_PRIORITY.LOW}
        onClick={() => handleSelect(TODO_PRIORITY.LOW)}
      />
    </>
  );
};
