import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from './User';
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
import DeleteIcon from '@mui/icons-material/Delete';
import styled  from 'styled-components';
import {grey} from '@mui/material/colors'

const LayoutUserContainer = styled.div`
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: auto;
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const color = grey[500];

const Pago = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [showTables, setShowTables] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    expiration_date: "",
    propetary_name: "",
    propetary_last_name: "",
  });
  const paymentMethods = useSelector((state) => state.paymentMethods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
    
    const handleEdit = (id, data) => {
    // Dispatch the putPayment action with the id and updated data
    dispatch(putPayment(id, data));
    setFormOpen(false);
    // added this line to reset the formData after submit
    setFormData({
    name: "",
    code: "",
    expiration_date: "",
    propetary_name: "",
    propetary_last_name: "",
    });
    setShowTables(true)
    };
  const handleDelete = (id) => {
    // Dispatch the deletePayment action with the id
    dispatch(deletePayment(id));
  };

  // const handleRestore = (id) => {
  //   // Dispatch the restorePayment action with the id
  //   dispatch(restorePayment(id));
  // };

  const handleSelectedId = (event) => {
    setSelectedId(event.target.value);
  };

  function formatExpirationDate(expirationDate) {
    const date = new Date(expirationDate);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "2-digit",
    });
  }

  const handleEditClick = (id, data) => {
    setSelectedId(id);
    setFormData(data);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setShowTables(true)
  };

  const handleOpenForm = () => {
    setFormOpen(true);
    setShowTables(false)
  };

  return (
    <LayoutUserContainer>
    <User   />
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
              label="First Name"
              type="text"
              name="propetary_name"
              value={formData.propetary_name}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              type="text"
              name="propetary_last_name"
              value={formData.propetary_last_name}
              onChange={handleChange}
            />
            <Button
              type="submit"
              onClick={() => handleEdit(selectedId, formData)}
            >
              Save Edit
            </Button>
            <Button type="submit" >Guardar Nuevo</Button>
            <Button onClick={handleCloseForm}>Cancel</Button>
          </>
        ) : (
          <Button type="button" variant="outlined"   onClick={handleOpenForm}>
            Add Payment Method
          </Button>
        )}
      </form>
      {showTables && (
      <Table> 
        <TableHead>
          <TableRow>
            <TableCell>Tarjeta</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell>Proprietary Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentMethods.map((paymentMethod) => (
            <TableRow key={paymentMethod.id}>
              <TableCell>{paymentMethod.name}</TableCell>
              <TableCell>{paymentMethod.code}</TableCell>
              <TableCell>
                {formatExpirationDate(paymentMethod.expiration_date)}
              </TableCell>
              <TableCell>
                {paymentMethod.propetary_name}{" "}
                {paymentMethod.propetary_last_name}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleEditClick(paymentMethod.id, paymentMethod)
                  }
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon/>}
                  onClick={() => handleDelete(paymentMethod.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>  
      </Table>
      )}
      </UserCard>
    </LayoutUserContainer>
  );
};

export default Pago;
