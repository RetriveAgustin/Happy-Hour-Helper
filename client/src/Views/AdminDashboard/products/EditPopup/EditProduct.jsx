import { Box, Button, Modal } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import React from "react";
import { useState } from "react";

function EditProductButton({ props }) {
  const style = {
    width: "600px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
  };

  const [open, setOpen] = useState(false);

  const [edit, setEdit] = useState(false);

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };
  if (edit === false) {
    return (
      <>
        <Button onClick={HandleOpen}>
          <ListIcon />
        </Button>
        <Modal open={open} onClose={HandleClose}>
          <Box sx={style}>
            <h2>{props.id}</h2>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <label>Min amount for bulk</label>
            <h3>{props.minimum_amount_for_bulk}</h3>
            <label>Bulk discount</label>
            <h3>{props.bulk_discount}</h3>
            <label>Stock</label>
            <h3>{props.stock}</h3>
            <label>Rating</label>
            <h3>{props.rating}</h3>
            <label>Has discount</label>
            <h3>{props.has_discount ? "true" : "false"}</h3>
            <Button onClick={() => setEdit(true)}>Edit</Button>
          </Box>
        </Modal>
      </>
    );
  }
  if (edit === true) {
    return (
      <>
        <Button onClick={HandleOpen}>
          <ListIcon />
        </Button>
        <Modal open={open} onClose={HandleClose}>
          <Box sx={style}>
            <label>Name:</label>
            <input value={props.name} />
            <Button onClick={() => setEdit(false)}>Confirm</Button>
          </Box>
        </Modal>
      </>
    );
  }
}

export default EditProductButton;
