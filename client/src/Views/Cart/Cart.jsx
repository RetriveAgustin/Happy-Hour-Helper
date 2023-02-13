import React, { useState } from "react";

import { useSelector } from "react-redux";
import { CartCont, Button, Title } from "./Cart.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowCart from "../../components/RowCart/RowCart";
import { useNavigate } from "react-router-dom";
import accounting from "accounting";
import PayButton from "./PayButton";

const Cart = () => {
  const navigate = useNavigate();

  const stateCart = useSelector((state) => state.root.cart);
  const totalPrice = stateCart.reduce((acc, item) => (item.price * item.amount) + acc, 0);
  const user = useSelector(state => state.user.userLogged)

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
                <TableCell>Price</TableCell>
                <TableCell>Qantity</TableCell>
                <TableCell>Subtotal</TableCell>
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
                      bulk_discount={e.bulk_discount}
                      has_discount={e.has_discount}
                      minimum_amount_for_bulk={e.minimum_amount_for_bulk}
                      amount={e.amount}
                    />
                  );
                })}
              <TableRow>
                <TableCell colSpan={5}>
                  <h3>Total</h3>
                </TableCell>
                <TableCell align="right">
                  <h3> {accounting.formatMoney(totalPrice)}</h3>
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

            {
              user?
              <PayButton productItem = {stateCart}/>
              :
              <></>
            }
            
          </div>
        </TableContainer>
      </CartCont>
    </>
  );
}

export default Cart
