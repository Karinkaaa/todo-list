import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { TODO_PRIORITY } from "../../enums";
import { PriorityType } from "../../types";
import { HighPriorityChip } from "./chips/HighPriorityChip";
import { LowPriorityChip } from "./chips/LowPriorityChip";
import { MediumPriorityChip } from "./chips/MediumPriorityChip";

interface Props {
  priority: PriorityType;
  isDisabled?: boolean;
  onSelect: (event: SelectChangeEvent) => void;
}

export const TodoPriorityChips: React.FC<Props> = ({
  priority,
  isDisabled = false,
  onSelect,
}) => {
  return (
    <FormControl disabled={isDisabled}>
      <Select
        value={priority}
        variant="standard"
        disableUnderline
        sx={{
          ".MuiSelect-select": { p: 0, "&:focus": { background: "none" } },
          ".MuiSvgIcon-root": { display: isDisabled ? "none" : "visible" },
        }}
        onChange={onSelect}
      >
        <MenuItem value={TODO_PRIORITY.HIGH}>
          <HighPriorityChip isDisabled={isDisabled} />
        </MenuItem>
        <MenuItem value={TODO_PRIORITY.MEDIUM}>
          <MediumPriorityChip isDisabled={isDisabled} />
        </MenuItem>
        <MenuItem value={TODO_PRIORITY.LOW}>
          <LowPriorityChip isDisabled={isDisabled} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
