import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

interface Props {
  isDisabled: boolean;
}

export const MediumPriorityChip: React.FC<Props> = ({ isDisabled }) => (
  <Chip
    label={TODO_PRIORITY.MEDIUM}
    sx={{
      background: "orange",
      color: "white",
      cursor: isDisabled ? "default" : "pointer",
    }}
  />
);
