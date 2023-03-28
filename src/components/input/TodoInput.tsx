import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { TODO_PRIORITY } from "../../enums";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, setPriority } from "../../redux/todoSlice";
import { TodoPrioritySelect } from "../priority/TodoPrioritySelect";

export const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const priority = useAppSelector((state) => state.todos.priority);

  const handleAddTodo = (name: string) => {
    if (name?.trim()) {
      dispatch(addTodo({ name, priority }));
      dispatch(setPriority(TODO_PRIORITY.NONE));
      setValue("");
      setIsTouched(false);
    } else {
      setIsTouched(true);
    }
  };

  return (
    <Box sx={{ display: "flex", mb: 5 }}>
      <TextField
        label="Enter the thing you need to do:"
        fullWidth
        value={value}
        error={isTouched && value?.trim() === ""}
        helperText={
          value?.trim() === "" && isTouched ? "Please, enter the todo name" : ""
        }
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo(value)}
      />
      <TodoPrioritySelect />
      <Button
        variant="contained"
        endIcon={<Add />}
        sx={{ ml: 1, height: 56, minWidth: 120 }}
        onClick={() => handleAddTodo(value)}
      >
        Add
      </Button>
    </Box>
  );
};
