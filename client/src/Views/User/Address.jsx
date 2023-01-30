import React, { useState, useRef } from "react";
import styled from "styled-components";
import User from "./User";
import axios from "axios";

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
  // Crea un estado para almacenar las direcciones
  const [addresses, setAddresses] = useState([]);
  // Crea un estado para mostrar y ocultar el formulario de agregar dirección
  const [showAddForm, setShowAddForm] = useState(false);
  // Crea un estado para mostrar y ocultar el formulario de editar dirección
  const [showEditForm, setShowEditForm] = useState(false);
  // Crea un estado para almacenar la dirección a editar
  const [addressToEdit, setAddressToEdit] = useState({});

  // Crea una referencia para los campos de entrada del formulario
  const nameRef = useRef();
  const numberRef = useRef();
  const descriptionRef = useRef();

  const handleAddAddress = async () => {
    // Obtiene los valores de los campos de entrada
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const description = descriptionRef.current.value;
    // Crea un objeto de dirección con los valores obtenidos
    const newAddress = { name, number, description };
    try {
      await axios.post("/address/postAddress", newAddress);
      const res = await axios.get("/address/getAddress");
      setAddresses(res.data);
      setShowAddForm(false);
      // Limpia los campos de entrada
      nameRef.current.value = "";
      numberRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      // Enviar la petición para eliminar la dirección al servidor utilizando axios
      await axios.delete(`/address/deleteAddress/${id}`);
      // Recuperar la lista actualizada de direcciones del servidor
      const res = await axios.get("/address/getAddress");
      // Actualizar el estado con la lista recuperada
      setAddresses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditAddress = async () => {
    // Obtiene los valores de los campos de entrada
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const description = descriptionRef.current.value;
    // Crea un objeto de dirección con los valores obtenidos
    const updatedAddress = { name, number, description };
    try {
      // Enviar la petición para actualizar la dirección al servidor utilizando axios
      await axios.put("/address/putAddress", updatedAddress);
      // Recuperar la lista actualizada de direcciones del servidor
      const res = await axios.get("/address/getAddress");
      // Actualizar el estado con la lista recuperada
      setAddresses(res.data);
      setShowEditForm(false);
      // Limpia los campos de entrada
      nameRef.current.value = "";
      numberRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveAddresses = async () => {
    try {
      // Enviar las direcciones actuales al servidor utilizando axios
      await axios.post("/address/postAddress", addresses);
      // Recuperar la lista actualizada de direcciones del servidor
      const res = await axios.get("/address/getAddress");
      // Actualizar el estado con la lista recuperada
      setAddresses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para mostrar el formulario de agregar dirección
  const showAddAddressForm = () => {
    setShowAddForm(true);
  };

  // Función para ocultar el formulario de agregar dirección
  const hideAddAddressForm = () => {
    setShowAddForm(false);
  };

  // Función para mostrar el formulario de editar dirección
  const showEditAddressForm = (address) => {
    setShowEditForm(true);
    setAddressToEdit(address);
    // Asigna los valores de la dirección seleccionada a los campos de entrada
    nameRef.current.value = address.name;
    numberRef.current.value = address.number;
    descriptionRef.current.value = address.description;
  };

  // Función para ocultar el formulario de editar dirección
  const hideEditAddressForm = () => {
    setShowEditForm(false);
    // Limpia los campos de entrada
    nameRef.current.value = "";
    numberRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <AdressConteiner>
      <User />
      <AdressCard>
        <AdressDetails>
          {/* Muestra un botón para agregar una nueva dirección */}
          <button onClick={showAddAddressForm}>Agregar dirección</button>
          {/* Formulario para agregar una nueva dirección  */}
          {showAddForm && (
            <div>
              <form>
                {/* Campos para ingresar la información de la dirección  */}
                <input type="text" placeholder="Calle" ref={nameRef}/>
                <input type="text" placeholder="Numero" ref={numberRef}/>
                <input type="text" placeholder="Descripcion" ref={descriptionRef}/>
                <button type="submit" onClick={handleAddAddress}>
                  Agregar
                </button>
                <button onClick={hideAddAddressForm}>Cancelar</button>
              </form>
            </div>
          )}
          {/* Muestra una lista de las direcciones actuales  */}
          <ul>
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
          </ul>
          {/* Formulario para editar una dirección  */}
          {showEditForm && (
            <div>
              <form>
                {/* Campos para ingresar la información de la dirección */}
                <input type="text" placeholder="Calle" ref={nameRef}/>
                <input type="text" placeholder="Numero" ref={numberRef}/>
                <input type="text" placeholder="Descripcion" ref={descriptionRef}/>
                <button type="submit" onClick={handleEditAddress}>
                  Guardar cambios
                </button>
                <button onClick={hideEditAddressForm}>Cancelar</button>
              </form>
            </div>
          )}
        </AdressDetails>
        <button onClick={handleSaveAddresses}>Guardar direcciones</button>
      </AdressCard>
    </AdressConteiner>
  );
};

export default Address;
