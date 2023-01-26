import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
  // getAllProductsByCategory,
} from "../../redux/actions/actions";
import { Filt, FilterTitle, EachFilter, Types, InputsMaxMin } from "./Filters.styles";

export default function Filters({ setActualFilter, setFilter }) {
  const dispatch = useDispatch();

  // const [filterByCategory, setFilterByCategory] = useState();
  // const [filterBySubCategory, setFilterBySubCategory] = useState();
  // const [filterByBrand, setFilterByBrand] = useState();

  // console.log(filters);

  const categories = useSelector((state) => state.categories);
  const subCategories = useSelector((state) => state.subCategories);
  const brands = useSelector((state) => state.brands);

  const handleFilterByCategory = (e) => {
    console.log("valor de filterbycategory", e.target.value);
    // dispatch(getAllProductsByCategory(e.target.value))
    setActualFilter(e.target.value);
    setFilter(e.target.value);
  };

  const handleFilterBySubCategory = (e) => {
    setActualFilter(e.target.value);
    setFilter(e.target.value);
  };

  const handleFilterByBrand = (e) => {
    setActualFilter(e.target.value);
    setFilter(e.target.value);
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
      <FilterTitle>Filtrá tu búsqueda</FilterTitle>
      <div>
        <Types>
          <EachFilter>Categoría</EachFilter>
          <ul style={{ color: "white" }}>
            {categories &&
              categories.map((cat) => (
                <option
                  onClick={(e) => handleFilterByCategory(e)}
                  style={{ padding: "4px", cursor: "pointer" }}
                  value={cat.name}
                >
                  {cat.name}
                </option>
              ))}
          </ul>
        </Types>
        <Types>
          <EachFilter>Subcategoría</EachFilter>
          <ul style={{ color: "white" }}>
            {subCategories &&
              subCategories.map((sub) => {
                return (
                  <option
                    onClick={(e) => handleFilterBySubCategory(e)}
                    style={{ padding: "4px", cursor: "pointer" }}
                    value={sub.name}
                  >
                    {sub.name}
                  </option>
                );
              })}
          </ul>
        </Types>
        <Types>
          <EachFilter>Marca</EachFilter>
          <ul style={{ color: "white" }}>
            {brands.map((brand) => {
              return (
                <option
                  onClick={(e) => handleFilterByBrand(e)}
                  style={{ padding: "4px", cursor: "pointer" }}
                  value={brand.name}
                >
                  {brand.name}
                </option>
              );
            })}
          </ul>
        </Types>
        <Types>
          <EachFilter>Precio</EachFilter>
          <option
            style={{ padding: "4px", cursor: "pointer", color: "white" }}
            value="De mayor a menor"
          >
            De mayor a menor
          </option>
          <option style={{ padding: "4px", cursor: "pointer", color: "white" }}>
            De menor a mayor
          </option>
          <InputsMaxMin>
            <input type="number" placeholder="Máximo" />
            <input type="number" placeholder="Minimo" />
            {/* <button></button> */}
          </InputsMaxMin>
        </Types>
        <Types>
          <EachFilter>Ofertas</EachFilter>
          <option
            style={{ padding: "4px", cursor: "pointer", color: "white" }}
            value="De mayor a menor"
          >
            Desde 10% Off
          </option>
          <option style={{ padding: "4px", cursor: "pointer", color: "white" }}>
            Desde 15% Off
          </option>
        </Types>
        <Types>
          <EachFilter>Ofertas</EachFilter>
        </Types>
      </div>
    </Filt>
  );
}
