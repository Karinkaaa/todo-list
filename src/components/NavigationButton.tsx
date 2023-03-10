import { Button } from "@mui/material";
import React from "react";

interface NavigationButtonProps {
  label: string;
  sx?: { [key: string]: string | number };
  handleClickButton: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  sx = {},
  handleClickButton,
}) => {
  const buttonSx = {
    "&:hover": {
      backgroundColor: "primary.main",
    },
  };

  return (
    <Button
      color="inherit"
      sx={{ ...sx, ...buttonSx }}
      onClick={handleClickButton}
    >
      {label}
    </Button>
  );
};
