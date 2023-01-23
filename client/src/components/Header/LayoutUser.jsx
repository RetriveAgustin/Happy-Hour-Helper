import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  width: 50%;
  height: 50%;
  padding: 80px;
  background-color: #52373c;
  box-shadow: 0px 0px 10px 0px #080000;
`;

const ProfilePicture = styled.img`
  width: 30%;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 10em;
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

const Address = styled.p`
  font-size: 1.3em;
  color: #ccc;
`;

const FavoriteButton = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 20px;
  &:hover {
    background-color: #d32f2f;
    cursor: pointer;
  }
`;



const user = {
  id: 1,
  name: "Lucas",
  lastName: "Ruiz",
  email: "lucasruiz@example.com",
  address: "123 Main St, Anytown USA",
};

const LayoutUser = () => {
  let navigate = useNavigate();
  return (
    <LayoutUserContainer>
      <UserCard>
        <ProfilePicture
          src="https://imgs.search.brave.com/g4ZFZq9Aex8IsaczP7FUj-PG_ucqW80TEPMIYDGA9ns/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlLzdi/LzQzLzhlN2I0MzNk/YTIyNDI5OTQwZGVh/ZTYxN2ViODRiOGVk/LmpwZw"
          alt="user-profile"
          />
        <UserDetails>
          <Name>Nombre: {user.name}</Name>
          <LastName>Apellido: {user.lastName}</LastName>
          <Email>Email: {user.email}</Email>
          <Address>Direccion: {user.address}</Address>
          <FavoriteButton onClick={() => navigate("/favorites")}>
            Favorites
          </FavoriteButton>
        </UserDetails>
      </UserCard>
    </LayoutUserContainer>
  );
};

export default LayoutUser;
