import { FilterAltOff } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useFilters } from "../../redux/hooks";
import { IFilters, TODO_PRIORITY, TODO_STATUS } from "../../types";
import { SearchTodo } from "./SearchTodo";
import { StyledToggleButtonGroup } from "./StyledToggleButtonGroup";

interface Props {
  filters: IFilters;
}

export const TodoFilters: React.FC<Props> = ({ filters }) => {
  const { setStatus, setPriority, clearFilters } = useFilters();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      bgcolor="whitesmoke"
      boxShadow={1}
      py={1}
      px={4}
      mb={1}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          px: 2,
        },
      })}
    >
      <Box
        flexGrow={1}
        sx={(theme) => ({
          "& > div": {
            pr: 3,
          },
          [theme.breakpoints.down("md")]: {
            "& > div": {
              pr: 2,
            },
          },
        })}
      >
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
      </Box>
      <SearchTodo />
    </Box>
  );
};
