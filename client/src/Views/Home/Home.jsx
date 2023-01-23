import React, { useState } from "react";
import { useEffect } from "react";
import {
  ImageBackground,
  Background,
  ContainerFilter,
  SectionCards,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [actualFilter, setActualFilter] = useState("Todos los productos");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (
    <Background>
      <Header />
      <ImageBackground>
        <h1>Bienvenido a Happy Hour Helper</h1>
      </ImageBackground>
      <ContainerFilter>
        <Filters setActualFilter={setActualFilter}/>
        <SectionCards>
          <Section data={products} title={actualFilter}/>
          {/* {products &&
            products.map((d) => {
              return <Section key={d.name} title={d.title} data={d.data} />;
            })} */}
        </SectionCards>
      </ContainerFilter>
      <Footer />
    </Background>
  );
};

export default Home;
