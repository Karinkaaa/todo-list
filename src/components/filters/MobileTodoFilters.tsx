import {
  ExpandLess,
  ExpandMore,
  FilterList,
  FilterListOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useFilters } from "../../redux/hooks";
import { IFilters, TODO_PRIORITY, TODO_STATUS } from "../../types";
import { SearchTodo } from "./SearchTodo";
import { StyledToggleButtonGroup } from "./StyledToggleButtonGroup";

interface Props {
  filters: IFilters;
}

export const MobileTodoFilters: React.FC<Props> = ({ filters }) => {
  const { setStatus, setPriority, clearFilters } = useFilters();
  const [open, setOpen] = useState(false);

  const toggleFilters = () => {
    setOpen(!open);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      bgcolor="whitesmoke"
      boxShadow={1}
    >
      <Box flexGrow={1}>
        <ListItemButton onClick={toggleFilters}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <FilterList />
          </ListItemIcon>
          <ListItemText primary="Filters" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            m={2}
            sx={{
              "& > div": {
                mb: 1,
              },
            }}
          >
            <SearchTodo />
            <StyledToggleButtonGroup
              title="Status"
              value={filters.status}
              values={Object.values(TODO_STATUS)}
              onChange={(e) => setStatus(e.target.value)}
            />
            <StyledToggleButtonGroup
              title="Priority"
              value={filters.priority}
              values={Object.values(TODO_PRIORITY)}
              onChange={(e) => setPriority(e.target.value)}
            />
            <Button
              fullWidth
              sx={{ mt: 1 }}
              variant="outlined"
              endIcon={<FilterListOff />}
              onClick={clearFilters}
            >
              Clear filters
            </Button>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
