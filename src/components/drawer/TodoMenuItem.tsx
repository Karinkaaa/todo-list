import {
  Fade,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, { ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  text: string;
  icon: ReactNode;
  isOpen: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export const TodoMenuItem: React.FC<Props> = ({
  text,
  icon,
  isOpen,
  isSelected,
  onClick,
}) => {
  return (
    <Tooltip
      arrow
      title={text}
      placement="right"
      disableHoverListener={isOpen}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
    >
      <ListItem
        key={uuid()}
        disablePadding
        sx={{
          display: "block",
          color: isSelected ? "primary.dark" : "black",
          boxShadow: isSelected ? 1 : 0,
        }}
        onClick={onClick}
      >
        <ListItemButton
          selected={isSelected}
          sx={{
            minHeight: 48,
            justifyContent: isOpen ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : "auto",
              justifyContent: "center",
              color: isSelected ? "primary.dark" : "black",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};
