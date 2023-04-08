import { ClickAwayListener } from "@mui/base";
import { Done, Edit } from "@mui/icons-material";
import { Box, Chip, IconButton, ListItemText, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useTodoNameRules } from "../../redux/hooks";
import { editTodo } from "../../redux/slice";
import { ITodo, ITodoForm, TODO_PRIORITY, TODO_STATUS } from "../../types";
import { InputController } from "../controller/InputController";
import { SelectController } from "../controller/SelectController";

interface Props {
  todo: ITodo;
}

export const EditTodoForm: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const rules = useTodoNameRules(todo.id);
  const [isReadonly, setIsReadonly] = useState<boolean>(true);

  const isCompleted = todo.status === TODO_STATUS.COMPLETED;
  const helperText = (
    <span>
      {new Date(todo.createdAt).toLocaleDateString("ua")}{" "}
      <em>{todo.isEdited ? "(edited)" : ""}</em>
    </span>
  );

  const {
    handleSubmit,
    control,
    setFocus,
    formState: { isValid, isDirty },
    reset,
  } = useForm<ITodoForm>({
    mode: "onChange",
    defaultValues: {
      name: todo.name,
      priority: todo.priority,
    },
  });

  const onSubmit: SubmitHandler<ITodoForm> = (data) => {
    if (isValid) {
      setIsReadonly(!isReadonly);
      dispatch(
        editTodo({
          id: todo.id,
          name: data.name,
          priority: data.priority,
          isEdited: isDirty,
        })
      );
    } else {
      setFocus("name");
    }
  };

  const handleToggleEditButton = () => {
    const input = document.getElementById(`ic-${todo.id}`) as HTMLInputElement;
    const end = input?.value?.length;
    input.setSelectionRange(end, end);
    input.focus();
    setIsReadonly(!isReadonly);
  };

  const handleClickAway = () => {
    setIsReadonly(true);
    reset();
  };

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent={isReadonly ? false : "onClick"}
    >
      <form
        style={{ display: "flex", alignItems: "center", width: "100%" }}
        className={isReadonly ? "" : "active"}
      >
        <ListItemText>
          <InputController
            id={`ic-${todo.id}`}
            name="name"
            variant="standard"
            readOnly={isReadonly}
            disabled={isCompleted}
            InputProps={{
              disableUnderline: isReadonly,
            }}
            helperText={helperText}
            onKeyDown={(e) => e.key === "Enter" && setFocus("priority")}
            rules={rules}
            control={control}
          />
        </ListItemText>
        <Box sx={{ ml: 2 }}>
          <SelectController
            name="priority"
            variant="standard"
            disabled={isReadonly}
            InputProps={{ disableUnderline: true }}
            rules={{ required: "Choose a priority" }}
            control={control}
          >
            <MenuItem value={TODO_PRIORITY.HIGH}>
              <Chip
                label={TODO_PRIORITY.HIGH}
                disabled={isCompleted}
                sx={{
                  background: "red",
                  WebkitTextFillColor: "white",
                  cursor: isReadonly ? "default" : "pointer",
                }}
              />
            </MenuItem>
            <MenuItem value={TODO_PRIORITY.MEDIUM}>
              <Chip
                label={TODO_PRIORITY.MEDIUM}
                disabled={isCompleted}
                sx={{
                  background: "orange",
                  WebkitTextFillColor: "white",
                  cursor: isReadonly ? "default" : "pointer",
                }}
              />
            </MenuItem>
            <MenuItem value={TODO_PRIORITY.LOW}>
              <Chip
                label={TODO_PRIORITY.LOW}
                disabled={isCompleted}
                sx={{
                  background: "yellow",
                  WebkitTextFillColor: "black",
                  cursor: isReadonly ? "default" : "pointer",
                }}
              />
            </MenuItem>
          </SelectController>
        </Box>
        <IconButton
          disabled={isCompleted}
          onClick={isReadonly ? handleToggleEditButton : handleSubmit(onSubmit)}
        >
          {isReadonly ? (
            <Edit
              sx={{ color: isCompleted ? "gray[500]" : "secondary.main" }}
            />
          ) : (
            <Done color="secondary" />
          )}
        </IconButton>
      </form>
    </ClickAwayListener>
  );
};
