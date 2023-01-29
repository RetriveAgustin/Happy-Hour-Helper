import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";
import GeneralCategories from "./generalCategories/GeneralCategories";
import FilteredCategory from "./filteredCategory/FilteredCategory";
import LowerFilters from "./LowerFilters/LowerFilters";

const Home = () => {
  const dispatch = useDispatch(); 
  const categories = useSelector(state => state.categories);
  const lowFilters = useSelector(state => state.filteredProducts);

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
      <Filters setRender={setRender} render={render} />
      {/* SECCIONES DEL HOME */}
      {
        lowFilters.length ? 
          <LowerFilters />
        :
        !render.filtered ?
          <GeneralCategories categories={categories} products={products} />
        :
          <FilteredCategory categoryId={render.categoryId} />
      }
      </div>
      <Footer />
    </>
  )

  
};

export default Home;
