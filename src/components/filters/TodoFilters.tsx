import { FilterAltOff } from "@mui/icons-material";
import { Box, IconButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setFilters } from "../../redux/slice";
import { IFilters, TODO_PRIORITY, TODO_STATUS } from "../../types";
import { SearchTodo } from "./SearchTodo";
import { StyledToggleButton } from "./StyledToggleButton";

interface Props {
  filters: IFilters;
}

export const TodoFilters: React.FC<Props> = ({ filters }) => {
  const dispatch = useAppDispatch();

  const clearFilters = () => {
    dispatch(setFilters({}));
  };

  const handleSetStatus = (event: any) => {
    dispatch(setFilters({ ...filters, status: event.target.value }));
  };

  const handleSetPriority = (event: any) => {
    dispatch(setFilters({ ...filters, priority: event.target.value }));
  };

  return (
    <Box
      sx={(theme) => ({
        py: 1,
        px: 4,
        mb: 1,
        boxShadow: 1,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        bgcolor: "whitesmoke",
        [theme.breakpoints.down("md")]: {
          px: 2,
        },
      })}
    >
      <Box sx={{ flexGrow: 1 }}>
        <IconButton
          sx={(theme) => ({
            pl: 0,
            mr: 3,
            [theme.breakpoints.down("md")]: {
              mr: 2,
            },
          })}
          onClick={clearFilters}
        >
          <FilterAltOff />
        </IconButton>

        <ToggleButtonGroup
          color="primary"
          size="small"
          title="Status"
          value={filters.status}
          exclusive
          onChange={handleSetStatus}
        >
          {Object.values(TODO_STATUS).map((status) => (
            <StyledToggleButton key={status} value={status} />
          ))}
        </ToggleButtonGroup>

        <ToggleButtonGroup
          color="primary"
          size="small"
          title="Priority"
          exclusive
          value={filters.priority}
          sx={(theme) => ({
            ml: 3,
            [theme.breakpoints.down("md")]: {
              ml: 2,
            },
          })}
          onChange={handleSetPriority}
        >
          {Object.values(TODO_PRIORITY).map((priority) => (
            <StyledToggleButton key={priority} value={priority} />
          ))}
        </ToggleButtonGroup>
      </Box>
      <SearchTodo />
    </Box>
  );
};
