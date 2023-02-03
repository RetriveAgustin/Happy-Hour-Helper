import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Footer } from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import { getAllProducts } from "../../redux/actions/actions";
import GeneralCategories from "./generalCategories/GeneralCategories";
import FilteredCategory from "./filteredCategory/FilteredCategory";
import LowerFilters from "./LowerFilters/LowerFilters";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.root.categories);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.root.products);

  const [Checked, setChecked] = useState([]);

  var LowFilters = products?.filter(
    (prd) =>
      Checked.includes(prd.Sub_categories[0].id) ||
      Checked.includes(prd.Brands[0].id)
  );

  const [render, setRender] = useState({
    filtered: false,
    categoryId: "",
  });

  return (
    <>
      <div className={styles.background}>
        <Filters
          setRender={setRender}
          render={render}
          Checked={Checked}
          setChecked={setChecked}
        />
        {/* SECCIONES DEL HOME */}
        {LowFilters.length ? (
          <LowerFilters LowFilters={LowFilters} />
        ) : !render.filtered ? (
          <GeneralCategories categories={categories} products={products} />
        ) : (
          <FilteredCategory categoryId={render.categoryId} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
