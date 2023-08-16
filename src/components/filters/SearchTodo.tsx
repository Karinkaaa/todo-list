import SearchIcon from "@mui/icons-material/Search";
import { Box, ClickAwayListener, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useAppSelector, useFilters } from "../../redux/hooks";

export const SearchTodo: React.FC = () => {
  const { setSearchName } = useFilters();
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const filters = useAppSelector((state) => state.todos.filters);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    setIsTouched(true);
  };

  const handleClickAway = () => {
    setIsTouched(false);
  };

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent={isTouched ? "onClick" : false}
    >
      <Box position="relative">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          height="100%"
          p={2}
        >
          <SearchIcon sx={{ color: "gray" }} />
        </Box>
        <TextField
          fullWidth
          placeholder="Search…"
          variant="outlined"
          value={filters.name || ""}
          onChange={handleChangeSearch}
          sx={{
            "& .MuiInputBase-root": { color: "inherit" },
            "& .MuiInputBase-input": {
              p: 1,
              pl: 6,
            },
          }}
        />
      </Box>
    </ClickAwayListener>
  );
};
