import { Check, Delete, DoneAll, Edit } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { TODO_PRIORITY } from "../../enums";
import { useAppDispatch } from "../../redux/hooks";
import { editTodo, removeTodo } from "../../redux/todoSlice";
import { ITodo } from "../../types";
import { HighPriorityChip } from "../priority/chips/HighPriorityChip";
import { LowPriorityChip } from "../priority/chips/LowPriorityChip";
import { MediumPriorityChip } from "../priority/chips/MediumPriorityChip";
import { NonePriorityChip } from "../priority/chips/NonePriorityChip";

interface Props {
  todo: ITodo;
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();

  const { id, name, createdAt, completed, priority } = todo;
  const [value, setValue] = useState<string>(name);
  const [isReadonly, setIsReadonly] = useState<boolean>(true);

  useEffect(() => {
    setValue(name);
  }, [name]);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = () => {
    const trimmedValue = value?.trim();

    if (trimmedValue) {
      dispatch(editTodo({ id, name: trimmedValue }));
      setIsReadonly(true);
    }
  };

  const handleToggleEditButton = () => {
    setIsReadonly(!isReadonly);

    if (ref) {
      const input = ref.current.firstChild;
      input.focus()!;
      input.selectionStart = input.value.length;
    }
  };

  const handleToggleCheckbox = () => {
    dispatch(editTodo({ id, completed: !completed }));
  };

  const getPriorityChip = () => {
    if (priority === TODO_PRIORITY.HIGH) {
      return <HighPriorityChip />;
    } else if (priority === TODO_PRIORITY.MEDIUM) {
      return <MediumPriorityChip />;
    } else if (priority === TODO_PRIORITY.LOW) {
      return <LowPriorityChip />;
    } else {
      return <NonePriorityChip />;
    }
  };

  const priorityChip = getPriorityChip();

  return (
    <ListItem
      key={id}
      sx={{
        bgcolor: completed ? "primary.light" : "secondary.light",
        borderRadius: 3,
        marginBottom: 1,
        boxShadow: 1,
        "&:hover": {
          boxShadow: 5,
        },
      }}
    >
      <IconButton onClick={handleToggleCheckbox}>
        <Checkbox
          checked={completed}
          checkedIcon={<DoneAll />}
          sx={{ color: completed ? "primary.dark" : "secondary.main" }}
        />
      </IconButton>
      <ListItemText>
        <TextField
          InputProps={{
            readOnly: isReadonly,
            ref,
            disableUnderline: isReadonly,
            sx: {
              textDecoration: completed ? "line-through" : "none",
              cursor: isReadonly ? "default" : "inherit",
            },
          }}
          inputProps={{
            sx: { cursor: isReadonly ? "default" : "inherit" },
          }}
          variant="standard"
          fullWidth
          multiline
          value={value}
          error={value?.trim() === ""}
          helperText={
            value?.trim() === ""
              ? "Please, enter the todo name"
              : new Date(createdAt).toLocaleDateString("ua")
          }
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEditTodo()}
        />
      </ListItemText>
      <Box sx={{ ml: 2 }}>{priorityChip}</Box>
      <IconButton
        sx={{ ml: 1 }}
        disabled={completed}
        onClick={handleToggleEditButton}
      >
        {isReadonly ? (
          <Edit sx={{ color: completed ? "gray[500]" : "secondary.main" }} />
        ) : (
          <Check color="secondary" />
        )}
      </IconButton>
      <IconButton sx={{ mr: 1 }} onClick={handleRemoveTodo}>
        <Delete sx={{ color: "primary.dark" }} />
      </IconButton>
    </ListItem>
  );
};
