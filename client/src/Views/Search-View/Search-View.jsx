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
import Header from "../../components/Header/Header";

function SearchView() {
  const [params] = useSearchParams();
  const [mappedProducts, setMappedProducts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryKey = params.get("name");

  //   useEffect(() => {
  //     dispatch(getAllProducts());
  //   }, []);

  const products = useSelector((state) => state.products);

  useEffect(() => {
    setMappedProducts(
      products.filter((element) =>
        element.name.toLowerCase().includes(queryKey.toLowerCase())
      )
    );
  }, []);

  const HandleClick = () => {
    console.log(mappedProducts);
  };

  return (
    <div>
      {/* <Header /> */}
      <h1>My query value is: {queryKey}</h1>
      <button onClick={HandleClick}>Watoncito</button>
      {/* <ul>
        {mappedProducts?.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul> */}
      <List>
        {mappedProducts?.map((element) => (
          <ListItem>
            <ListItemButton onClick={() => navigate(`/product/${element.id}`)}>
              <ListItemText primary={element.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SearchView;
