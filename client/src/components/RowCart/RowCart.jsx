import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotal, removeFromCart } from "../../redux/actions/actions.js";
import { Image, SubAdd } from "../../components/RowCart/RowCart.styles.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import accounting from "accounting";

const RowCart = ({ img, name, price, has_discount, amount }) => {
  const dispatch = useDispatch();

  const subtot = price * amount;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        value="name"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <DeleteIcon onClick={() => dispatch(removeFromCart(name))} />
        {name}
        <Image src={img} />
      </TableCell>
      <TableCell align="right" value="price">
        {price}
      </TableCell>
      <TableCell align="right" value="quantity">
        <SubAdd>
          <IconButton color="secondary" disabled={amount === 1}>
            -
          </IconButton>
          <input type="number" className="input" value={amount} />
          <IconButton color="secondary">+</IconButton>
        </SubAdd>
      </TableCell>
      <TableCell align="right" value="subtotal">
        {subtotal}
      </TableCell>
      <TableCell align="right" value="total">
        {/* {accounting.formatMoney(totalConDesc())} */}
      </TableCell>
    </TableRow>
  );
};

export default RowCart;
