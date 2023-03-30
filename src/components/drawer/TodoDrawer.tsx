import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Drawer, IconButton, useTheme } from "@mui/material";
import { TodoHeader } from "../toolbar/TodoHeader";
import { closedMixin, openedMixin } from "./mixins";
import { TodoMenu } from "./TodoMenu";

export const drawerWidth = 240;

interface Props {
  open: boolean;
  onClose: () => void;
}

export const TodoDrawer: React.FC<Props> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      open={open}
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
          ...openedMixin(theme, drawerWidth),
          "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
        }),
        ...(!open && {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "primary.dark",
          p: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
        }}
      >
        {open && <TodoHeader />}
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>
      <TodoMenu open={open} />
    </Drawer>
  );
};
