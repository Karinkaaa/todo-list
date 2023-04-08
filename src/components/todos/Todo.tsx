import { Delete, DoneAll } from "@mui/icons-material";
import { alpha, Checkbox, IconButton, ListItem } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { editTodo, removeTodo } from "../../redux/slice";
import { ITodo, TODO_STATUS } from "../../types";
import { EditTodoForm } from "../form/EditTodoForm";

interface Props {
  todo: ITodo;
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const isCompleted = todo.status === TODO_STATUS.COMPLETED;

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggleCheckbox = () => {
    dispatch(
      editTodo({
        id: todo.id,
        status: isCompleted ? TODO_STATUS.ACTIVE : TODO_STATUS.COMPLETED,
      })
    );
  };

  return (
    <ListItem
      sx={(theme) => ({
        bgcolor: isCompleted ? "primary.light" : "secondary.light",
        borderRadius: theme.shape.borderRadius,
        mb: 1,
        boxShadow: 1,
        "&:hover": {
          boxShadow: 5,
          bgcolor: alpha(
            isCompleted
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            0.3
          ),
        },
        "&:has(form):has(.active)": {
          boxShadow: 5,
          bgcolor: alpha(theme.palette.secondary.main, 0.5),
        },
      })}
    >
      <IconButton onClick={handleToggleCheckbox}>
        <Checkbox
          checked={isCompleted}
          checkedIcon={<DoneAll />}
          sx={{ color: isCompleted ? "primary.main" : "secondary.main" }}
        />
      </IconButton>
      <EditTodoForm todo={todo} />
      <IconButton sx={{ mr: 1 }} onClick={handleRemoveTodo}>
        <Delete sx={{ color: "primary.dark" }} />
      </IconButton>
    </ListItem>
  );
};
