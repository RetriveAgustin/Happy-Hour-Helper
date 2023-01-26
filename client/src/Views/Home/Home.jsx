import React, { useState } from "react";
import { useEffect } from "react";
import {
  ImageBackground,
  Background,
  ContainerFilter,
  SectionCards,
  TextContent,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";

const Home = ({ cart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [actualFilter, setActualFilter] = useState("Todos los productos");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Background>
      <Header cart={cart}/>
      {/* <TextContent>
        <h1>Bienvenido a Happy Hour Helper</h1>
      </TextContent>
      <ImageBackground /> */}
      <ContainerFilter>
        <Filters setActualFilter={setActualFilter} />
        <SectionCards>
          <Section data={products} title={actualFilter}/>
        </SectionCards>
      </ContainerFilter>
      <Footer />
    </Background>
  );
};

export default Home;
