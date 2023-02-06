import React from "react";
import styled from "styled-components";

function CardInfo({ props }) {
  const InfoContainer = styled.div`
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 62%,
      rgba(242, 243, 244, 1) 100%
    );
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;

    & p {
      margin: 0.3rem 0;
      color: #6d6d6d;
    }
  `;
  if (props.last_name && props.first_name && props.email) {
    return (
      <>
        <InfoContainer>
          <b>{`ID: ${props.id}`}</b>
          <p>{`Last Name: ${props.last_name}`}</p>
          <p>{`First Name: ${props.first_name}`}</p>
          <p>{`E-mail: ${props.email}`}</p>
        </InfoContainer>
      </>
    );
  }
  if (props.name && props.brand) {
    return (
      <>
        <InfoContainer>
          <b>{`ID: ${props.id}`}</b>
          <p>{`Name: ${props.name}`}</p>
          <p>{`Brand: ${props.brand}`}</p>
          <p>{`Price: ${props.price}`}</p>
        </InfoContainer>
      </>
    );
  }
}

export default CardInfo;
