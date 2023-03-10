import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/todoSlice";

export const TodoInput: React.FC = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const handleAddTodo = (name: string) => {
    if (name.trim()) {
      dispatch(addTodo(name));
      setValue("");
    }
  };

  return (
    <Box sx={{ display: "flex", mb: 5 }}>
      <TextField
        label="Enter the thing you need to do:"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo(value)}
      />
      <Button
        variant="contained"
        endIcon={<Add />}
        sx={{ ml: 1 }}
        onClick={() => handleAddTodo(value)}
      >
        Add
      </Button>
    </Box>
  );
};
