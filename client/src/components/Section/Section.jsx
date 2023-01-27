import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Container, CardContainer, H1 } from "./Section.styles";

const Section = ({ title, data }) => {

  return (
    <Container>
      <H1>{title}</H1>
      <CardContainer>
        {
          data && data.map((product) => <Card key={product.id} product={product}/>)
        }
      </CardContainer>
    </Container>
  );
};

export default Section;
