import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions.js";
import { Image, SubAdd } from "../../components/RowCart/RowCart.styles.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import accounting from "accounting";

const RowCart = ({
  img,
  name,
  price,
  bulk_discount,
  has_discount,
  minimum_amount_for_bulk,
}) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const subtot = price * amount;
  const division = amount / minimum_amount_for_bulk;
  const totalProd = subtot - bulk_discount * Math.floor(division);

  const totalConDesc = () => {
    if (
      amount >= minimum_amount_for_bulk ||
      amount % minimum_amount_for_bulk === 0
    ) {
      return totalProd;
    } else {
      return subtot;
    }
  };

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
          <IconButton
            color="secondary"
            disabled={amount === 1}
            onClick={() => setAmount(amount - 1)}
          >
            -
          </IconButton>
          <input type="number" className="input" value={amount} />
          <IconButton color="secondary" onClick={() => setAmount(amount + 1)}>
            +
          </IconButton>
        </SubAdd>
      </TableCell>
      <TableCell align="right" value="bulk_discount">
        {bulk_discount}
      </TableCell>
      <TableCell align="right" value="subtotal">
        {subtot}
      </TableCell>
      <TableCell align="right" value="total">
        {totalConDesc()}
      </TableCell>
    </TableRow>
  );
};

export default RowCart;
