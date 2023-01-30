import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.js";
import {
  Button,
  Form,
  Input,
  Label,
  Principal,
  Title,
  Wrapper,
  Question,
} from "./Register.styled.js";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(user.email, user.password);
      const userCredentials = result.user;
      console.log(userCredentials);
      try {
        axios
          .post("http://localhost:3001/users/registerUser", {
            id: userCredentials.uid,
            name: user.name,
            lastname: user.lastname,
            mail: user.email,
            password: user.password,
            created_in_google:
              userCredentials.providerData[0].providerId === "password"
                ? false
                : true,
            is_admin: false,
          })
          .then((r) => {
            console.log(r);
            navigate("/login");
          })
          .catch(console.log);
      } catch (e) {
        console.log(e);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Principal>
      <Wrapper>
        <Title>Register</Title>
        {error && <Label>{error}</Label>}
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="name"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          ></Input>

          <Label htmlFor="lastname">Apellido</Label>
          <Input
            type="lastname"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
          ></Input>

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="youremail@mail.com"
            onChange={handleChange}
          ></Input>

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
          ></Input>

          <Button disabled={user.email[0] && user.password[0] ? false : true}>
            Register
          </Button>
        </Form>
        <Link to={"/login"}>
          <Question>
            Already have an account?<u> Login here</u>
          </Question>
        </Link>
      </Wrapper>
    </Principal>
  );
}
