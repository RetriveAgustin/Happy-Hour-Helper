import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
  // getAllProductsByCategory,
} from "../../redux/actions/actions";
import { Filt, FilterTitle, EachFilter, Types } from "./Filters.styles";

export default function Filters({setActualFilter}) {
  const dispatch = useDispatch();

  
  // const [filterByCategory, setFilterByCategory] = useState();
  // const [filterBySubCategory, setFilterBySubCategory] = useState();
  // const [filterByBrand, setFilterByBrand] = useState();

  // console.log(filters);

  const categories = useSelector((state) => state.categories);
  const subCategories = useSelector((state) => state.subCategories);
  const brands = useSelector((state) => state.brands);

  const handleFilterByCategory = (e) => {
    // dispatch(getAllProductsByCategory(e.target.value))
    setActualFilter(e.target.value)
  };

  const handleFilterBySubCategory = (e) => {
    setActualFilter(e.target.value)
  };

  const handleFilterByBrand = (e) => {
    setActualFilter(e.target.value)
  };

  // const handleFilters = (e, type) => {
  //   console.log(e.target.value, type);
  //   setFilters({
  //     ...filters,
  //     [type]: e.target.value
  //   })
  // };

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
  }, [dispatch]);

  return (
    <Filt>
      <FilterTitle>Filtrá tu busqueda</FilterTitle>
      <div>
        <Types>
          <EachFilter>Category</EachFilter>
          <select onChange={handleFilterByCategory}>
            <option defaultValue={null}>Categorías</option>
            {categories &&
              categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            {/* 
            <option>Beer</option>
            <option>Fernet</option>
            <option>Wine</option>
            <option>Whiskies</option> */}
          </select>
        </Types>
        <Types>
          <EachFilter>Subcategory</EachFilter>
          <select onChange={handleFilterBySubCategory}>
            <option defaultValue={null}>SubCategorías</option>
            {subCategories &&
              subCategories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            {/* <option>OptionOne</option>
            <option>OptionTwo</option>
            <option>OptionThree</option>
            <option>OptionFour</option> */}
          </select>
        </Types>
        <Types>
          <EachFilter>Brand </EachFilter>
          <select onChange={handleFilterByBrand}>
            <option defaultValue={null}>Marcas</option>
            {brands &&
              brands.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            {/* <option>OptionOne</option>
            <option>OptionTwo</option>
            <option>OptionThree</option>
            <option>OptionFour</option> */}
          </select>
        </Types>
      </div>
    </Filt>
  );
}
