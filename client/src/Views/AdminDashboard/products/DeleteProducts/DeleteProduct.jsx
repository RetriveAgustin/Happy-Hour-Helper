import React from "react";
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

function DeleteProduct({ props }) {
  const [open, setOpen] = useState(false);

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

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="error" onClick={HandleOpen}>
        <Delete />
      </Button>
      <Modal open={open} onClose={HandleClose}>
        <Box sx={style}>
          <Typography>Eliminar Producto</Typography>
          <p>{`Se eliminara el producto: "${props.name}", estas seguro que deseas eliminarlo? Los cambios son permanentes`}</p>
          <Button onClick={HandleClose}>Cancelar</Button>
          <Button>Eliminar</Button>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteProduct;
