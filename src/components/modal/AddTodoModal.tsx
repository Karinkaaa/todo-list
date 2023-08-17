import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsOpen } from "../../redux/slices/modal";
import { AddTodoForm } from "../form/AddTodoForm";

export const AddTodoModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <div>
      <Button
        fullWidth
        variant="outlined"
        sx={{ mb: 1, height: 56 }}
        onClick={handleOpen}
      >
        Add todo
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          position="relative"
          top="25%"
          bgcolor="white"
          boxShadow={15}
          m={1}
          px={3}
          py={1}
        >
          <Box textAlign="end">
            <IconButton
              sx={{ pr: 0, color: "text.disabled" }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Box>
          <AddTodoForm />
        </Box>
      </Modal>
    </div>
  );
};
