import { Menu } from "@mui/icons-material";
import {
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../../src/assets/logo.png";

interface Props {
  open: boolean;
  handleClick: () => void;
}

export const TodoToolbar: React.FC<Props> = ({ open, handleClick }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleClick}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <Menu />
      </IconButton>
      <img style={{ width: "35px" }} src={logo} alt="logo" />
      <Typography
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          ml: 2,
          fontSize: sm ? "18px" : "20px",
        }}
      >
        Todo List
      </Typography>
    </Toolbar>
  );
};
