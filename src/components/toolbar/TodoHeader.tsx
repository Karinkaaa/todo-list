import { Avatar, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";

export const TodoHeader: React.FC = () => {
  return (
    <>
      <Avatar
        src={logo}
        alt="Todo List"
        variant="rounded"
        sx={{ width: 24, height: 24 }}
      />
      <Typography
        component="div"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          ml: 1.5,
          [theme.breakpoints.down("sm")]: { fontSize: "18px" },
          [theme.breakpoints.up("sm")]: { fontSize: "20px" },
        })}
      >
        Todo List
      </Typography>
    </>
  );
};
