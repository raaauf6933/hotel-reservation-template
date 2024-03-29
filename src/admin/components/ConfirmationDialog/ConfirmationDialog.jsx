import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ConfirmationDialog = (props) => {
  const { open, onClose, message, onSubmit, title } = props;

  const handleSubmit = () => {
    onSubmit();

    onClose();
  };
  return (
    <>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={() => onClose()}>
        <DialogTitle>{title ? title : "Confirmation"}</DialogTitle>
        <DialogContent dividers>{message}</DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
