import React from "react";
import styled from "styled-components";
import DataInfoCard from "./DataInfoCard";

function CardsInfo({ data }) {
  const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <CardsContainer>
      {data.map((e) => (
        <DataInfoCard props={e} />
      ))}
    </CardsContainer>
  );
}

export default CardsInfo;
