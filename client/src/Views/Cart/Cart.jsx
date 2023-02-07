import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CartCont, Button, Title } from "./Cart.styles";
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
import accounting from "accounting";
import PayButton from "./PayButton";

const Cart = () => {
  const navigate = useNavigate();

  const stateCart = useSelector((state) => state.root.cart);
  const subtotalPrice = stateCart.reduce((acc, item) => item.price + acc, 0);

  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setTotal(total + e);
  };

  return (
    <>
      <CartCont>
        <TableContainer component={Paper}>
          <Title>Your Cart</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Qantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateCart &&
                stateCart?.map((e) => {
                  return (
                    <RowCart
                      img={e.img}
                      name={e.name}
                      price={e.price}
                      has_discount={e.has_discount}
                      amount={e.amount}
                    />
                  );
                })}
              <TableRow>
                <TableCell colSpan={5}>
                  <h3>Subtotal</h3>
                </TableCell>
                <TableCell align="right">
                  <h3> {accounting.formatMoney(subtotalPrice)}</h3>
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "7px",
            }}
          >
            <Button onClick={() => navigate("/")}>Keep buying</Button>

            {/* <PayButton productItem = {stateCart}/> */}
            
          </div>
        </TableContainer>
      </CartCont>
    </>
  );
}

export default Cart
