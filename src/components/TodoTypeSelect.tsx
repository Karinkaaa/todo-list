import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { TODO_TYPE } from "../enums";
import { useAppDispatch, useAppSelector, useTodosCount } from "../redux/hooks";
import { setSelector } from "../redux/todoSlice";
import { SelectorType } from "../types";

export const TodoTypeSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.todos.selector);
  const { all, active, completed } = useTodosCount();

  const handleChange = (event: SelectChangeEvent<SelectorType>) => {
    dispatch(setSelector(event.target.value));
  };

  return (
    <Box>
      <FormControl sx={{ my: 2, minWidth: 125 }}>
        <Select
          value={selector}
          onChange={handleChange}
          variant="standard"
          sx={{ color: "white" }}
        >
          <MenuItem value={TODO_TYPE.ALL}>
            {`${TODO_TYPE.ALL} (${all})`}
          </MenuItem>
          <MenuItem value={TODO_TYPE.ACTIVE}>
            {`${TODO_TYPE.ACTIVE} (${active})`}
          </MenuItem>
          <MenuItem value={TODO_TYPE.COMPLETED}>
            {`${TODO_TYPE.COMPLETED} (${completed})`}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
