import React, { useState } from "react";
import { useEffect } from "react";
import { ImageBackground, Background } from "./index.styles";
import response from "./data.json";

import { Header } from "../../components/Header";
import { SectionContainer } from "../../components/SectionContainer";

export const LandingScreen = () => {
  const [data, setData] = useState();
  const getData = async () => {
    setTimeout(() => {
      setData(response);
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Background>
      <Header />
      <ImageBackground>
        <h1>Bienvenido a Happy Hour Helper</h1>
      </ImageBackground>
      {data &&
        data.map(d => {
          return <SectionContainer key={d.title} title={d.title} data={d.data}/>;
        })}
    </Background>
  );
};
