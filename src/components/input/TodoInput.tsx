import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/todoSlice";
import { PriorityType } from "../../types";
import { TodoPrioritySelect } from "../priority/TodoPrioritySelect";

export const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<PriorityType | null>(null);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isTouchedSelect, setIsTouchedSelect] = useState<boolean>(false);

  const handleAddTodo = (name: string) => {
    if (name?.trim() && priority) {
      dispatch(addTodo({ name, priority }));
      setValue("");
      setPriority(null);
      setIsTouched(false);
      setIsTouchedSelect(false);
    } else if (!name?.trim() && !priority) {
      setIsTouched(true);
      setIsTouchedSelect(true);
    } else if (!priority) {
      setIsTouchedSelect(true);
    } else if (!name?.trim()) {
      setIsTouched(true);
    }
  };

  return (
    <Box sx={{ display: "flex", mb: 5 }}>
      <TextField
        label="Todo name"
        fullWidth
        value={value}
        error={isTouched && value?.trim() === ""}
        required
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo(value)}
      />
      <Box sx={{ minWidth: 120, ml: 1 }}>
        <TodoPrioritySelect
          priority={priority}
          isTouchedSelect={isTouchedSelect}
          setPriority={setPriority}
          setIsTouchedSelect={setIsTouchedSelect}
        />
      </Box>
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
