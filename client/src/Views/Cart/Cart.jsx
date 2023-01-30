import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Table, Wrapper, Cell } from "./Cart.styles";

function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <>
      {/* <Header /> */}
      <Wrapper>
        <Table>
          {cart.map((e) => {
            return <div>{e.name}</div>;
          })}
        </Table>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Cart;
