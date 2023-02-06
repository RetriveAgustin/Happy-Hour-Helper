import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../../redux/actions/actions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

const AdressConteiner = styled.div`
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AdressCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65%;
  width: auto;
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.root.addresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showTables, setShowTables] = useState(true);
  const [addressToEdit, setAddressToEdit] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    description: "",
  });

  
  const [editFormData, setEditFormData] = useState({
    name: "",
    number: "",
    description: "",
  });

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createAddress(formData));
    setShowAddForm(false);
    setShowTables(true);
  };

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleEditAddress = (event) => {
    event.preventDefault();
    const properties = {
      name: editFormData.name,
      number: editFormData.number,
      description: editFormData.description,
    };
    dispatch(updateAddress(addressToEdit.id, properties));
    setShowEditForm(false);
    setShowTables(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChangeEdit = (event) => {
    setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
  };

  const showAddAddressForm = () => {
    setShowAddForm(true);
    setShowTables(false);
  };

  const hideAddAddressForm = () => {
    setShowAddForm(false);
    setShowTables(true);
  };

  const showEditAddressForm = (address) => {
    setAddressToEdit(address);
    setEditFormData({
      name: address.name,
      number: address.number,
      description: address.description,
    });
    setShowEditForm(true);
    setShowTables(false);
  };

  const hideEditAddressForm = () => {
    setShowEditForm(false);
    setShowTables(true);
  };

  return (
    <AdressConteiner>
      <User />
      <AdressCard>
        <Button onClick={showAddAddressForm}>Agregar dirección</Button>
        {showAddForm && (
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre de la calle"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                variant="outlined"
              />
              <TextField
                label="Altura de la calle"
                value={formData.number}
                name="number"
                onChange={handleChange}
                type="number"
              />
              <TextField
                label="Código postal"
                value={formData.description}
                onChange={handleChange}
                name="description"
                type="text"
              />
              <Button variant="contained" type="submit">
                Agregar
              </Button>
              <Button variant="contained" onClick={hideAddAddressForm}>
                Cancelar
              </Button>
            </form>
          </div>
        )}
        {/* {/ Muestra una lista de las direcciones actuales /} */}
        {showTables && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Nombre de la calle</TableCell>
                <TableCell sx={{ color: "white" }}>Altura de la calle</TableCell>
                <TableCell sx={{ color: "white" }}>Código postal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses?.map((address) => (
                <TableRow key={address.id}>
                  <TableCell sx={{ color: "white" }}>{address.name}</TableCell>
                  <TableCell sx={{ color: "white" }}>{address.number}</TableCell>
                  <TableCell sx={{ color: "white" }}>{address.description}</TableCell>
                  <TableCell>
                    <Button
                       variant="contained"
                       color="secondary"
                       startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => showEditAddressForm(address)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {/* {/ Formulario para editar una dirección */}
        {showEditForm && (
          <div>
            <form>
              <TextField
                label="Calle"
                name="name"
                defaultValue={editFormData.name}
                onChange={handleChangeEdit}
              />
              <TextField
                label="Numero"
                name="number"
                defaultValue={editFormData.number}
                onChange={handleChangeEdit}
              />
              <TextField
                label="Descripcion"
                name="description"
                defaultValue={editFormData.description}
                onChange={handleChangeEdit}
              />
              <Button type="submit" onClick={handleEditAddress}>Guardar Edicion</Button>
              <Button onClick={hideEditAddressForm}>Cancelar</Button>
            </form>
          </div>
        )}
      </AdressCard>
    </AdressConteiner>
  );
};

export default Address;
