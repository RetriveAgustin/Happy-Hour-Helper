import React from "react";
import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { Delete } from "@mui/icons-material";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 0.5rem;
`;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  gap: 1rem 0;
`;

const WarningTitle = styled.div`
  background-color: red;
  width: 100%;
  text-align: center;
  color: white;
  padding: 0.5rem 0;
  border-radius: 5px 5px 0 0;
`;

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
          <ModalContainer>
            <WarningTitle>
              <h1>Eliminar Producto</h1>
            </WarningTitle>
            <h4>{`Se eliminara el producto: "${props.name}", estas seguro que deseas eliminarlo? Los cambios son permanentes`}</h4>
            <ButtonContainer>
              <Button onClick={HandleClose}>Cancelar</Button>
              <Button>Eliminar</Button>
            </ButtonContainer>
          </ModalContainer>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteProduct;
