import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function AddPaymentMethod() {
  const { userCredentials } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userCredentials)
      setPayment({ ...payment, user_id: userCredentials.uid });
  }, [userCredentials]);

  const [success, setSuccess] = useState("");
  const [payment, setPayment] = useState({
    name: "",
    code: "",
    expiration_date: "",
    propetary_name: "",
    propetary_last_name: "",
    user_id: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3001/payment-methods/postPayment", payment)
        .then((r) => {
          setSuccess(r);
        })
        .then((r) => {
          setTimeout(() => {
            navigate("/confirm");
          }, 2000);
        });
    } catch (error) {}
  };

  return (
    <div>
      {success[0] && <label>{success}</label>}
      {success[0] && <label>Volviendo a confirmación de compra...</label>}
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type={"text"} name="name" onChange={handleChange}></input>

        <label>Código</label>
        <input type={"number"} name="code" onChange={handleChange}></input>

        <label>Fecha de expiración</label>
        <input
          type={"date"}
          name="expiration_date"
          onChange={handleChange}
        ></input>

        <label>Nombre del propietario</label>
        <input
          type={"text"}
          name="propetary_name"
          onChange={handleChange}
        ></input>

        <label>Apellido del propietario</label>
        <input
          type={"text"}
          name="propetary_last_name"
          onChange={handleChange}
        ></input>

        <button>Crear</button>
      </form>
    </div>
  );
}
