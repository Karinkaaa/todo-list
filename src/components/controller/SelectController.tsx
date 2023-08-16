import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { ITodoForm } from "../../types";

interface Props {
  disabled?: boolean;
}

export const SelectController: React.FC<
  UseControllerProps<ITodoForm, "priority"> & Props & TextFieldProps
> = ({
  control,
  name,
  rules,
  defaultValue,
  shouldUnregister,
  disabled = false,
  ...props
}) => {
  const {
    field: { value, ref, onChange, ...field },
    fieldState: { error },
  } = useController({ rules, name, control });

  return (
    <TextField
      select
      fullWidth
      {...field}
      {...props}
      inputRef={ref}
      inputProps={{
        value: value || "",
        disabled,
        onChange,
        sx: { cursor: disabled ? "default" : "pointer" },
        ...props.inputProps,
      }}
      SelectProps={{
        MenuProps: {
          disablePortal: true,
        },
        ...props.SelectProps,
      }}
      sx={(theme) => ({
        ".MuiSvgIcon-root": {
          display: disabled ? "none" : "visible",
        },
        [theme.breakpoints.down("sm")]: {
          "&&& .MuiSelect-select": {
            pr: disabled ? 0.5 : 3,
          },
        },
      })}
      error={!!error}
      helperText={error?.message}
    />
  );
};
