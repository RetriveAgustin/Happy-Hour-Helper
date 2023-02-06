import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    textAlign: "center"

};
/* name: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: */
export default function CreateAdress() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [adress, setadress] = useState({
        name:"",
        number:-1,
        description:""
    })





    return (
        <div>
            <Button onClick={handleOpen}>Direccion de envío</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 style={{ marginBottom: "40px", marginTop: "10px" }}>Dirección de envío</h2>
                    <TextField
                        sx={{
                            width: "100%",
                            marginBottom: "20px"
                        }}
                        name="name"
                        id="outlined-basic"
                        label="Calle"
                        variant="outlined"
                    />

                    <TextField
                        sx={{
                            width: "100%",
                            marginBottom: "20px"
                        }}
                        name="number"
                        id="outlined-basic"
                        label="Numero"
                        variant="outlined"
                        type="number"
                    />

                    <TextField
                        sx={{
                            width: "100%"

                        }}
                        name="description"
                        id="outlined-basic"
                        label="Descripcion"
                        variant="outlined"
                    />

                    <Button
                        sx={{
                            width: "100%",
                            height:"56px",
                            marginTop:"30px"
                        }}
                        variant="contained"
                    >Guardar dirección
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}