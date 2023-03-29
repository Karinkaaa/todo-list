import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

interface Props {
  isDisabled: boolean;
}

export const NonePriorityChip: React.FC<Props> = ({ isDisabled }) => (
  <Chip
    label={TODO_PRIORITY.NONE}
    sx={{ background: "aliceblue", cursor: isDisabled ? "default" : "pointer" }}
  />
);
