import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../enums";
import { PriorityType } from "../../types";

interface Props {
  priority: PriorityType | null;
  isTouchedSelect: boolean;
  setPriority: (priority: PriorityType) => void;
  setIsTouchedSelect: (value: boolean) => void;
}

export const TodoPrioritySelect: React.FC<Props> = ({
  priority,
  setPriority,
  isTouchedSelect,
  setIsTouchedSelect,
}) => {
  const handleChangePriority = (event: SelectChangeEvent) => {
    setPriority(event?.target.value as PriorityType);
    setIsTouchedSelect(false);
  };

  return (
    <FormControl fullWidth error={isTouchedSelect}>
      <InputLabel id="select-label">Priority</InputLabel>
      <Select
        labelId="select-label"
        label="Priority"
        required
        value={priority || ""}
        onChange={handleChangePriority}
      >
        <MenuItem value={TODO_PRIORITY.HIGH}>{TODO_PRIORITY.HIGH}</MenuItem>
        <MenuItem value={TODO_PRIORITY.MEDIUM}>{TODO_PRIORITY.MEDIUM}</MenuItem>
        <MenuItem value={TODO_PRIORITY.LOW}>{TODO_PRIORITY.LOW}</MenuItem>
      </Select>
    </FormControl>
  );
};
