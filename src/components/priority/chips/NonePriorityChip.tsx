import { Chip } from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../../enums";

export const NonePriorityChip: React.FC = () => (
  <Chip
    label={TODO_PRIORITY.NONE}
    sx={{ background: "aliceblue", cursor: "pointer" }}
  />
);
