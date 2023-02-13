import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllSubCategories,
  getAllBrands,
  filterByPrice,
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
import { Box } from "@mui/system";
import { Slider } from "@mui/material";

export default function Filters({ render, setRender, Checked, setChecked }) {
  const dispatch = useDispatch();

  const [val, setVal] = useState([0, 40000])

  const updateRange = (e, data) => {
    setVal(data)
    dispatch(filterByPrice(val))
  }


  const categories = useSelector((state) => state.root.categories);
  
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
                  <Category category={category} setRender={setRender} render={render} Checked={Checked} setChecked={setChecked} />
                </Box>
              })}
          </TreeView>
        </Types>
        <Types>
          <EachFilter>Filtrar por precio</EachFilter>
          <Slider
        value={val}
        min={0}
        max={40000}
        sx={{width: '14rem', alignSelf:'center', marginTop: '1rem'}}
        onChange={updateRange}
        valueLabelDisplay="auto"
      />
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
