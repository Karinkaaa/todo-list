import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../enums";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPriority } from "../../redux/todoSlice";

export const TodoPrioritySelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const priority = useAppSelector((state) => state.todos.priority);

  const handleChangePriority = (event: SelectChangeEvent) => {
    dispatch(setPriority(event?.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Priority</InputLabel>
      <Select
        labelId="select-label"
        label="Priority"
        value={priority}
        onChange={handleChangePriority}
      >
        <MenuItem value={TODO_PRIORITY.NONE}>{TODO_PRIORITY.NONE}</MenuItem>
        <MenuItem value={TODO_PRIORITY.HIGH}>{TODO_PRIORITY.HIGH}</MenuItem>
        <MenuItem value={TODO_PRIORITY.MEDIUM}>{TODO_PRIORITY.MEDIUM}</MenuItem>
        <MenuItem value={TODO_PRIORITY.LOW}>{TODO_PRIORITY.LOW}</MenuItem>
      </Select>
    </FormControl>
  );
};
