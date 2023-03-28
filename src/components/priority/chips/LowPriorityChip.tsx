import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

export const LowPriorityChip: React.FC = () => (
  <Chip
    label={TODO_PRIORITY.LOW}
    sx={{ background: "yellow", cursor: "pointer" }}
  />
);
