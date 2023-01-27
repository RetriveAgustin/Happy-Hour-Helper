import React, { useEffect, useState } from "react";
// import { CartCont } from "./Cart.styled";
import { getAllProducts } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { CartCont, Button, Title } from "../Cart/Cart";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header/Header";
import RowCart from "../../components/RowCart/RowCart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateProducts = useSelector((state) => state.products);
  // const cartState = useSelector(state => state.cart)

  // const deleteRow = () => {
  //   stateProducts.filter(e=>{
  //     e.id !==
  //   })
  // };

  useEffect(() => {
    dispatch(getAllProducts());
    console.log(stateProducts);
  }, [dispatch]);

  return (
    <>
      <Header />
      <CartCont>
        <TableContainer component={Paper}>
          <Title>Your Cart</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Qantity&nbsp;(g)</TableCell>
                <TableCell align="right">Discount&nbsp;(g)</TableCell>
                <TableCell align="right">Subtotal&nbsp;(g)</TableCell>
                <TableCell align="right">Total&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateProducts &&
                stateProducts?.map((e) => {
                  return (
                    <RowCart
                      img={e.img}
                      name={e.name}
                      price={e.price}
                      bulk_discount={e.bulk_discount}
                      has_discount={e.has_discount}
                      minimum_amount_for_bulk={e.minimum_amount_for_bulk}
                    />
                  );
                })}
            </TableBody>
          </Table>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",

              padding: "7px",
            }}
          >
            <Button onClick={() => navigate("/")}>Keep buying</Button>

            <Button onClick={() => navigate("/confirm")}>Checkout</Button>
          </div>
        </TableContainer>
      </CartCont>
    </>
  );
}
