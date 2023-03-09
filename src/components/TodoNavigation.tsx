import { PlaylistAddCheck } from "@mui/icons-material";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";

export const TodoNavigation: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "indigo" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <PlaylistAddCheck sx={{ mr: 1 }} />
            <span>Todos</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};
