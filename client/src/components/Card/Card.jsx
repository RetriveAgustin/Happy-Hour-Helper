import React from "react";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import Wine from "../../assets/winee.png";
import "./Cards.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 12,
});

export const Card = ({ id, name, img, price, stock }) => {
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate()

  return (
    <div>
      <div className="main-container">
        <div onClick={() => navigate(`/product/${id}`)} className="img-box">
          <img className="image" src={img ? img : Wine} alt="not found" />
        </div>
        <div onClick={() => navigate(`/product/${id}`)} className="price">${price}</div>
        <div onClick={() => navigate(`/product/${id}`)} className="name">
          <h4 className="name-tag">{name}</h4>
        </div>
        <div className="sub-add">
          <IconButton
            color="secondary"
            sx={{color: "#52373c"}}
            disabled={amount === 1}
            onClick={() => setAmount(amount - 1)}
          >
            <IndeterminateCheckBoxRoundedIcon fontSize="large" />
          </IconButton>
          <input type="number" className="input" value={amount} style={{textAlign: 'center'}}/>
          <IconButton disabled={amount >= stock} sx={{color: "#52373c"}} color="secondary" onClick={() => setAmount(amount + 1)} >
            <AddBoxRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="add-btn">
          <AddToCart
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCartOutlinedIcon />}
            onClick={undefined}
            sx={{backgroundColor: "#52373c"}}
          >
            Agregar
          </AddToCart>
        </div>        
      </div>
    </div>
  );
};
