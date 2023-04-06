import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { SelectorType, TODO_PRIORITY } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
  high: number;
  medium: number;
  low: number;
  selector?: SelectorType;
  onClick: (value: SelectorType) => void;
}

export const PriorityMenu: React.FC<Props> = ({
  isOpen,
  high,
  medium,
  low,
  selector,
  onClick,
}) => {
  return (
    <>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>Priority</ListSubheader>
      <TodoMenuItem
        text={`${TODO_PRIORITY.HIGH} (${high})`}
        icon={<Star />}
        isOpen={isOpen}
        isSelected={selector === TODO_PRIORITY.HIGH}
        onClick={() => onClick(TODO_PRIORITY.HIGH)}
      />
      <TodoMenuItem
        text={`${TODO_PRIORITY.MEDIUM} (${medium})`}
        icon={<StarHalf />}
        isOpen={isOpen}
        isSelected={selector === TODO_PRIORITY.MEDIUM}
        onClick={() => onClick(TODO_PRIORITY.MEDIUM)}
      />
      <TodoMenuItem
        text={`${TODO_PRIORITY.LOW} (${low})`}
        icon={<StarOutline />}
        isOpen={isOpen}
        isSelected={selector === TODO_PRIORITY.LOW}
        onClick={() => onClick(TODO_PRIORITY.LOW)}
      />
    </>
  );
};
