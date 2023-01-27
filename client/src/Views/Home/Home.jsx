import React, { useState } from "react";
import { useEffect } from "react";
import {
  Background,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";
import Category from "../../components/Filters/Category";

const Home = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  
  return (
    <>
      <Header />
    <Background>
      <div style={{color: 'white', marginTop: '6.5rem'}}>Hola Mundo</div>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2><h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2><h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2><h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
      <h2>Hola mundo</h2>
    </Background>
    <Footer />
    </>
  )
  
  
};

export default Home;
