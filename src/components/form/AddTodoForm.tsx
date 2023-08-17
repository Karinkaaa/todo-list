import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
  useTodoNameRules,
} from "../../redux/hooks";
import { setIsOpen } from "../../redux/slices/modal";
import { addTodo } from "../../redux/slices/todo";
import { ITodoForm, TODO_PRIORITY } from "../../types";
import { InputController } from "../controller/InputController";
import { SelectController } from "../controller/SelectController";

export const AddTodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const rules = useTodoNameRules();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      isOpen && dispatch(setIsOpen(false));
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
        style={{
          display: "flex",
          margin: "0 0 16px",
          flexDirection: isMobile ? "column" : "row",
        }}
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
        <Box minWidth={150} ml={isMobile ? 0 : 1}>
          <SelectController
            name="priority"
            label="Priority"
            margin="dense"
            variant="outlined"
            rules={{ required: "Choose a priority" }}
            control={control}
          >
            {Object.values(TODO_PRIORITY).map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </SelectController>
        </Box>
        <Button
          type="submit"
          variant="contained"
          endIcon={<Add />}
          sx={{
            mt: isMobile ? 2 : 1,
            ml: isMobile ? 0 : 1,
            height: 56,
            minWidth: 100,
          }}
        >
          Add
        </Button>
      </form>
    </ClickAwayListener>
  );
};
