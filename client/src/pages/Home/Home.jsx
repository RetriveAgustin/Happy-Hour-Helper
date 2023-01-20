import React from "react";
import { useState } from "react";
import { Card } from "../../components/Card";
import { CardContainer } from "../../components/SectionContainer/index.styles";
import { Background, H1, CategorySection, Category, CategoryContainer, SubCategoryContainer, SubCategory } from "./Home.styles";

const Home = () => {

  const [show, setShow] = useState({});
  const categories = [
    {
      name: "Marca",
      subcategories: ["Branca", "Amstel", "Smirnoff"]
    },
    {
      name: "Categoria",
      subcategories: ["Vinos", "Cervezas", "Destilados"]
    },
    {
      name: "Precio",
      subcategories: ["Mayor", "Menor", "Precio"]
    }
  ];

  return (
    <Background>
      <H1>NavBar</H1>
      <CategorySection>
        <CategoryContainer>
          {categories.map(category => (
            <div key={category.name}>
              <Category onClick={() => setShow({ ...show, [category.name]: !show[category.name] })}>
                {category.name}
              </Category>
              <SubCategoryContainer show={show[category.name]}>
                {category.subcategories.map(subcategory => (
                  <SubCategory key={subcategory}>{subcategory}</SubCategory>
                ))}
              </SubCategoryContainer>
            </div>
          ))}
        </CategoryContainer>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </CategorySection>
    </Background>
  );
};

export default Home;


    
    
    
    