import { Check, Delete, DoneAll, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "../redux/hooks";
import { editTodo, removeTodo } from "../redux/todoSlice";
import { ITodo } from "../types";

interface TodoProps {
  todo: ITodo;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();

  const { id, name, createdAt, completed } = todo;
  const [value, setValue] = React.useState<string>(name);
  const [isReadonly, setIsReadonly] = React.useState<boolean>(true);

  useEffect(() => {
    setValue(name);
  }, [name]);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = () => {
    const trimmedValue = value.trim();

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

  return (
    <ListItem
      key={id}
      sx={{
        bgcolor: completed ? "primary.light" : "secondary.light",
        borderRadius: 3,
        marginBottom: 1,
        "&:hover": {
          boxShadow: completed ? "#6311df 0 1px 2px" : "#056042 0 1px 2px"
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
            sx: { textDecoration: completed ? "line-through" : "none" },
          }}
          variant="standard"
          fullWidth
          multiline
          value={value}
          error={value.trim() === ""}
          helperText={
            value.trim() === ""
              ? "Please, enter the todo name"
              : new Date(createdAt).toLocaleDateString("ua")
          }
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEditTodo()}
        />
      </ListItemText>
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
