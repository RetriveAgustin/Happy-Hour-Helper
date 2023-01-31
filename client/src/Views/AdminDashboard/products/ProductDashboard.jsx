import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllSubCategories,
  getAllCategories,
  getAllBrands,
} from "../../../redux/actions/actions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Search, Clear, Delete } from "@mui/icons-material";
import {
  DashboardInfoContainer,
  DataOutput,
  FilterInput,
  HeaderContainer,
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
} from "./ProductDashboard.styles";
import EditProductButton from "./EditPopup/EditProduct";
import DeleteProduct from "./DeleteProducts/DeleteProduct";

//  ---IMPORTANTE---
//  Despues reemplazar el estado "productInfo" por los usuarios traidos desde el back en el UseEffect.
//  Eliminar la variable "users"
//  Si despues es necesario modificar algun estilo, se encuentran todos en el archivo "./AdminDashboard.styles.js"

function ProductsDashboard() {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  const allBrands = useSelector((state) => state.brands);
  const allCategories = useSelector((state) => state.categories);
  const allSubCategories = useSelector((state) => state.subCategories);
  const [productInfo, setProductInfo] = useState([]);
  const [searchValues, setSearchValues] = useState({
    value: "",
    filter: "name",
  });
  const [isActive, setIsActive] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // -----------------------------------------------------------------------
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllSubCategories());
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, [dispatch]);

  useEffect(() => {
    setProductInfo(allProducts);
  }, [allProducts]);

  const HandleFilter = (searchname) => {
    setSearchValues({ ...searchValues, value: searchname });
  };

  const SearchData = (value) => {
    if (value) {
      if (searchValues.filter === "name") {
        let filteredData = productInfo.filter((product) =>
          product.name.toLowerCase().includes(searchValues.value.toLowerCase())
        );
        setIsActive(true);
        return setProductInfo(filteredData);
      }
      if (searchValues.filter === "id") {
        let filteredData = productInfo.filter((product) =>
          product.id.toLowerCase().includes(searchValues.value.toLowerCase())
        );
        setIsActive(true);
        return setProductInfo(filteredData);
      }
    }
  };

  const ClearData = () => {
    setProductInfo(allProducts);
    setSearchValues({ ...searchValues, value: "" });
    setIsActive(false);
  };

  const HandleSelect = (e) => {
    setSearchValues({ ...searchValues, filter: e.target.value });
  };

  const HandleSelectByBrand = (value) => {
    if (value) {
      let filteredProducts = allProducts.filter((el) =>
        el.Brands[0].id.includes(value)
      );
      return setProductInfo(filteredProducts);
    }
    setProductInfo(allProducts);
  };

  const HandleSelectByCategory = (value) => {
    if (value) {
      let filteredProducts = allProducts.filter((el) =>
        el.Categories[0].id.includes(value)
      );

      return setProductInfo(filteredProducts);
    }
    setProductInfo(allProducts);
  };

  const HandleSelectBySubCategory = (value) => {
    if (value) {
      let filteredProducts = allProducts.filter((el) =>
        el.Sub_categories[0].id.includes(value)
      );

      return setProductInfo(filteredProducts);
    }
    setProductInfo(allProducts);
  };

  return (
    <DashboardInfoContainer>
      <HeaderContainer>
        <label>Brands:</label>
        <FilterInput
          defaultValue={selectedBrand}
          onChange={(e) => HandleSelectByBrand(e.target.value)}
        >
          <option value="">None</option>
          {allBrands
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((brand) => (
              <option value={brand.id}>{brand.name}</option>
            ))}
        </FilterInput>

        <label>Categories:</label>
        <FilterInput
          defaultValue={selectedCategory}
          onChange={(e) => HandleSelectByCategory(e.target.value)}
        >
          <option value="">None</option>
          {allCategories
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
        </FilterInput>

        <label>Sub-Categories:</label>
        <FilterInput
          defaultValue={selectedSubCategory}
          onChange={(e) => HandleSelectBySubCategory(e.target.value)}
        >
          <option value="">None</option>
          {allSubCategories
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((subcat) => (
              <option value={subcat.id}>{subcat.name}</option>
            ))}
        </FilterInput>

        <label>Filter by:</label>
        <FilterInput onChange={(e) => HandleSelect(e.target.value)}>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </FilterInput>
        <SearchBarContainer>
          <SearchBarInput
            value={searchValues.value}
            onChange={(e) => HandleFilter(e.target.value)}
          />
          <SearchButton
            onClick={() =>
              isActive ? ClearData() : SearchData(searchValues.value)
            }
          >
            {isActive ? <Clear /> : <Search />}
          </SearchButton>
        </SearchBarContainer>
      </HeaderContainer>
      <DataOutput>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>ID</b>
                </TableCell>
                <TableCell align="center">
                  <b>Nombre</b>
                </TableCell>
                <TableCell align="center">
                  <b>Stock</b>
                </TableCell>
                <TableCell align="center">
                  <b>Precio</b>
                </TableCell>
                <TableCell align="center">
                  <b>Opciones</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productInfo.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.stock}</TableCell>
                  <TableCell align="center">$ {row.price}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup variant="contained" size="small">
                      <EditProductButton props={row} />
                      <DeleteProduct props={row} />
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DataOutput>
    </DashboardInfoContainer>
  );
}

export default ProductsDashboard;
