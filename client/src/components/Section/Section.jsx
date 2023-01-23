import React from "react";
import { Card } from "../Card/Card";
import { Container, CardContainer, H1 } from "./Section.styles";

export const Section = ({ title, data }) => {
  return (
    <Container>
      <H1>{title}</H1>
      <CardContainer>
        {
          data && data.map((d) => <Card key={d.id} name={d.name} img={d.img} price={d.price}/>)
        }
      </CardContainer>
    </Container>
  );
};
