import React from "react";
import styled from "styled-components";

function DataInfoCard({ props }) {
  const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    justify-content: space-around;
    align-items: center;
    color: black;
    border: 2px solid black;
    width: 100%;
  `;

  if (props.last_name && props.first_name && props.email) {
    return (
      <>
        <InfoContainer>
          <b>{`${props.id}`}</b>
          <p>{`${props.first_name}`}</p>
          <p>{`${props.last_name}`}</p>
          <p>{`${props.email}`}</p>
        </InfoContainer>
      </>
    );
  }
  if (props.name && props.brand) {
    return (
      <>
        <InfoContainer>
          <b>{`${props.id}`}</b>
          <p>{`${props.name}`}</p>
          <p>{`${props.brand}`}</p>
          <p>{`${props.price}`}</p>
        </InfoContainer>
      </>
    );
  }
}

export default DataInfoCard;
