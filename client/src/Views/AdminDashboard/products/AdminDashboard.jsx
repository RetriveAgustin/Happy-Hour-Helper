import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DashboardInfoContainer,
  DataOutput,
  FilterInput,
  HeaderContainer,
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
} from "./AdminDashboard.styles";
import DrawerComponent from "../drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/actions";

//  ---IMPORTANTE---
//  Despues reemplazar el estado "productInfo" por los usuarios traidos desde el back en el UseEffect.
//  Eliminar la variable "users"
//  Si despues es necesario modificar algun estilo, se encuentran todos en el archivo "./AdminDashboard.styles.js"

function AdminDashboardProducts() {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  const [productInfo, setProductInfo] = useState([]);
  const [searchValues, setSearchValues] = useState({
    value: "",
    filter: "name",
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
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

  return (
    <DashboardInfoContainer>
      <DrawerComponent />
      <HeaderContainer>
        <label>Filter by:</label>
        <FilterInput defaultValue={searchValues.filter} onChange={HandleSelect}>
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
            {isActive ? <ClearIcon /> : <SearchIcon />}
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
                  <b>Name</b>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DataOutput>
    </DashboardInfoContainer>
  );
}

export default AdminDashboardProducts;
