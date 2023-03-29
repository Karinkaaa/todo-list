import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

interface Props {
  isDisabled: boolean;
}

export const HighPriorityChip: React.FC<Props> = ({ isDisabled }) => (
  <Chip
    label={TODO_PRIORITY.HIGH}
    sx={{
      background: "red",
      color: "white",
      cursor: isDisabled ? "default" : "pointer",
    }}
  />
);
