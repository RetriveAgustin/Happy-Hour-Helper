import React from "react";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import Wine from "../../assets/winee.png";
import "./Cards.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/actions";

const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 12,
});

const Card = ({ product }) => {
  const { id, name, img, price, stock } = product
  const [amount, setAmount] = useState(1);
  
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    if(!e.target.value) {
      return
    }
    dispatch(addToCart(e.target.value))
  }

    

  const navigate = useNavigate()

  return (
    <div>
      <div className="main-container">
        <div onClick={() => navigate(`/product/${id}`)}>
        <div className="img-box">
          <img className="image" src={img ? img : Wine} alt="not found" />
        </div>
        <div className="price">${price}</div>
        <div className="name">
          <h4 className="name-tag">{name}</h4>
        </div>
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
          <input type="number" className="input" value={amount} style={{textAlign: 'center' , borderRadius: '5px', border: '1px solid #bdbdbd'}}/>
          <IconButton disabled={amount >= stock} sx={{color: "#52373c"}} color="secondary" onClick={() => setAmount(amount + 1)} >
            <AddBoxRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="add-btn">
          <AddToCart
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCartOutlinedIcon />}
            value={id}
            onClick={(e) => handleAdd(e)}
            sx={{backgroundColor: "#52373c"}}
          >
            Agregar
          </AddToCart>
        </div>        
      </div>
    </div>
  );
};

export default Card;