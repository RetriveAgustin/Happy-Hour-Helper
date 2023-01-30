import React, { useState } from "react";
import styled from "styled-components";
import User from "./User";
import Button from "@mui/material/Button";
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
  padding: 20px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const ProfilePicture = styled.img`
  width: 30%;
  padding: 2.8em;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10em;
`;

const Name = styled.p`
  font-size: 1.3em;
  color: #ccc;
`;

const LastName = styled.p`
  font-size: 1.3em;
  color: #ccc;
`;

const Email = styled.p`
  font-size: 1.3em;
  color: #ccc;
`;

const Password = styled.p`
  font-size: 1.3em;
  color: #ccc;
`;

const user = {
  id: 1,
  name: "Lucas",
  lastName: "Ruiz",
  email: "lucasruiz@example.com",
  password: "123456",
};

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [editing, setEditing] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleEdit = (detail) => {
    setEditing({ ...editing, [detail]: true });
  };

  const handleSave = (detail, value) => {
    if (detail === "name") setName(value);
    if (detail === "lastName") setLastName(value);
    if (detail === "email") setEmail(value);
    if (detail === "password") setPassword(value);
    setEditing({ ...editing, [detail]: false });
  };




  return (
    <LayoutUserContainer>
    <User />
    <UserCard>
      <ProfilePicture
        src="https://imgs.search.brave.com/g4ZFZq9Aex8IsaczP7FUj-PG_ucqW80TEPMIYDGA9ns/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlLzdi/LzQzLzhlN2I0MzNk/YTIyNDI5OTQwZGVh/ZTYxN2ViODRiOGVk/LmpwZw"
        alt="user-profile"
      />
      <UserDetails>
        <Name>
          {editing.name ? (
            <>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <Button variant="outlined" onClick={() => handleSave("name", name)}>Guardar</Button>
            </>
          ) : (
            <>
              Nombre: {name} <Button variant="outlined" onClick={() => handleEdit("name")}>Editar</Button>
            </>
          )}
        </Name>
        <LastName>
          {editing.lastName ? (
              <>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <Button variant="outlined" onClick={() => handleSave("lastName", lastName)}>Guardar</Button>
              </>
            ) : (
                <>
                Apellido:  {lastName} <Button variant="outlined" onClick={() => handleEdit("lastName")}>Editar</Button>
              </>
            )}
          </LastName>
          <Email>
            {editing.email ? (
              <>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button variant="outlined" onClick={() => handleSave("email", email)}>Guardar</Button>
              </>
            ) : (
              <>
                  Email: {email} <Button variant="outlined" onClick={() => handleEdit("email")}>Editar</Button>
              </>
            )}
          </Email>
          <Password>
            {editing.password ? (
              <>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="outlined" onClick={() => handleSave("password", password)}>Guardar</Button>
                <Button variant="outlined" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                </Button>
              </>
            ) : (
              <>
                Password: ****** <Button variant="outlined" onClick={() => handleEdit("password")}>Editar</Button>
              </> 
            )}
          </Password>
        </UserDetails>
      </UserCard>
    </LayoutUserContainer>
  );
};


export default Settings;
