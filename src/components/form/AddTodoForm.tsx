import { Add } from "@mui/icons-material";
import { Box, Button, ClickAwayListener, MenuItem } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useTodoNameRules } from "../../redux/hooks";
import { addTodo } from "../../redux/slice";
import { ITodoForm, TODO_PRIORITY } from "../../types";
import { InputController } from "../controller/InputController";
import { SelectController } from "../controller/SelectController";

export const AddTodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const rules = useTodoNameRules();

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isDirty },
    setFocus,
  } = useForm<ITodoForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      priority: void 0,
    },
  });

  const onSubmit: SubmitHandler<ITodoForm> = (data) => {
    if (isValid) {
      dispatch(addTodo(data));
      reset();
    } else {
      setFocus("name");
    }
  };

  return (
    <ClickAwayListener
      onClickAway={() => reset()}
      mouseEvent={isDirty || !isValid ? "onClick" : false}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", margin: "0 0 16px" }}
      >
        <InputController
          name="name"
          label="Name"
          margin="dense"
          variant="outlined"
          onKeyDown={(e) => e.key === "Enter" && setFocus("priority")}
          rules={rules}
          control={control}
        />
        <Box sx={{ minWidth: 150, ml: 1 }}>
          <SelectController
            name="priority"
            label="Priority"
            margin="dense"
            variant="outlined"
            rules={{ required: "Choose a priority" }}
            control={control}
          >
            {Object.values(TODO_PRIORITY).map((priority) => (
              <MenuItem key={uuid()} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </SelectController>
        </Box>
        <Button
          type="submit"
          variant="contained"
          endIcon={<Add />}
          sx={{ my: 1, ml: 1, minWidth: 100, height: 56 }}
        >
          Add
        </Button>
      </form>
    </ClickAwayListener>
  );
};
