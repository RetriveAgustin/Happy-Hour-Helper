import React, { useState } from "react";
import { useEffect } from "react";
import {
  ImageBackground,
  Background,
  ContainerFilter,
  SectionCards,
} from "./Home.styles";

import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  const [data, setData] = useState();

  // const getData = async () => {
  //   setTimeout(() => {
  //     setData(response);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <Background>
      <Header />
      <ImageBackground>
        <h1>Bienvenido a Happy Hour Helper</h1>
      </ImageBackground>
      <ContainerFilter>
        <Filters />
        <SectionCards>
          {data &&
            data.map((d) => {
              return <Section key={d.title} title={d.title} data={d.data} />;
            })}
        </SectionCards>
      </ContainerFilter>
      <Footer />
    </Background>
  );
};

export default Home;
