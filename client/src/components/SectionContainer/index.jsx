import React from "react";
import { Container, CardContainer, H1 } from "./index.styles";
import { Card } from "../Card";

export const SectionContainer = () => {
  return (
    <Container>
      <H1>Categoria</H1>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  );
};
