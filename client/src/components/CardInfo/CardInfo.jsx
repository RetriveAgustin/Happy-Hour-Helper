import React from "react";
import { InfoContainer } from "./CardInfo.styles";

function CardInfo({ props }) {

  if (props.last_name && props.first_name && props.email) {
    return (
      <>
        <InfoContainer>
          <b>{`ID: ${props.id}`}</b>
          <p>{`Name ${props.name}`}</p>
          <p>{`First Name: ${props.first_name}`}</p>
          <p>{`E-mail: ${props.email}`}</p>
        </InfoContainer>
      </>
    );
  }
  if (props.name && props.Brands) {
    return (
      <>
        <InfoContainer>
          <b>{`ID: ${props.id}`}</b>
          <p>{`Name: ${props.name}`}</p>
          <p>{`Brand: ${props.Brands.map((b) => b.name)}`}</p>
          <p>{`Price: ${props.price}`}</p>
        </InfoContainer>
      </>
    );
  }

  if (props.name && props.expiration_date) {
    return (
      <>
        <InfoContainer>
          <b>{`ID: ${props.id}`}</b>
          <p>{`Name: ${props.name}`}</p>
          <p>{`Description: ${props.description}`}</p>
          <p>{`Price: ${props.price}`}</p>
          <p>{`Initial date: ${props.initial_date}`}</p>
          <p>{`Expiration date: ${props.expiration_date}`}</p>
        </InfoContainer>
      </>
    );
  }
}

export default CardInfo;
