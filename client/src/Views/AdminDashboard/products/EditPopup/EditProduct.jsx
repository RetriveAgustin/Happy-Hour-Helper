import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ModalFormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ProductImg = styled.img`
  width: 400px;
  height: 400px;
`;

function EditProductButton({ props }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "60vw",
    minHeight: "60vh",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
  };

  // Global States
  const [open, setOpen] = useState(false);

  const [edit, setEdit] = useState(false);

  // Edit States
  const [input, setInput] = useState({
    name: "",
    img: "",
    price: "",
    capacity: "",
    stock: "",
    has_discount: "",
  });

  useEffect(() => {
    setInput(props);
  }, [edit]);

  // -------------------------------------------------

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  const HandleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  if (edit === false) {
    return (
      <>
        <Button onClick={HandleOpen}>
          <ListIcon />
        </Button>
        <Modal open={open} onClose={HandleClose}>
          <Box sx={style}>
            <ModalContainer>
              <div>
                <ProductImg src={props.img} />
                <p>{props.id}</p>
                <h1>{props.name}</h1>
                <h3>$ {props.price}</h3>
              </div>
              <div>
                <label>Stock</label>
                <h3>{props.stock}</h3>
                <br />
                <label>Rating</label>
                <h3>{props.rating}</h3>
                <br />
                <label>Has discount</label>
                <h3>{props.has_discount ? "true" : "false"}</h3>
                <hr />
                <label>Marca</label>
                <h4>{props.Brands[0].name}</h4>
                <br />
                <label>Categoria</label>
                <h4>{props.Categories[0].name}</h4>
                <br />
                <label>Sub Categoria</label>
                <h4>{props.Sub_categories[0].name}</h4>
              </div>
              <ButtonContainer>
                <Button onClick={() => setEdit(true)}>Edit</Button>
              </ButtonContainer>
            </ModalContainer>
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
            <ModalFormContainer>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <p>{props.id}</p>
                <ProductImg src={input.img} />
                <FormControl variant="standart">
                  <InputLabel>Imagen</InputLabel>
                  <Input
                    name="img"
                    value={input.img}
                    onChange={(e) => HandleInput(e)}
                  />
                </FormControl>
              </Box>

              <Box
                sx={{
                  width: "10vw",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <FormControl variant="standart" fullWidth>
                  <InputLabel>Nombre</InputLabel>
                  <Input
                    name="name"
                    value={input.name}
                    onChange={(e) => HandleInput(e)}
                  />
                </FormControl>

                <FormControl variant="standart" fullWidth>
                  <InputLabel>Precio</InputLabel>
                  <Input
                    value={input.price}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    name="price"
                    onChange={(e) => HandleInput(e)}
                  />
                </FormControl>

                <FormControl variant="standart" fullWidth>
                  <InputLabel>Stock</InputLabel>
                  <Input
                    name="stock"
                    value={input.stock}
                    onChange={(e) => HandleInput(e)}
                  />
                </FormControl>
              </Box>

              <ButtonContainer>
                <Button onClick={() => setEdit(false)}>Cancelar</Button>
                <Button>Confirmar</Button>
              </ButtonContainer>
            </ModalFormContainer>
          </Box>
        </Modal>
      </>
    );
  }
}

export default EditProductButton;
