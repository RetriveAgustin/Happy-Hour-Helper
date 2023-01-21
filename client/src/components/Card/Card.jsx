import React from 'react'
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import Wine from "../../assets/winee.png";
import './Cards.css'
import { useState } from "react";

const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 12,
});

export const Card = () => {
  const [amount, setAmount] = useState(1)
  
  return (
    <div>
    <div className="main-container">
      <div className='img-box'>
        <img className='image' src={Wine} alt="not found" />
      </div>
      <div className='price'>
        00.00$
      </div>
      <div className='name'>       
      <h4 className='name-tag'>Name</h4>
      </div>
      <div className="sub-add">
        <IconButton color="secondary" disabled={amount === 1} onClick={()=>setAmount(amount - 1)}>
          <IndeterminateCheckBoxRoundedIcon fontSize='large'/>
        </IconButton>
        <input type='number' className="input" value={amount}/>
        <IconButton color="secondary" onClick={()=>setAmount(amount + 1)}>
          <AddBoxRoundedIcon fontSize='large'/>
        </IconButton>
      </div>
      <div className="add-btn">
      <AddToCart
        variant="contained"
        color="secondary"
        startIcon={<ShoppingCartOutlinedIcon />}
        onClick={undefined}
        >
        Agregar
      </AddToCart>
        </div>
    </div>
    </div>
  )
}
