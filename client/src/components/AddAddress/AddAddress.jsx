import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Box, Zoom, TextField } from "@mui/material";
import { FormContainer } from "./AddAddress.styles.js";

const style = {
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

export default function AddAddres({setAlter, alter}) {
  const { userCredentials } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("User_ID")) {
      const id = localStorage.getItem("User_ID");
      setAddress({ ...address, user_id: id });
    }
  }, [userCredentials]);

  const [success, setSuccess] = useState("");
  const [address, setAddress] = useState({
    name: "",
    number: "",
    description: "",
    user_id: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/address/postAddress`, address)
        .then((r) => {
          console.log(r)
          setSuccess(r);
        })
        .then((r) => {
          // setTimeout(() => {
            setOpen(false);
            setAlter(!alter);
          // }, 2000);
        });
    } catch (error) {
      console.log(error)
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Address</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Zoom
          in={open}
          style={{ left: "calc(50% - 275px)", top: "calc(50% - 275px)" }}
        >
          <Box sx={style}>
            <FormContainer>
              <TextField
                id="Nombre"
                label="Nombre de la calle"
                name="name"
                value={address.name}
                variant="outlined"
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                onChange={handleChange}
              ></TextField>

              <TextField
                id="Altura de la calle"
                label="Altura de la calle"
                name="number"
                value={address.number}
                variant="outlined"
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                onChange={handleChange}
              ></TextField>

              <TextField
                id="description"
                label="Descripción del lugar"
                name="description"
                value={address.description}
                variant="outlined"
                sx={{
                  m: 1,
                  marginBottom: "40px",
                  width: "100%",
                  position: "relative",
                  "& p.MuiFormHelperText-root": {
                    position: "absolute",
                    bottom: "-22px",
                    left: "0px",
                  },
                }}
                onChange={handleChange}
              ></TextField>

              <Button onClick={handleSubmit}>Crear</Button>
            </FormContainer>
          </Box>
        </Zoom>
      </Modal>
    </div>
  );
}
