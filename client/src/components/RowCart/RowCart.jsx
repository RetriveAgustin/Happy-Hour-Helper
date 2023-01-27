import React, { useState } from "react";
import { Image, SubAdd } from "../../components/RowCart/RowCart.styles.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const RowCart = ({
  img,
  name,
  price,
  bulk_discount,
  has_discount,
  minimum_amount_for_bulk,
}) => {
  const [amount, setAmount] = useState(1);

  const subtot = price * amount;
  const multip = amount * minimum_amount_for_bulk;

  // const totalIf = () => {
  //   for (let i = 0; (i = amount); i++) {
  //     let num = 0;
  //     const subtotDisc = subtot - bulk_discount;
  //     if (has_discount && (i === minimum_amount_for_bulk || i === multip)) {
  //       num = subtotDisc;
  //     } else {
  //       num += price;
  //     }
  //   }
  //   return num;
  // };

  // 1   2   3   4   5   6
  //+60 +60 +50 +60 +60 +50
  // 60 120 170 230 290 340

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        value="name"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <DeleteIcon />
        {name}
        <Image src={img} />
      </TableCell>
      <TableCell align="right" value="price">
        ${price}
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
        ${bulk_discount}
      </TableCell>
      <TableCell align="right" value="subtotal">
        ${subtot}
      </TableCell>
      <TableCell align="right" value="total"></TableCell>
      <Divider />
    </TableRow>
  );
};

export default RowCart;
