import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import {
  getPaymentMethods,
  postPayment,
  deletePayment,
  putPayment,
  // restorePayment,
} from "../../redux/actions/actions";
// import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";



const LayoutUserContainer = styled.div`
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65%;
  width: auto;
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const Pago = () => {
  const dispatch = useDispatch();
  let paymentMethods = useSelector((state) => state.root.paymentMethods);
  const [formOpen, setFormOpen] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [paymentToEdit, setPaymentToEdit] = useState({});
  const [showTables, setShowTables] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    expiration_date: "",
    propetary_name: "",
    propetary_last_name: "",
    user_id: "",
  });
  const [editFormData, setEditFormData] = useState({
    name: "",
    code: "",
    expiration_date: "",
    propetary_name: "",
    propetary_last_name: "",
  });

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChangeEdit = (event) => {
    setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch the postPayment action with the form data
    dispatch(postPayment(formData));
    setFormOpen(false);
    // added this line to reset the formData after submit
    setFormData({
      name: "",
      code: "",
      expiration_date: "",
      propetary_name: "",
      propetary_last_name: "",
    });
    setShowTables(true);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const properties = {
      name: editFormData.name,
      code: editFormData.code,
      expiration_date: editFormData.expiration_date,
      propetary_name: editFormData.propetary_name,
      propetary_last_name: editFormData.propetary_last_name,
    };
    // Dispatch the putPayment action with the id and updated data
    dispatch(putPayment(paymentToEdit.id, properties));
    setShowEditForm(false);
    // added this line to reset the formData after submit
    setShowTables(true);

  };

  const handleEditForm = (payment) => {
    setPaymentToEdit(payment)
    setEditFormData({
      name: payment.name,
      code: payment.code,
      expiration_date: payment.expiration_date,
      propetary_name: payment.propetary_name,
      propetary_last_name: payment.propetary_last_name,
    });
    setShowEditForm(true);
    setShowTables(false);
  };

  const handleDelete = (id) => {
    // Dispatch the deletePayment action with the id
    dispatch(deletePayment(id));
  };

 

  function formatExpirationDate(expirationDate) {
    const date = new Date(expirationDate);
    date.setMonth(date.getMonth() + 1);
    return date.toLocaleDateString("en-ES", {
      year: "numeric",
      month: "2-digit",
    });
  }

  const handleCloseForm = () => {
    setFormOpen(false);
    setShowTables(true);
  };

  const handleOpenForm = () => {
    setFormOpen(true);
    setShowTables(false);
  };


  const hideEditFormPayment = () => {
    setShowEditForm(false);
    setShowTables(true)
  }

  return (
    <LayoutUserContainer>
      <User />
      <UserCard>
        <form onSubmit={handleSubmit}>
          {formOpen ? (
            <>
              <TextField
                label="Tarjeta"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Code"
                type="number"
                name="code"
                value={formData.code}
                onChange={handleChange}
              />
              <TextField
                type="month"
                name="expiration_date"
                value={formData.expiration_date}
                onChange={handleChange}
              />
              <TextField
                label="Nombre"
                type="text"
                name="propetary_name"
                value={formData.propetary_name}
                onChange={handleChange}
              />
              <TextField
                label="Apellido"
                type="text"
                name="propetary_last_name"
                value={formData.propetary_last_name}
                onChange={handleChange}
              />
              
              <Button type="submit">Guardar Nuevo</Button>
              <Button onClick={handleCloseForm}>Cancelar</Button>
            </>
          ) : (
            <Button type="button" variant="outlined" onClick={handleOpenForm}>
              Añadir Tarjeta
            </Button>
          )}
        </form>
        {showTables && (
          <Table>
            <TableHead>
              <TableRow sx={{ color: "white" }}>
                <TableCell sx={{ color: "white" }}>Tarjeta</TableCell>
                <TableCell sx={{ color: "white" }}>Codigo </TableCell>
                <TableCell sx={{ color: "white" }}>Fecha Expiracion</TableCell>
                <TableCell sx={{ color: "white" }}>Nombre</TableCell>
                <TableCell sx={{ color: "white" }}>Apellido</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentMethods?.map((paymentMethod) => (
                <TableRow key={paymentMethod.id}>
                  <TableCell sx={{ color: "white" }}>
                    {paymentMethod.name}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {paymentMethod.code}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {formatExpirationDate(paymentMethod.expiration_date)}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {paymentMethod.propetary_name}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {paymentMethod.propetary_last_name}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditForm(paymentMethod)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(paymentMethod.id)}
                    >
                      Borrar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {showEditForm && (
          <div>
            <form onSubmit={handleEdit}>
            <TextField
                sx={{ color: "white" }}
                label="Tarjeta"
                variant="outlined"
                name="name"
                defaultValue={paymentToEdit.name}
                onChange={handleChangeEdit}
                
              />
              <TextField
                label="Code"
                type="number"
                name="code"
                defaultValue={paymentToEdit.code}
                onChange={handleChangeEdit}
              />
              <TextField
                type="month"
                name="expiration_date"
                defaultValue={paymentToEdit.expiration_date}
                onChange={handleChangeEdit}
              />
              <TextField
                label="First Name"
                type="text"
                name="propetary_name"
                defaultValue={paymentToEdit.propetary_name}
                onChange={handleChangeEdit}
              />
              <TextField
                label="Last Name"
                type="text"
                name="propetary_last_name"
                defaultValue={paymentToEdit.propetary_last_name}
                onChange={handleChangeEdit}
              />
              <Button type="submit">Guardar Edit</Button>
              <Button onClick={hideEditFormPayment}>Cancelar</Button>
            </form>
          </div>
        )}
      </UserCard>
    </LayoutUserContainer>
  );
};

export default Pago;
