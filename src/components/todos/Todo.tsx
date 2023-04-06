import { Delete, DoneAll } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
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
      key={uuid()}
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
