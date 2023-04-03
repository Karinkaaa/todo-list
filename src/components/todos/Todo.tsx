import { Check, Delete, DoneAll, Edit } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { TODO_STATUS } from "../../enums";
import { useAppDispatch } from "../../redux/hooks";
import { editTodo, removeTodo } from "../../redux/todoSlice";
import { ITodo, PriorityType } from "../../types";
import { TodoPriorityChips } from "../priority/TodoPriorityChips";

interface Props {
  todo: ITodo;
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();

  const { id, name, createdAt, status, priority } = todo;
  const isCompleted = status === TODO_STATUS.COMPLETED;

  const [value, setValue] = useState<string>(name);
  const [select, setSelect] = useState<PriorityType>(priority);
  const [isReadonly, setIsReadonly] = useState<boolean>(true);

  useEffect(() => {
    setValue(name);
  }, [name]);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (event?: SelectChangeEvent) => {
    const trimmedValue = value?.trim();

    if (trimmedValue) {
      dispatch(
        editTodo({
          id,
          name: trimmedValue,
          priority: event?.target?.value || priority,
        })
      );
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
    dispatch(
      editTodo({
        id,
        status: isCompleted ? TODO_STATUS.ACTIVE : TODO_STATUS.COMPLETED,
      })
    );
  };

  return (
    <ListItem
      key={id}
      sx={{
        bgcolor: isCompleted ? "primary.light" : "secondary.light",
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
          checked={isCompleted}
          checkedIcon={<DoneAll />}
          sx={{ color: isCompleted ? "primary.dark" : "secondary.main" }}
        />
      </IconButton>
      <ListItemText>
        <TextField
          InputProps={{
            readOnly: isReadonly,
            ref,
            disableUnderline: isReadonly,
            sx: {
              textDecoration: isCompleted ? "line-through" : "none",
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
      <Box sx={{ ml: 2 }}>
        <TodoPriorityChips
          priority={select}
          isDisabled={isCompleted}
          onSelect={setSelect}
        />
      </Box>
      <IconButton
        sx={{ ml: 1 }}
        disabled={isCompleted}
        onClick={handleToggleEditButton}
      >
        {isReadonly ? (
          <Edit sx={{ color: isCompleted ? "gray[500]" : "secondary.main" }} />
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
