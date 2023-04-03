import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Drawer, IconButton, useTheme } from "@mui/material";
import { TodoHeader } from "../toolbar/TodoHeader";
import { closedMixin, openedMixin } from "./mixins";
import { TodoMenu } from "./TodoMenu";

export const drawerWidth = 240;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TodoDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      open={isOpen}
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(isOpen && {
          ...openedMixin(theme, drawerWidth),
          "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
        }),
        ...(!isOpen && {
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
        {isOpen && <TodoHeader />}
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>
      <TodoMenu isOpen={isOpen} />
    </Drawer>
  );
};
