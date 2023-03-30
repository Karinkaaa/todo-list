import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  open: boolean;
  text: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const TodoMenuItem: React.FC<Props> = ({
  open,
  text,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <ListItem
      key={uuid()}
      disablePadding
      sx={{ display: "block" }}
      onClick={onClick}
    >
      <ListItemButton
        selected={isSelected}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
