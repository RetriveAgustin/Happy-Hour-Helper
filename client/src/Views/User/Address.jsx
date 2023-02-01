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
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const AdressDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10em;
`;

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
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
  };

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleEditAddress = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const description = event.target.description.value;
    const updatedAddress = { name, number, description };
    dispatch(updateAddress(addressToEdit.id, updatedAddress));
    setShowEditForm(false);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const showAddAddressForm = () => {
    setShowAddForm(true);
  };

  const hideAddAddressForm = () => {
    setShowAddForm(false);
  };

  const showEditAddressForm = (address) => {
    setAddressToEdit(address);
    setShowEditForm(true);
  };

  const hideEditAddressForm = () => {
    setShowEditForm(false);
  };

  return (
    <AdressConteiner>
      <User />
      <AdressCard>
        <AdressDetails>
          {/* Muestra un botón para agregar una nueva dirección  */}
          <button onClick={showAddAddressForm}>Agregar dirección</button>
          {/* {/ Formulario para agregar una nueva dirección /} */}
          {showAddForm && (
            <div>
              <form onSubmit={handleSubmit}>
                {/* {/ Campos para ingresar la información de la dirección /} */}
                <input
                  type="text"
                  placeholder="Calle"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  value={formData.number}
                  placeholder="Numero"
                  name="number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Descripcion"
                  value={formData.description}
                  onChange={handleChange}
                  name="description"
                  required
                />
                <button type="submit">Agregar</button>
                <button onClick={hideAddAddressForm}>Cancelar</button>
              </form>
            </div>
          )}
          {/* {/ Muestra una lista de las direcciones actuales /} */}
          {/* <ul>
            {addresses.map((address) => (
              <li key={address.id}>
                {address.name} {address.number} {address.description}
                <button onClick={() => handleDeleteAddress(address.id)}>
                  Eliminar
                </button>
                <button onClick={() => showEditAddressForm(address)}>
                  Editar
                </button>
              </li>
            ))}
          </ul> */}
          {/* {/ Formulario para editar una dirección */}
          {showEditForm && (
            <div>
              <form onSubmit={handleEditAddress}>
                {/* Campos para ingresar la información de la dirección  */}
                <input
                  type="text"
                  placeholder="Calle"
                  name="name"
                  defaultValue={addressToEdit.name}
                  required
                />
                <input
                  type="text"
                  placeholder="Numero"
                  name="number"
                  defaultValue={addressToEdit.number}
                  required
                />
                <input
                  type="text"
                  placeholder="Descripcion"
                  name="description"
                  defaultValue={addressToEdit.description}
                  required
                />
                <button type="submit">Guardar</button>
                <button onClick={hideEditAddressForm}>Cancelar</button>
              </form>
            </div>
          )}
        </AdressDetails>
      </AdressCard>
    </AdressConteiner>
  );
};

export default Address;
