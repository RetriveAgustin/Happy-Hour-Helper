import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TableContainer,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/actions";
import styled from "styled-components";

const SearchViewContainer = styled.div`
  color: white;
  background-color: #151515;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`;

const DataResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 60vw;
  gap: 0.2rem 0;
  background-color: white;
`;

const ProductInfoButton = styled.div`
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  gap: 0 1rem;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #dfe4ea;
  }
`;

const ProductImage = styled.img`
  height: 200px;
  width: 200px;
`;

function SearchView() {
  const [params] = useSearchParams();
  const [mappedProducts, setMappedProducts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryKey = params.get("name");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  useEffect(() => {
    setMappedProducts(
      products.filter((element) =>
        element.name.toLowerCase().includes(queryKey.toLowerCase())
      )
    );
  }, [queryKey]);

  return (
    <SearchViewContainer>
      <h1>Resultados para: {queryKey}</h1>
      {/* <List>
        {mappedProducts?.map((element) => (
            <ListItem>
              <ListItemButton onClick={() => navigate(`/product/${element.id}`)}>
                <ListItemText primary={element.name} />
              </ListItemButton>
            </ListItem>
        ))}
      </List> */}
      <DataResultsContainer>
        {mappedProducts?.map((element) => (
          //   <ListItem>
          //     <ListItemButton onClick={() => navigate(`/product/${element.id}`)}>
          //       <ListItemText primary={element.name} />
          //     </ListItemButton>
          //   </ListItem>
          <ProductInfoButton onClick={() => navigate(`/product/${element.id}`)}>
            <ProductImage src={element.img} />
            <div style={{ justifySelf: "end" }}>
              <p>{element.name}</p>
              <h2>${element.price}</h2>
            </div>
          </ProductInfoButton>
        ))}
      </DataResultsContainer>
    </SearchViewContainer>
  );
}

export default SearchView;
