import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

export const MediumPriorityChip: React.FC = () => (
  <Chip
    label={TODO_PRIORITY.MEDIUM}
    sx={{ background: "orange", color: "white", cursor: "pointer" }}
  />
);
