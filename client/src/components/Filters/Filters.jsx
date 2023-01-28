import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
} from "../../redux/actions/actions";
import { TreeView } from "@mui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import Category from "./Category";
import {
  Filt,
  FilterTitle,
  EachFilter,
  Types,
  InputsMaxMin,
} from "./Filters.styles";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box } from "@mui/system";

export default function Filters({ render, setRender }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  // const subCategories = useSelector((state) => state.subCategories);
  // const brands = useSelector((state) => state.brands);

  // const handleFilter = (e) => {
  //   console.log("valor de filterbycategory", e.target.value);
  //   setActualFilter(e.target.value);
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
          <EachFilter>Categorías</EachFilter>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            sx={{ height: "fit-content", flexGrow: 1 }}
          >
            {categories &&
              categories.map((category) => {
                return <Box>
                  <Category category={category} setRender={setRender} render={render} />
                </Box>
              })}
          </TreeView>
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
          </InputsMaxMin>
        </Types>

        <Types>
          <EachFilter>Descuentos</EachFilter>
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
