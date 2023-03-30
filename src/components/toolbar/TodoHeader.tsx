import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export const TodoHeader: React.FC = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        ml: 2,
        color: "white",
        fontSize: sm ? "18px" : "20px",
      }}
    >
      Todo List
    </Typography>
  );
};
