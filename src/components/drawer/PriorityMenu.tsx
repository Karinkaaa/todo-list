import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { ListSubheader } from "@mui/material";
import React from "react";
import { IFilters, TODO_PRIORITY } from "../../types";
import { TodoMenuItem } from "./TodoMenuItem";

interface Props {
  isOpen: boolean;
  high: number;
  medium: number;
  low: number;
  filter?: keyof IFilters;
  onClick: (value: IFilters) => void;
}

export const PriorityMenu: React.FC<Props> = ({
  isOpen,
  high,
  medium,
  low,
  filter,
  onClick,
}) => {
  return (
    <>
      <ListSubheader sx={{ bgcolor: "primary.light" }}>Priority</ListSubheader>
      <TodoMenuItem
        text={`${TODO_PRIORITY.HIGH} (${high})`}
        icon={<Star />}
        isOpen={isOpen}
        isSelected={filter === TODO_PRIORITY.HIGH}
        onClick={() => onClick({ priority: TODO_PRIORITY.HIGH })}
      />
      <TodoMenuItem
        text={`${TODO_PRIORITY.MEDIUM} (${medium})`}
        icon={<StarHalf />}
        isOpen={isOpen}
        isSelected={filter === TODO_PRIORITY.MEDIUM}
        onClick={() => onClick({ priority: TODO_PRIORITY.MEDIUM })}
      />
      <TodoMenuItem
        text={`${TODO_PRIORITY.LOW} (${low})`}
        icon={<StarOutline />}
        isOpen={isOpen}
        isSelected={filter === TODO_PRIORITY.LOW}
        onClick={() => onClick({ priority: TODO_PRIORITY.LOW })}
      />
    </>
  );
};
