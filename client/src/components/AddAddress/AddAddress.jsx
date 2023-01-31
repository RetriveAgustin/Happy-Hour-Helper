import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function AddAddres() {
  const { userCredentials } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userCredentials)
      setAddress({ ...address, user_id: userCredentials.uid });
  }, [userCredentials]);

  const [success, setSuccess] = useState("");
  const [address, setAddress] = useState({
    name: "",
    number: "",
    description: "",
    user_id: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3001/address/postAddress", address)
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
        <label>Nombre de la calle</label>
        <input type={"text"} name="name" onChange={handleChange}></input>

        <label>Altura de la calle</label>
        <input type={"text"} name="number" onChange={handleChange}></input>

        <label>Código postal</label>
        <input type={"text"} name="description" onChange={handleChange}></input>

        <button>Crear</button>
      </form>
    </div>
  );
}
