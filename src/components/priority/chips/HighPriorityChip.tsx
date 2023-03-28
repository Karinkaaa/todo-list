import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

export const HighPriorityChip: React.FC = () => (
  <Chip
    label={TODO_PRIORITY.HIGH}
    sx={{ background: "red", color: "white", cursor: "pointer" }}
  />
);
