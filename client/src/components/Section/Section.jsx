import React from "react";
import { Container, CardContainer, H1 } from "./Section.styles";

export const Section = ({ title, data }) => {
  return (
    <Container>
      <H1>{ title }</H1>
      <CardContainer>
      </CardContainer>
    </Container>
  );
};
