import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Label, Container, Input, Title, Form } from "./index.styles";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const {signup} = useAuth()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData.email, formData.password)
  };

  return (
    <Container>
      <Title>Crear Usuario</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          ID:
          <Input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Nombre:
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Apellido:
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Contraseña:
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Label>
        <div>
          <button type="submit">Crear</button>
        </div>
      </Form>
    </Container>
  );
};

export default CreateUser;
