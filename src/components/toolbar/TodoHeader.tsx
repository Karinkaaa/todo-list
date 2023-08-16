import { Assignment } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export const TodoHeader: React.FC = () => {
  return (
    <>
      <Assignment />
      <Typography
        component="div"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          ml: 2,
          [theme.breakpoints.down("sm")]: { fontSize: "18px" },
          [theme.breakpoints.up("sm")]: { fontSize: "20px" },
        })}
      >
        Todo List
      </Typography>
    </>
  );
};
