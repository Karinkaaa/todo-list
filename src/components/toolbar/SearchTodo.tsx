import SearchIcon from "@mui/icons-material/Search";
import { Box, ClickAwayListener, TextField } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFilters } from "../../redux/slice";

export const SearchTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const filterName = useAppSelector((state) => state.todos.filters?.name) || "";

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ name: event.target.value }));
    setIsTouched(true);
  };

  const handleClickAway = () => {
    dispatch(setFilters({}));
    setIsTouched(false);
  };

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent={isTouched ? "onClick" : false}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          borderRadius: theme.shape.borderRadius,
          bgcolor: alpha(theme.palette.primary.light, 0.1),
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.light, 0.2),
          },
        })}
      >
        <Box
          sx={{
            p: 2,
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchIcon />
        </Box>
        <TextField
          placeholder="Search…"
          variant="standard"
          value={filterName}
          onChange={handleChangeSearch}
          InputProps={{ disableUnderline: true }}
          sx={{
            "& .MuiInputBase-root": { color: "inherit" },
            "& .MuiInputBase-input": {
              p: 1,
              pl: 6,
              width: 200,
            },
          }}
        />
      </Box>
    </ClickAwayListener>
  );
};
