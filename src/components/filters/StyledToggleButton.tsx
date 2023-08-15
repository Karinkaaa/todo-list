import { ToggleButton, ToggleButtonProps } from "@mui/material";
import React from "react";
import { PriorityType, StatusType } from "../../types";

interface Props {
  value: StatusType | PriorityType;
  props?: ToggleButtonProps;
}

export const StyledToggleButton: React.FC<Props> = ({ value, ...props }) => {
  return (
    <ToggleButton
      {...props}
      value={value}
      sx={(theme) => ({
        px: 2,
        [theme.breakpoints.down("md")]: {
          px: 1,
        },
      })}
    >
      {value}
    </ToggleButton>
  );
};
