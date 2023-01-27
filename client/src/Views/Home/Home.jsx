import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
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
      <div className={styles.background}>
      <Header />
      <Filters />
      
      </div>
      <Footer />
    </>
  )
  
  
};

export default Home;
