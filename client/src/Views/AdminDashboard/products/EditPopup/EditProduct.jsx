import { Box, Button, Modal } from "@mui/material";
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
    minimum_amount_for_bulk: "",
    bulk_discount: "",
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
                <label>Min amount for bulk</label>
                <h3>{props.minimum_amount_for_bulk}</h3>
                <br />
                <label>Bulk discount</label>
                <h3>{props.bulk_discount}</h3>
                <br />
                <label>Stock</label>
                <h3>{props.stock}</h3>
                <br />
                <label>Rating</label>
                <h3>{props.rating}</h3>
                <br />
                <label>Has discount</label>
                <h3>{props.has_discount ? "true" : "false"}</h3>
                <hr />
                <label>Brand</label>
                <h4>{props.Brands[0].name}</h4>
                <br />
                <label>Category</label>
                <h4>{props.Categories[0].name}</h4>
                <br />
                <label>Sub Category</label>
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
          {/* <Box sx={style}>
            <h2>{props.id}</h2>
            <label>Name:</label>
            <input value={props.name} />
            <Button onClick={() => setEdit(false)}>Confirm</Button>
          </Box> */}
          <Box sx={style}>
            <ModalFormContainer>
              <div>
                <ProductImg src={props.img} />
                <p>{props.id}</p>
                <label>Name</label>
                <br />
                <input value={input.name} />
                <br />

                <label>Price</label>
                <br />
                <input value={input.price} />
              </div>
              <div>
                <label>Min amount for bulk</label>
                <br />
                <input value={input.minimum_amount_for_bulk} />
                <br />

                <label>Bulk discount</label>
                <br />
                <input value={input.bulk_discount} />
                <br />

                <label>Stock</label>
                <br />
                <input value={input.stock} />
                <br />

                <label>Rating</label>
                <h3>{props.rating}</h3>
                <br />
                <label>Has discount</label>
                <h3>{props.has_discount ? "true" : "false"}</h3>
                <hr />
                <label>Brand</label>
                <h4>{props.Brands[0].name}</h4>
                <br />
                <label>Category</label>
                <h4>{props.Categories[0].name}</h4>
                <br />
                <label>Sub Category</label>
                <h4>{props.Sub_categories[0].name}</h4>
              </div>
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
