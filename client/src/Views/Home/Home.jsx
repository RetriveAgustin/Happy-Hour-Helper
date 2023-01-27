import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";
import Category from "../../components/Filters/Category";
import GeneralCategories from "./generalCategories/GeneralCategories";
import FilteredCategory from "./filteredCategory/FilteredCategory";

const Home = () => {
  const dispatch = useDispatch(); 
  const categories = useSelector(state => state.categories);

  const [render, setRender] = useState({
    filtered: false,
    categoryId: ""
  })

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  
  return (
    <>
      <div className={styles.background}>
      <Header />
      <Filters />
      {/* SECCIONES DEL HOME */}
      {
        !render.filtered ?
          <GeneralCategories categories={categories} />
        :
          <FilteredCategory categories={categories} categoryId={render.categoryId} />
      }
      </div>
      <Footer />
    </>
  )
  
  
};

export default Home;
