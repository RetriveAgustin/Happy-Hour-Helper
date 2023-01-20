import React from "react";
import { Container, CardContainer, H1 } from "./index.styles";
import { Card } from "../Card";

export const SectionContainer = ({ title, data }) => {
  return (
    <Container>
      <H1>{ title }</H1>
      <CardContainer>
        {
          data && data.map(d => (
            <Card key={d.id}/>
          ))
        }
      </CardContainer>
    </Container>
  );
};
