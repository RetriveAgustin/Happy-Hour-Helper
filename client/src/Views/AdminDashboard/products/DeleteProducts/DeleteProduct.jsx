import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { Delete } from "@mui/icons-material";
import {
  ButtonContainer,
  ModalContainer,
  WarningTitle,
} from "./DeleteProduct.styles";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../redux/actions/actions";

function DeleteProduct({ props }) {
  const dispatch = useDispatch();
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

  const HandleDelete = () => {
    const productId =  props.id;

    // const productId = props.id;
    dispatch(deleteProduct(productId));
    window.location.reload()
  };

  return (
    <>
      <Button color="error" onClick={HandleOpen}>
        <Delete />
      </Button>
      <Modal open={open} onClose={HandleClose}>
        <Box sx={style}>
          <ModalContainer>
            <WarningTitle>
              <h1>Eliminar Producto</h1>
            </WarningTitle>
            <h4>{`Se eliminara el producto: "${props.name}", estas seguro que deseas eliminarlo? Los cambios son permanentes`}</h4>
            <ButtonContainer>
              <Button onClick={HandleClose}>Cancelar</Button>
              <Button onClick={HandleDelete}>Eliminar</Button>
            </ButtonContainer>
          </ModalContainer>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteProduct;
