import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilters } from "../../redux/slice";

export const SearchTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterName = useAppSelector((state) => state.todos.filters?.name) || "";

  const handleChangeSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setFilters({ name: event.target.value }));
  };

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        bgcolor: alpha(theme.palette.common.white, 0.1),
        "&:hover": {
          bgcolor: alpha(theme.palette.common.white, 0.2),
        },
      })}
    >
      <Box
        sx={(theme) => ({
          p: theme.spacing(0, 2),
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <SearchIcon />
      </Box>
      <TextField
        placeholder="Search…"
        variant="standard"
        value={filterName}
        onChange={handleChangeSearch}
        InputProps={{ disableUnderline: true }}
        sx={(theme) => ({
          "& .MuiInputBase-root": { color: "inherit" },
          "& .MuiInputBase-input": {
            p: theme.spacing(1, 1, 1, 0),
            pl: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: 120,
            [theme.breakpoints.up("sm")]: {
              "&:focus": {
                width: 200,
              },
            },
          },
        })}
      />
    </Box>
  );
};
