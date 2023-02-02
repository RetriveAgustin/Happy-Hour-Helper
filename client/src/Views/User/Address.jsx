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
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AdressCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: auto;
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showTables, setShowTables] = useState(true);
  const [addressToEdit, setAddressToEdit] = useState({});
  const [formData, setFormData] = useState({
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
    dispatch(updateAddress(addressToEdit.id, updateAddress));
    setShowEditForm(false);
    setShowTables(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
                label="Calle"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
              />
              <TextField
                label="Numero"
                value={formData.number}
                name="number"
                onChange={handleChange}
                type="number"
              />
              <TextField
                label="Descripcion"
                value={formData.description}
                onChange={handleChange}
                name="description"
                type="text"
              />
              <Button variant="outlined" type="submit">
                Agregar
              </Button>
              <Button variant="outlined" onClick={hideAddAddressForm}>
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
                <TableCell>Calle</TableCell>
                <TableCell>Numero</TableCell>
                <TableCell>Descripcion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses.map((address) => (
                <TableRow key={address.id}>
                  <TableCell>{address.name}</TableCell>
                  <TableCell>{address.number}</TableCell>
                  <TableCell>{address.description}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="outlined"
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
            <form onSubmit={handleEditAddress}>
              <TextField
                label="Calle"
                name="name"
                defaultValue={addressToEdit.name}
                required
              />
              <TextField
                label="Numero"
                name="number"
                defaultValue={addressToEdit.number}
                required
              />
              <TextField
                label="Descripcion"
                name="description"
                defaultValue={addressToEdit.description}
                required
              />
              <Button type="submit">Guardar</Button>
              <Button onClick={hideEditAddressForm}>Cancelar</Button>
            </form>
          </div>
        )}
      </AdressCard>
    </AdressConteiner>
  );
};

export default Address;
