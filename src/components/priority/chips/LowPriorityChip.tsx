import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

interface Props {
  isDisabled: boolean;
}

export const LowPriorityChip: React.FC<Props> = ({ isDisabled }) => (
  <Chip
    label={TODO_PRIORITY.LOW}
    sx={{ background: "yellow", cursor: isDisabled ? "default" : "pointer" }}
  />
);
