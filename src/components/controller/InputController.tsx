import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { ITodoForm } from "../../types";

interface Props {
  readOnly?: boolean;
}

export const InputController: React.FC<
  UseControllerProps<ITodoForm, "name"> & Props & TextFieldProps
> = ({
  control,
  name,
  rules,
  defaultValue,
  shouldUnregister,
  readOnly = false,
  ...props
}) => {
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({ rules, name, control });

  return (
    <TextField
      fullWidth
      multiline
      {...field}
      {...props}
      inputRef={ref}
      InputProps={{
        readOnly,
        sx: { cursor: readOnly ? "default" : "inherit" },
        ...props.InputProps,
      }}
      inputProps={{
        sx: { cursor: readOnly ? "default" : "inherit" },
        ...props.inputProps,
      }}
      error={!!error}
      helperText={error?.message || props.helperText}
    />
  );
};
